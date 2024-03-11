import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import '../assets/navbar.css';

const ListItem = (props) => {
  if (props.loc === "/" + props.name.toLowerCase().replace(" ", "")) {
    return (
      <li className='selected'><Link to={"/" + props.name.toLowerCase().replace(" ", "")}>{props.name}</Link></li>
    );
  } else {
    return (
      <li className='element'><Link to={"/" + props.name.toLowerCase().replace(" ", "")}>{props.name}</Link></li>
    );
  }
}

ListItem.propTypes = {
  loc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

function Navbar(props) {
  const list = ["Home", "Loans", "Farmer's Center", "About", "Feedback", "My Account"];
  const listItems = list.map((item, index) => <ListItem key={index} loc={props.loc} name={item} />);
  
  return (
    <div>
      <div className='container'>  
        <ul className='list-container'>
          {listItems}
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
