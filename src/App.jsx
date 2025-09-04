import { useState } from "react"
import "./style.css"

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
      <div className="pages" style={{ transform: `translateX(-${(currentPage - 1) * 100}vw)` }}>
        <div className="page">
          <h1>Welcome</h1>
          <div className="box home">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="page">
          <h1>About</h1>
          <div className="box about">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="page">
          <h1 className="welcome">Projects</h1>
          <div className="projects">
            <div className="box projects">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="box projects">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="box projects">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="box projects">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="page">
          <h1 className="welcome">Links</h1>
          <div className="box links">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App