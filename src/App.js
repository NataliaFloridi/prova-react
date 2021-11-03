import 'bootstrap/dist/css/bootstrap.min.css'
import "./assets/css/style.css"
import Header from './components/template/Header/Header';
import Footer from './components/template/Footer/Footer';
import Sidebar from './components/template/Sidebar/Sidebar';
import { Routes } from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
      <>
        <Sidebar/>
        <Header/>
        <Router>
          <Routes/>
        </Router>
        <Footer/>
      </>
  );
}

export default App;
