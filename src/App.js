import './App.css';
import './WikiPage.css'
import { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import WikiPage from './WikiPage';

function App() {
  const [searchQuery, SetSearchQuery] = useState();
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log(searchQuery)
      navigate(`/wiki/${searchQuery}`)
    }
  }

  return (
    <div className='container'>
      
      <header>
        <h1>Lethal Company WIKI</h1>
        <div className='search-container'>
          <div className='search-icon'>🔍</div>
          <input
            type='text'
            className='search-input'
            placeholder='검색하기'
            value={searchQuery}
            onChange={(e) => SetSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          ></input>
        </div>
      </header>
      <main>
        <Routes>
          <Route path='/wiki/:searchQuery' element={<WikiPage></WikiPage>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
