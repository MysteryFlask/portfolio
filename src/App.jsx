import { useState } from 'react'
import './style.css'

function App() {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <>
      <nav className="navbar">
        <a onClick={() => setCurrentPage(1)}>Home</a>
        <a onClick={() => setCurrentPage(2)}>About</a>
        <a onClick={() => setCurrentPage(3)}>Projects</a>
        <a onClick={() => setCurrentPage(4)}>Links</a>
      </nav>
      {currentPage === 1 &&
        <div className="page home">
          <h1>Home</h1>
        </div>
      }
      {currentPage === 2 &&
        <div className="page about">
          <h1>About</h1>
        </div>
      }
      {currentPage === 3 &&
        <div className="page projects">
          <h1>Projects</h1>
        </div>
      }
      {currentPage === 4 &&
        <div className="page links">
          <h1>Links</h1>
        </div>
      }
    </>
  )
}

export default App