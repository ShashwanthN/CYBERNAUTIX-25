import React, { useEffect, useState } from 'react';
import { db } from '../backend/firebase';
import { collection, getDocs } from 'firebase/firestore';
import './AdminDashboard.css';

function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [searchId, setSearchId] = useState("");

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

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleEventSelect = (event) => {
        setSelectedEvent(event);
        setIsDropdownOpen(false);
    };

    const filteredUsers = users.filter(user => {
        const userEvents = [...(user.technicalEvents || []), ...(user.nonTechnicalEvents || [])].map(e => e.toLowerCase());
        const matchesEvent = selectedEvent ? userEvents.includes(selectedEvent.toLowerCase().trim()) : true;
        const matchesId = searchId ? user.id.substring(0, 6).toLowerCase().includes(searchId.toLowerCase().trim()) : true;
        return matchesEvent && matchesId;
    });
    
    

    return (
        <div className="ad-admin-dashboard">
            <h1 className="ad-dashboard-title">Admin Dashboard</h1>
            <input
                type="text"
                className="ad-search-input"
                placeholder="Search Unique ID..."
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
            />
            <div className="ad-table-container">
                <table className="ad-user-table">
                    <thead>
                        <tr>
                            <th>Unique ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>College</th>
                            <th>Department</th>
                            <th>
                                <div className="ad-header-dropdown">
                                    <button className="dropdown-button" onClick={toggleDropdown}>Events ▼</button>
                                    {isDropdownOpen && (
                                        <ul className="dropdown-content">
                                            {users.flatMap(user => [...user.technicalEvents, ...user.nonTechnicalEvents])
                                                .filter((event, index, self) => self.indexOf(event) === index)
                                                .map((event, index) => (
                                                    <li key={index} onClick={() => handleEventSelect(event)}>{event}</li>
                                                ))}
                                        </ul>
                                    )}
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map(user => (
                            <tr key={user.id}>
                                <td>{user.id.substring(0, 6)}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.college}</td>
                                <td>{user.department}</td>
                                <td>{[...user.technicalEvents, ...user.nonTechnicalEvents].join(", ") || "No Events"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminDashboard;
