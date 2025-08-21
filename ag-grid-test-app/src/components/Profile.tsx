import { useContext, useState } from 'react';
import { UserContext } from '../state/UserContext';
import Card from 'react-bootstrap/Card';
import Image from '../assets/react.svg';
import { InputName } from './InputName';
import { InputEmail } from './InputEmail';

const Profile = () => {
    const { user } = useContext(UserContext);

    if (!user) return <p>No user data</p>;

    return (
        <Card>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
                <Card.Title>User name: {user.name}</Card.Title>
                <Card.Text>
                    Email: {user.email}
                </Card.Text>
                <InputEmail />
                <InputName />
            </Card.Body>
        </Card>
    );
};

export default Profile;