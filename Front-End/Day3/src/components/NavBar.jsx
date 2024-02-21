import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import '../assets/navbar.css';

const Listele = (props) => {
  if (props.loc === "/" + props.name.toLowerCase().replace(" ", "")) {
    return (
      <li className='sele'><Link to={"/" + props.name.toLowerCase().replace(" ", "")}>{props.name}</Link></li>
    );
  } else {
    return (
      <li className='ele'><Link to={"/" + props.name.toLowerCase().replace(" ", "")}>{props.name}</Link></li>
    );
  }
}
Listele.propTypes = {
  loc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

function Navbar(props) {
  const list = ["Home", "Loans", "Farmer's Center", "New Plans", "About", "Feedback" , "My Account"];
  const listele = list.map((ele, index) => <Listele key={index} loc={props.loc} name={ele} />);
  return (
    <div>
      <div className='gg'>  
        <ul>
          {listele}
        </ul>
      </div>
      <div>
      </div>
    </div>
  );
}
Navbar.propTypes = {
  loc: PropTypes.string.isRequired
}

export default Navbar;
