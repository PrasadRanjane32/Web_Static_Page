import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Profile from './Components/Profile';
import Main from './Components/main';

function App() {
  return (
    <div className="App">
    <div className='row'>
      <div className='col-md-2'>
      <NavBar></NavBar>
      </div>
      <div className='col-md-7'>
        <Main></Main>
      </div>
      <div className='col-md-3'>
      <Profile></Profile>
      </div>
    </div>
     
     
    </div>
  );
}

export default App;
