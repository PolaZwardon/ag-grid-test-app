import { useContext, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { UserContext } from '../state/UserContext';

export const InputName = () => {

    const { user, setUser } = useContext(UserContext);
    const [error, setError] = useState("");

    const [name, setName] = useState("");

    const validateUsername = (name: string) => {
        return /^[A-Za-z0-9]{8,20}$/.test(name);
    };

    if (!user) return <p>No user data</p>;

    const updateName = () => {
        if (!validateUsername(name)) {
            setError("Your name must be 8-20 characters long and must not contain spaces, special characters, or emoji.");
            return;
        }
        setError("");
        setTimeout(() => setUser({ ...user, name: name }), 1000);
        setError("Name updated successfully.");
        setName("");
    };

    return (
        <>
            <Container style={{ marginTop: '10px' }}>
                <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                    <Col xs={8}>
                        <Form.Control
                            type="text"
                            id="name"
                            placeholder="Enter name"
                            aria-describedby="inputNameHelpBlock"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Form.Text id="passwordHelpBlock" muted style={{ fontSize: '11px' }}>
                            {error}
                        </Form.Text>
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={updateName} style={{ fontSize: '12px' }}>Change Name</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}