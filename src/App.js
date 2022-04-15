import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
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
      <Route key={doc.id} path={"/"+doc.id+"/*"} element={<Info doc={doc}/>}/>
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
          <Route exact path="/" element={<Home/>}/>
          {infoArray}
          <Route path="/contract" element={<Navigate replace to="/dog/abon"/>}/>
          <Route path="*" element={<NoMatch/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Это домашняя страница</h2>;
}

function NoMatch() {
  return <h2>Это 404 страница</h2>;
}


function Info(props) {
  
  const nestedLinksArray=props.doc.types.map(type=>{
    return(
      <li key={type.id}><Link to={props.path+"/"+type.id}>{type.title}</Link></li>
    )
    })

  const nestedInfoArray= props.doc.types.map(type =>{
    return(   
      
      <Route key={type.id} path={props.path+"/"+type.id} element={<DetailedInfo type={type}/>}/>
        
    )
  })
  console.log(props.path)
  console.log(nestedInfoArray)
  return (
    <div>
      <h2>{props.doc.description}</h2>
      <p>Путь: {props.path}</p>
      <ul>
        {nestedLinksArray}
      </ul>
    
      <Routes>
        {//<Route exact path={props.path} element={<h3>Please select a type.</h3>}/>}
}
        {nestedInfoArray}       
      </Routes>
    </div>
    
    )
}

function DetailedInfo(props) {
  return <h2>{props.type.description}</h2>;
}