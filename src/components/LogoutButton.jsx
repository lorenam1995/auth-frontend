import { Button } from 'react-bootstrap';
import axios from 'axios';

function LogoutButton({ onLogout }) {
  const handleLogout = async () => {
    const token = localStorage.getItem('token');

    try {
      await axios.post(
        'http://localhost:8000/api/logout',
        {},
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      localStorage.removeItem('token');
      onLogout();
    } catch (err) {
      alert('Error al cerrar sesión');
    }
  };

  return <Button variant="danger" onClick={handleLogout}>Cerrar Sesión</Button>;
}

export default LogoutButton;