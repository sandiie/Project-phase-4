import react from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Allhouses from './pages/Allhouses';
import Contact from './pages/Contact';
import Addhouse from './pages/Addhouse';


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/allhouses" element={<Allhouses/>} />
            <Route path="/addhouse" element={<Addhouse/>} />
             <Route path="/contact" element={<Contact/>} />
             
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
