import './App.css';
import  PhotoProfile  from './Component/Profile/ProfilePhoto';
import  FullName  from './Component/Profile/FullName';
import  Adress  from './Component/Profile/Adress';
function App() {
  return (
    <div className="App">
      <div className="App-card">
      <div className="App-photo">
        <PhotoProfile/> 
      </div>
      <div className="info">
      <FullName/> 
      <Adress/> 
      </div>
      </div>
    </div>
  );
}

export default App;
