import { useState } from 'react'
import './App.css'
import { Box } from '@mui/material'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Box component='img' src='/public/vite.svg' />
    </>
  )
}

export default App
