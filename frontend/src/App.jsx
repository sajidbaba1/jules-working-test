import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
      <header>
        <h1>Real Estate Hub</h1>
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Welcome to the AI-Powered Real Estate Hub!</h2>
        <p>This is a placeholder for the main content area where property listings and other features will go.</p>
      </main>
    </div>
  )
}

export default App
