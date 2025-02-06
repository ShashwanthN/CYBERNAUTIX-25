import React, { useEffect, useState } from 'react';
import { db } from '../backend/firebase';
import { collection, getDocs } from 'firebase/firestore';
import './AdminDashboard.css';

function AdminDashboard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersCollection = collection(db, "Users");
                const usersSnapshot = await getDocs(usersCollection);
                const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setUsers(usersList);
            } catch (error) {
                console.error("Error fetching users: ", error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="admin-dashboard">
            <h1 className="dashboard-title">Admin Dashboard</h1>
            <div className="table-container">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>College</th>
                            <th>Department</th>
                            <th>Year</th>
                            <th>Total Events</th>
                            <th>Technical Events</th>
                            <th>Non-Technical Events</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.college}</td>
                                <td>{user.department}</td>
                                <td>{user.year}</td>
                                <td>{user.no_of_events}</td>
                                <td>{user.technicalEvents.join(", ")}</td>
                                <td>{user.nonTechnicalEvents.join(", ")}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminDashboard;
