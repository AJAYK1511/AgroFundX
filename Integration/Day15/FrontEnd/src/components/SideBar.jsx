import { Link } from 'react-router-dom';
import '../assets/SideBar.css';

const Sidebar = () => {
  const openSidebar = () => {
    document.getElementById("mySidebar").style.display = "block";
  };

  const closeSidebar = () => {
    document.getElementById("mySidebar").style.display = "none";
  };

  const logoutHandle =()=>
  {
    localStorage.removeItem('JWTtoken');
  }

  return (
    <>
      <div className="sidebar-header">
        <button className="sidebar-toggle-btn" onClick={openSidebar}>☰</button>
      </div>
      <div className="sidebar-menu" style={{ display: "none" }} id="mySidebar">
        <button onClick={closeSidebar} className="close-button">Close</button>
        <hr></hr>
        <Link to="/dashboard" className="sidebar-link">Dashboard</Link>
        <Link to="/fundalloc" className="sidebar-link">Fund Allocation</Link>
        <Link to="/fund" className="sidebar-link">Link</Link>
        <Link to="/funda" className="sidebar-link">Link</Link>
        <Link to="/" className="sidebar-link" onClick={logoutHandle}>Logout</Link>
      </div>
    </>
  );
}

export default Sidebar;
