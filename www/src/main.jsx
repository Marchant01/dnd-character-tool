import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom';
import CharacterSheet from './character-sheet';
import NavBar from './navbar';

function FrontPage() {
  return <main id='front-page-main'>
    <div className='content-div'>
      <NavBar/>
      <h1>Front Page!</h1>
    </div>
  </main>
}

function App() {
  return (
    <Routes>
      <Route path='/' element={ <FrontPage/> } />
      <Route path='/character_sheet' element={ <CharacterSheet/> } />
    </Routes>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='app-container'>
      <HashRouter>
        <App/>
      </HashRouter>
    </div>
  </StrictMode>,
)
