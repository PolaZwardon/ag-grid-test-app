import { useContext, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { UserContext } from '../state/UserContext';

export const InputEmail = () => {

    const { user, setUser } = useContext(UserContext);
    const [error, setError] = useState("");

    const [updatedEmail, setUpdatedEmail] = useState("");


    if (!user) return <p>No user data</p>;

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const updateEmail = () => {
        if (!validateEmail(updatedEmail)) {
            setError("Please enter a valid email address.");
            return;
        }
        setError("");
        setTimeout(() => setUser({ ...user, email: updatedEmail }), 1000);
        setError("Email updated successfully.");
        setUpdatedEmail("");
    };

    return (
        <>
            <Container style={{ padding: '20px' }}>
                <Row>
                    <Col xs={8}>
                        <Form.Control
                            type="text"
                            id="email"
                            placeholder="Enter new email"
                            aria-describedby="inputNameHelpBlock"
                            onChange={(e) => setUpdatedEmail(e.target.value)}
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                            {error}
                        </Form.Text>
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={updateEmail}>Change Email</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}