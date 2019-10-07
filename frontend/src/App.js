import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <img src="{logo}" alt="AirCnC" />

      <div className="content">
        <p>
          Ofereça <strong> spots </strong> para programadores e encontre talentos para sua empresa
        </p>

        <form>
          <label htmlFor="email">E-MAIL *</label>
        <input 
          type="email" 
          id="email" 
          placeholder="Seu melhor e-mail"
        />

        <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
