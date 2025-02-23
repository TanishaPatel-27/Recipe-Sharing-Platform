import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Account.css';

const Account = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (!token) return;
            const { data } = await axios.get('http://localhost:5000/api/users/me', {
                headers: { Authorization: token },
            });
            setUser(data);
        };
        fetchUser();
    }, []);

    return (
        <div className="account-container">
            {user ? (
                <>
                    <h2>Welcome, {user.name}!</h2>
                    <p>Email: {user.email}</p>
                </>
            ) : (
                <p>Please log in.</p>
            )}
        </div>
    );
};

export default Account;
