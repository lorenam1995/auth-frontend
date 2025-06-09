import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/login', formData);
      const token = res.data.token;
      localStorage.setItem('token', token);
      onLogin();
    } catch (err) {
      alert('Error al iniciar sesión');
    }
  };

  return (
    <Container className="mt-4">
      <h2>Iniciar Sesión</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" name="password" onChange={handleChange} required />
        </Form.Group>
        <Button type="submit" variant="success">Iniciar Sesión</Button>
      </Form>
    </Container>
  );
}

export default LoginForm;
