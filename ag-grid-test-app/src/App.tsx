import { useState } from 'react'
import { UserContext } from './state/UserContext';
import './App.css'
import Profile from './components/Profile';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [user, setUser] = useState({ name: 'Pola', email: 'pola@example.com' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Container className="wrapper">
        <Row>
          <Col><Profile /></Col>
          <Col xs={2}>AG-Grid table to do here</Col>
        </Row>
      </Container>
    </UserContext.Provider>
  )
}

export default App
