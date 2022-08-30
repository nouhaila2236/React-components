import logo from './logo.svg';
import './App.css';
import  PhotoProfile  from './Component/Profile/ProfilePhoto';
import  FullName  from './Component/Profile/FullName';
import  Adress  from './Component/Profile/Adress';
function App() {
  return (
    <div className="App">
        <div className="App-photo">
      <PhotoProfile/> 
      </div>
      <FullName/> 
      <Adress/> 
    </div>
  );
}

export default App;
