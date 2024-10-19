
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import LandingPage from './Pages/LandingPage/LandingPage';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Tasks from './Pages/Tasks/Tasks';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
        <Route path='/' Component={LandingPage} exact></Route>
        <Route path='/signup' Component={RegisterPage}></Route>
        <Route path='/login' Component={LoginPage}></Route>
        <Route path='/tasks' Component={Tasks}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
