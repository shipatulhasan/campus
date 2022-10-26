import React from 'react'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import {router} from './components/Routes/Routes'

function App() {

  return (
    <RouterProvider router={router}>
      <Toaster />
    </RouterProvider>

  )
}

export default App
