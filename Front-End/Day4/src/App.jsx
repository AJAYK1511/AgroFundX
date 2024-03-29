import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Navbar from './components/NavBar'
import SideBar from './components/SideBar'
import UserProfile from './components/UserProfile'
import FundAllocationTable from './components/FundAlloc'
import AgricultureDashboard from './components/DashBoard'
import LoansPage from './components/Loans'
import DashAdmin from './components/Admindashboard'
const Navi=()=>{
  const location=useLocation();
  if(location.pathname!='/' && location.pathname!='/signup')
  {
    return(
      <>
      <Navbar loc={location.pathname}></Navbar>
      <SideBar />
      </>
      )
  }
  else{
    return null;
  }
}
function App() {
  return (
    <>
    <BrowserRouter>
      <div>
        <Navi></Navi>
        <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/myaccount" element={<UserProfile />}/>
        <Route path="/fundalloc" element={<FundAllocationTable />}/>
        <Route path="/dashboard" element={<AgricultureDashboard />}/>
        <Route path="/loans" element={<LoansPage />}/>
        <Route path="/admindash" element={<DashAdmin />}/>
       </Routes>   
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
