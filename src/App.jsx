import React from 'react'
import Header from './components/Header/Header'
import Home from './pages/home/Home'

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Home />
            </main>
        </>
    )
}

export default App