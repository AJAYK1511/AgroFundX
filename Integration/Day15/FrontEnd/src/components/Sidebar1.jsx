import { Link } from 'react-router-dom';
import '../assets/SideBar.css';

const SidebarAdmin = () => {
  const openSidebar = () => {
    document.getElementById("mySidebar").style.display = "block";
  };

  const closeSidebar = () => {
    document.getElementById("mySidebar").style.display = "none";
  };
  const logoutHandle=()=>
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
        <Link to="/dashadmin" className="sidebar-link">Dashboard</Link>
        <Link to="/allusers" className="sidebar-link">Users</Link>
        <Link to="/loanpage" className="sidebar-link">Loans</Link>
        <Link to="/" className="sidebar-link" onClick={logoutHandle}>Logout</Link>
      </div>
    </>
  );
}

export default SidebarAdmin;
