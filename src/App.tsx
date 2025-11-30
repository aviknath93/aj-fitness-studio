import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './layout/Footer'
import HomePage from './pages/HomePage'

function AppContent() {
  return (
    <div className="min-h-screen w-screen bg-background overflow-x-hidden">
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
