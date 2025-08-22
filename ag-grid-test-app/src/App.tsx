import { useState } from 'react'
import { UserContext } from './state/UserContext';
import './App.css'
import Profile from './components/Profile';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Table } from './components/Table';
// All Enterprise Features
import { AllEnterpriseModule } from 'ag-grid-enterprise';
// All Community Features
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

function App() {
  const [user, setUser] = useState({ name: 'Pola', email: 'pola@example.com' });

  ModuleRegistry.registerModules([AllCommunityModule]);

  ModuleRegistry.registerModules([AllEnterpriseModule]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Container className="wrapper">
        <Row>
          <Col xs={4}>
            <Profile />
          </Col>
          <Col xs={8} className='table-col'>
            <Table />
          </Col>
        </Row>
      </Container>
    </UserContext.Provider>
  )
}

export default App
