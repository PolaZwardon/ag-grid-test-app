import { useContext } from 'react';
import { UserContext } from '../state/UserContext';

const Profile = () => {
    const { user, setUser } = useContext(UserContext);

    if (!user) return <p>No user data</p>;

    const updateName = () => {
        setUser({ ...user, name: 'New Name' });
    };

    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <button onClick={updateName}>Change Name</button>
        </div>
    );
};

export default Profile;