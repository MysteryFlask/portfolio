import React, { useEffect, useState } from 'react'
import './style.css'

function App() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
  }, []);

  console.log(offset)

  const getBackgroundColor = () => {
    if (offset >= 150) return "red";
    if (offset >= 100) return "green";
    if (offset >= 50) return "blue";
    if (offset >= 0) return "orange";
  }

  useEffect(() => {
    document.body.style.backgroundColor = getBackgroundColor()
  }, [offset])

  return (
    <>
    </>
  )
}

export default App
