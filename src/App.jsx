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
      <div className='pages' style={{ transform: `translateX(-${(currentPage - 1) * 100}vw)` }}>
        <div className="page home">
          <a>Home</a>
        </div>
        <div className="page about">
          <a>About</a>
        </div>
        <div className="page projects">
          <a>Projects</a>
        </div>
        <div className="page links">
          <a>Links</a>
        </div>
      </div>
    </>
  )
}

export default App