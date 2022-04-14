import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import routeData from "./data/routeData.js"

export default function App() {
  
  const navArray = routeData.map(doc=>{
    return(
      <li key={doc.id}>
        <Link to={"/"+doc.id}>{doc.title}</Link>
      </li>
    )
  })

  const infoArray=routeData.map(doc =>{
    return(
      <Route key={doc.id} path={"/"+doc.id} element={<Info doc={doc} />}/>
    )
  })
  
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            {navArray}
          </ul>
        </nav>

        <Routes>
          {infoArray}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Info(props) {
  return (
    <h2>
      {props.doc.description}
    </h2>)
}