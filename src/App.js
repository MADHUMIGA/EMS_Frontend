


import React from 'react';
import Registration from './components/Registration';
import Login from './components/Login';
// import './App.css'

import About from './components/Settings/About';
import Profile from './components/Profile';
import Addemp from './components/details/Addemp';
import Dashboard from './components/Dashboard';
import Empdetails from './components/Empdetails';
import Sidebar from './NewCom/Sidebar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";






function App() {
  return (
    
    <>
    <Router>
      
      <Routes>
       <Route path ="/" element={<Login/>}></Route>
       <Route path ="/registration" element={<Registration/>}></Route>
       <Route path="/dashboard"  element={<Dashboard/>}></Route>   
       <Route path="/empdetails"  element={<Empdetails/>}></Route>   
       <Route path="/addemp"  element={<Addemp/>}></Route>   
       <Route path="/about"  element={<About/>}></Route>   
       <Route path="/profile"  element={<Profile/>}></Route>   
      </Routes>
      
    </Router>
  
   </>
  );
}

export default App;

// function App(){
//   return(
//     <>
//     {/* <Sidebar/> */}
//     <Login/>
//     </>
//   )
// }
// export default App;

// <AuthProvider>
//       <div>
//         <h1>Your App</h1>
//         <LoginForm />
//       </div>
//     </AuthProvider>



// function App() {
//   return (
    
//     <>
//     <Router>
     
//       <Routes>

//       </Routes>
       
//     </Router>
  
//    </>
//   );
// }

// export default App;







//to post in json
// http://localhost:3002/user


