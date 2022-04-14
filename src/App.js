import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cats">Cats</Link>
            </li>
            <li>
              <Link to="/dogs">Dogs</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/cats" element={<Cats />}/>
          <Route path="/dogs" element={<Dogs />}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Это домашняя страница</h2>;
}

function Cats() {
  return <h2>Это список котиков</h2>;
}

function Dogs() {
  return <h2>Это список песиков</h2>;
}