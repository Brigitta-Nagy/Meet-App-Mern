import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import CreateEvent from "./pages/CreateEvent";
import EventsPage from './pages/EventsPage';
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home  from "./pages/Home"
import Navbar from "./components/Navbar"


function App() {
   return (

    <>
    <Router>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<EventsPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/create' element={<CreateEvent/>}/>
          <Route path='/events' element={<Home />} />
        </Routes>
     
    </Router>
    
  </>
)
//     <>
//     <Router>
//       <Navbar />
   
//          <Routes>
//             <Route path='/' element ={<Home/>}/>
//         </Routes>
//         <Routes>
//             <Route path='/login' element ={<Login/>}/>
//         </Routes>
//         <Routes>
//             <Route path='/signup' element ={<Signup/>}/>
//         </Routes>
//         <Routes>
//             <Route path='/events' element ={<EventsPage/>}/>
//         </Routes>
//         <Routes>
//             <Route path='create' element ={<CreateEvent/>}/>
//         </Routes>
//      </Router>
//     </>
//   );
 }

export default App;
