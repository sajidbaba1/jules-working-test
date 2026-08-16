import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch properties from backend
    axios.get('http://localhost:8080/api/properties')
      .then(response => {
        setProperties(response.data)
        setLoading(false)
      })
      .catch(error => {
        console.error("Error fetching properties:", error)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <header>
        <h1>Real Estate Hub</h1>
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', padding: 0 }}>
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Welcome to the AI-Powered Real Estate Hub!</h2>

        <h3>Available Properties</h3>
        {loading ? (
          <p>Loading properties...</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            {properties.length === 0 ? (
              <p>No properties found.</p>
            ) : (
              properties.map(property => (
                <div key={property.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
                  <h4>{property.name}</h4>
                  <p>{property.description}</p>
                  <p><strong>Price:</strong> ${property.price}</p>
                  <p><strong>Status:</strong> {property.status}</p>
                  <p><strong>Location:</strong> {property.city}, {property.state}</p>
                </div>
              ))
            )}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
