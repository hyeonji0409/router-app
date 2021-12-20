import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import MovieInfo from './components/MovieInfo';
import Movie from './components/Movie';


function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">홈 화면 보기</Link>
        </li>
        <li>
          <Link to="/about">about 화면 보기</Link>
        </li>
        <li>
          <a href="https://www.naver.com" target="_blank">naver로 이동</a>
        </li>
        <li>
          <Link to="/movieInfo">영화정보 보기</Link>
        </li>
        <li>
          <Link to="/movie/spider">스파이더맨</Link>
        </li>
        <li>
          <Link to="/movie/king">킹스맨</Link>
        </li>
        <li>
          <Link to="/movie/squid">오징어게임</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movieInfo" element={<MovieInfo />} />
        <Route path="/movie/:keyword" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
