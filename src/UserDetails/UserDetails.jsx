import { doc, getDoc } from 'firebase/firestore';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useParams to get the userId from the URL and useNavigate for navigation
import { db } from '../backend/firebase';
import './UserDetails.css';

function UserDetails({ onNavigate }) {
    const nav = useNavigate();
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        let isMounted = true;
        
        const fetchData = async () => {
            const userData = localStorage.getItem('user');
            if (!userData) {
                nav('/login');
                return;
            }

            const { uid, expires } = JSON.parse(userData);
            if (Date.now() > expires) {
                localStorage.removeItem('user');
                nav('/login');
                return;
            }

            try {
                const userRef = doc(db, 'Users', uid);
                const userSnap = await getDoc(userRef);
                if (userSnap.exists() && isMounted) {
                    const userData = userSnap.data();
                    setUser(userData);
                    if (onNavigate) {
                        onNavigate(`/user/${userData.unique_id}`);
                    }
                } else {
                    console.log('No such user!');
                    nav('/login');
                }
            } catch (error) {
                if (isMounted) {
                    console.error('Error fetching user data: ', error);
                    nav('/login');
                }
            }
        };

        fetchData();
        return () => {
            isMounted = false; // Cleanup to prevent state updates on unmounted component
        };
    }, [nav, onNavigate]);

    const downloadPDF = () => {
        const doc = new jsPDF();
    
        doc.setFontSize(18);
        doc.text("RMK ENGINEERING COLLEGE\nCYBERNAUTIX-25", 14, 20);
    
        // Format technical events with team names
        const technicalEventsWithTeams = user.technicalEvents
            .map(event => `${event} - ${user.teamNames[event]}`)
            .join('\n');
    
        const userDetails = [
            ['Name', user.name],
            ['Email', user.email],
            ['Phone', user.phone],
            ['College', user.college],
            ['Department', user.department],
            ['Year', user.year],
            ['Unique Id', user.unique_id?.substring(0, 6)],
            ['Total Events', user.no_of_events],
            ['Technical Events', technicalEventsWithTeams], // Updated this line
            ['Surprise Events', user.nonTechnicalEvents.join(', ')],
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
                <p><strong>UniqueId:</strong> {user.unique_id?.substring(0, 6)}</p>
                <p><strong>Total Events:</strong> {user.no_of_events}</p>
                <p><strong>Technical Events:</strong></p>
            <ul>
                {user.technicalEvents.map(event => (
                    <li key={event} className='text-black'>
                        <strong>{event}</strong> - <>{user.teamNames[event]}</>
                    </li>
                ))}
            </ul>
                <p><strong>Surprise Event:</strong> {user.nonTechnicalEvents.join(', ')}</p>
                
            </div>
            <button className="ud-download-btn" onClick={downloadPDF}>Download as PDF</button>
        </div>
    );
}

export default UserDetails;
