import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Navbar from "./Pages/Shared/Navbar"


function App() {
  return (
    <div className="App px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
