import React from 'react'
import Header from './components/Header/Header'
import Home from './pages/home/Home'
import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Home />
            </main>
            <Footer />
        </>
    )
}

export default App