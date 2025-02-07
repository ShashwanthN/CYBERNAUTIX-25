import React, { useEffect, useState } from 'react';
import { db } from '../backend/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';  // Import useParams to get the userId from the URL
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './UserDetails.css';

function UserDetails() {
    const { userId } = useParams();  // Get userId from the URL
    const [user, setUser] = useState(null);
    const Id = userId.substring(0, 6);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userRef = doc(db, 'Users', userId);
                const userSnap = await getDoc(userRef);
                if (userSnap.exists()) {
                    setUser(userSnap.data());
                } else {
                    console.log('No such user!');
                }
            } catch (error) {
                console.error('Error fetching user data: ', error);
            }
        };

        if (userId) {
            fetchUser();
        }
    }, [userId]);

    const downloadPDF = () => {
        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text("RMK ENGINEERING COLLEGE\nCYBERNAUTIX-25", 14, 20);

        const userDetails = [
            ['Name', user.name],
            ['Email', user.email],
            ['Phone', user.phone],
            ['College', user.college],
            ['Department', user.department],
            ['Year', user.year],
            ['Unique Id', Id], 
            ['Total Events', user.no_of_events],
            ['Technical Events', user.technicalEvents.join(', ')],
            ['Non-Technical Events', user.nonTechnicalEvents.join(', ')],
        ];


        doc.autoTable({ startY: 30, head: [['Field', 'Value']], body: userDetails });
        doc.save('Cybernautix-25.pdf');
    };

    if (!user) return <p>Loading user details...</p>;

    return (
        <div className="ud-user-profile">
            <h1>User Profile</h1>
            <div className="ud-profile-container">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>     
                <p><strong>College:</strong> {user.college}</p>
                <p><strong>Department:</strong> {user.department}</p>
                <p><strong>Year:</strong> {user.year}</p>
                <p><strong>UniqueId</strong> {Id}</p>
                <p><strong>Total Events:</strong> {user.no_of_events}</p>
                <p><strong>Technical Events:</strong> {user.technicalEvents.join(', ')}</p>
                <p><strong>Non-Technical Events:</strong> {user.nonTechnicalEvents.join(', ')}</p>
            </div>
            <button className="ud-download-btn" onClick={downloadPDF}>Download as PDF</button>
        </div>
    );
}

export default UserDetails;
