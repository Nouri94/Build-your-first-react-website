import BannerImage from './components/BannerImage';
import AlbumMaker from './components/AlbumMaker'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage />
        <div>
        <h1> Welcome to my Photojournal</h1>
        <AlbumMaker />
        </div>
      </header>
    </div>
  );
}

export default App;
