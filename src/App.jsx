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
          <a>Home</a>
        </div>
      }
      {currentPage === 2 &&
        <div className="page about">
          <a>About</a>
        </div>
      }
      {currentPage === 3 &&
        <div className="page projects">
          <a>Projects</a>
        </div>
      }
      {currentPage === 4 &&
        <div className="page links">
          <a>Links</a>
        </div>
      }
    </>
  )
}

export default App