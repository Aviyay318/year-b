import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserProfile = () => {
    const { user, setUser } = useContext(UserContext);

    const toggleLogin = () => {
        setUser((prevUser) => ({
            ...prevUser,
            name:"aviya",
            loggedIn: !prevUser.loggedIn,
        }));
    };

    return (
        <div>
            <h2>Welcome, {user.name}!</h2>
            <p>Status: {user.loggedIn ? 'Logged In' : 'Logged Out'}</p>
            <button onClick={toggleLogin}>
                {user.loggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    );
};

export default UserProfile;
