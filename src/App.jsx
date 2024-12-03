import React from 'react'
import Hero from './components/Hero'

// relative min-h-screen  ka matlab ki min height 100% of total screen hoga
const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero></Hero>
    </main>
  )
}

export default App