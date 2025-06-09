import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import LogoutButton from './components/LogoutButton';
import { Container } from 'react-bootstrap';

function App() {
  const [authenticated, setAuthenticated] = useState(!!localStorage.getItem('token'));

  return (
    <Container>
      {!authenticated ? (
        <>
          <RegisterForm />
          <hr />
          <LoginForm onLogin={() => setAuthenticated(true)} />
        </>
      ) : (
        <>
          <Dashboard />
          <LogoutButton onLogout={() => setAuthenticated(false)} />
        </>
      )}
    </Container>
  );
}

export default App;
