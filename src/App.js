import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import LoggedInPage from './components/LoggedInPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Simulación de lógica de autenticación
    if (username === 'usuario' && password === 'contraseña') {
      setIsLoggedIn(true);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <LoggedInPage onLogin={handleLogin} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
