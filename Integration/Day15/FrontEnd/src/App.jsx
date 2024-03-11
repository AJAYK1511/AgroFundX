import './App.css'
import Home from './components/Home'
import SignInForm from './components/Login'
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
import CenterPage from './components/FarmerCenter'
import AboutPage from './components/About'
import { Feedback } from '@material-ui/icons'
import SidebarAdmin from './components/Sidebar1'
import AdminHome from './components/AdminHome'
import AllUsers from './components/AllUsers'
const Navi=()=>{
  const location=useLocation();
  if(location.pathname=='/dashadmin' ||location.pathname=='/dashhome' || location.pathname=='/loanpage' || location.pathname=='/allusers')
  {
    return(
      <>
      <SidebarAdmin />
      </>
     )
    }
    else if(location.pathname!='/' && location.pathname!='/signup' && location.pathname!='/admindash')
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
        <Route path="/" element={<SignInForm />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/myaccount" element={<UserProfile />}/>
        <Route path="/fundalloc" element={<FundAllocationTable />}/>
        <Route path="/dashboard" element={<AgricultureDashboard />}/>
        <Route path="/loans" element={<LoansPage />}/>
        <Route path="/dashadmin" element={<DashAdmin />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/dashhome" element={<AdminHome />}/>
        <Route path="/feedback" element={<Feedback />}/>
        <Route path="/allusers" element={<AllUsers />}/>
        <Route path="/farmer'scenter" element={<CenterPage />}/>
       </Routes>   
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
