import React from 'react';
import { Link } from 'react-router-dom';

function Teams() {
  console.log('hola');
  return (
    <div>
      <h1>Estos son los equipos.</h1>
      <nav>
        <Link to="/">init</Link> | <Link to="/home">Home</Link>
      </nav>
    </div>
  );
}

export default Teams;
