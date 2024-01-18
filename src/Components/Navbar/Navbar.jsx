import './Navbar.css';
import nav_logo from '../../assets/nav-logo.svg';
import nav_profile from '../../assets/nav-profile.svg';

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={nav_logo} alt="" className="navbar__logo"/>
        <img src={nav_profile} alt="" className="navbar__profile"/>
    </div>
  )
}

export default Navbar