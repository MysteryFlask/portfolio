import { useState } from "react"
import "./style.css"
import { FaGithub, FaLinkedin, FaInstagram, FaJs, FaPython, FaJava } from "react-icons/fa"
import { VscVscode } from "react-icons/vsc"
import { SiWebstorm, SiIntellijidea } from "react-icons/si"

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
          <h1>Welcome!</h1>
          <div className="box home">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="page">
          <h1>About</h1>
          <div className="aboutboxes">
            <div className="box about text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ad optio animi nihil a aliquid, 
                repellendus deleniti, 
                id ullam assumenda magnam molestias rerum quae neque architecto ut consequuntur iste facilis ipsa?
              </p>
            </div>
            <div className="box about stack">
              <FaJs size={50} onClick={() => window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript", "_blank")} className="linkicon"/>
              <FaPython size={50} onClick={() => window.open("https://www.python.org", "_blank")} className="linkicon"/>
              <FaJava size={50} onClick={() => window.open("https://www.java.com", "_blank")} className="linkicon"/>
            </div>
            <div className="box about stack">
              <VscVscode size={50} onClick={() => window.open("https://code.visualstudio.com", "_blank")} className="linkicon"/>
              <SiIntellijidea size={50} onClick={() => window.open("https://www.jetbrains.com/idea", "_blank")} className="linkicon"/>
              <SiWebstorm size={50} onClick={() => window.open("https://www.jetbrains.com/webstorm", "_blank")} className="linkicon"/>
            </div>
          </div>
        </div>
        <div className="page">
          <h1 className="welcome">Projects</h1>
          <div className="projects">
            <div className="box project">
              <h1 className="title">Fun Stuff</h1>
              <img src="src/assets/reactfunstuff.png" onClick={() => window.open("https://reactfunstuff.vercel.app", "_blank")} className="projectimage"></img>
            </div>
            <div className="box project">
              <h1 className="title">Rapid Code</h1>
              <img src="src/assets/reactrapidcode.png" onClick={() => window.open("https://reactrapidcode.vercel.app", "_blank")} className="projectimage"></img>
            </div>
            <div className="box project">
              <h1 className="title">My Trip Itinerary</h1>
              <img src="src/assets/mytripitinerary.png" onClick={() => window.open("https://mytripitinerary.vercel.app/", "_blank")} className="projectimage"></img>
            </div>
            <div className="box project">
              <h1 className="title">Fake Update</h1>
              <img src="src/assets/fakeupdate.png" onClick={() => window.open("https://fakeupdate.vercel.app/", "_blank")} className="projectimage"></img>
            </div>
          </div>
        </div>
        <div className="page">
          <h1 className="welcome">Links</h1>
          <div className="box links">
            <FaGithub size={50} onClick={() => window.open("https://github.com/MysteryFlask", "_blank")} className="linkicon"/>
            <FaLinkedin size={50} onClick={() => window.open("https://linkedin.com", "_blank")} className="linkicon"/>
            <FaInstagram size={50} onClick={() => window.open("https://instagram.com/mazzua24", "_blank")} className="linkicon"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App