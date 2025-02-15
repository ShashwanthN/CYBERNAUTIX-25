import { doc, getDoc } from 'firebase/firestore';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useParams to get the userId from the URL and useNavigate for navigation
import { db } from '../backend/firebase';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiBook, FiDownload } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UserDetails.css';

const NeonPulse = ({ children }) => (
  <motion.h1
    initial={{ opacity: 0.8 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, repeat: Infinity }}
    className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-8 text-center"
  >
    {children}
  </motion.h1>
);

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
        <div className="h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black relative">
            <ToastContainer />
            {/* Animated Background Elements */}
            <div className="absolute h-full w-full inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(40deg,rgba(0,255,128,0.05)_0%,rgba(0,0,0,0)_50%,rgba(0,255,128,0.05)_100%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,128,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,128,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            </div>

            <div className="relative h-full z-10 container mx-auto py-4 flex flex-col">
                <NeonPulse>Cybernautix '25 Profile</NeonPulse>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex-1 lg:max-w-3xl w-full mx-auto bg-black/40 backdrop-blur-lg rounded-xl shadow-2xl p-8 border space-y-8 border-green-500/30 overflow-y-auto scrollbar-hide"
                >
                    <div className="space-y-6">
                        <div className="border-l-4 border-green-500 pl-4">
                            <h2 className="text-xl font-semibold text-green-400">Personal Details</h2>
                            <p className="text-sm text-gray-400 mt-1">Registered information</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { icon: FiUser, name: 'name', value: user.name },
                                { icon: FiMail, name: 'email', value: user.email },
                                { icon: FiPhone, name: 'phone', value: user.phone },
                                { icon: FiBook, name: 'college', value: user.college },
                                { icon: FiBook, name: 'department', value: user.department },
                                { icon: FiBook, name: 'year', value: user.year },
                            ].map((field) => (
                                <div key={field.name} className="relative">
                                    <field.icon className="absolute top-3 left-3 text-green-500" />
                                    <div className="w-full pl-10 pr-4 py-2.5 bg-black/30 rounded-lg border border-gray-700 text-gray-100">
                                        {field.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="border-l-4 border-green-500 pl-4">
                            <h2 className="text-xl font-semibold text-green-400">Event Details</h2>
                            <p className="text-sm text-gray-400 mt-1">Participating events</p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-green-400">Technical Events</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {user.technicalEvents.map(event => (
                                    <div key={event} className="space-y-2">
                                        <div className="p-4 rounded-lg border-2 border-green-500 bg-green-900/20">
                                            <span className="text-sm font-medium text-green-400">
                                                {event} - {user.teamNames[event]}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-green-400">Surprise Events</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="p-4 rounded-lg border-2 border-green-500 bg-green-900/20">
                                    <span className="text-sm font-medium text-green-400">
                                        {user.nonTechnicalEvents.join(', ')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={downloadPDF}
                        className="w-full py-3.5 px-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold text-white relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
                        <span className="relative flex items-center justify-center gap-2">
                            Download PDF
                            <FiDownload className="w-4 h-4" />
                        </span>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}

export default UserDetails;
