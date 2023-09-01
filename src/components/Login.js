import React, { useState } from 'react';
import LoginForm from './LoginForm';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Simulación de lógica de autenticación
    if (username === 'user' && password === '1234') {
      setIsLoggedIn(true);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <h2>Bienvenido, Usuario</h2>
      ) : (
        <div>
          <h2>Iniciar sesión</h2>
          <LoginForm onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default Login;
