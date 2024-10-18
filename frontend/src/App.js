
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import LandingPage from './Pages/LandingPage/LandingPage';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Tasks from './Pages/Tasks/Tasks';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
        <Route path='/' Component={LandingPage} exact></Route>
        <Route path='/tasks' Component={Tasks}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
