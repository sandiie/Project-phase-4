import react from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import AllProperties from './pages/AllProperties';
import Contact from './pages/Contact';
import AddProperty from './pages/AddProperty';
import Listing from './components/Listing';
import Indvidualproperty from './pages/Individualproperty';


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/allproperties" element={<AllProperties />} />
            <Route path="/addproperty" element={<AddProperty />} />
            <Route path="/individualproperty/:id" element={<Indvidualproperty />} />
             <Route path="/contact" element={<Contact/>} />
             
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
