import { Link } from 'react-router-dom';

import './Header.scss'

export default function Header() {
  return (
    <div className="header">
      <div className="header_menu">
        <ul className="menu_list">
          <Link
            to=""
            className="menu_item"
          >
            First Method
          </Link>
          <Link
            to="secondMethod"
            className="menu_item"
          >
            Second Method
          </Link>
          <Link
            to="thirdMethod"
            className="menu_item"
          >
            Third Method
          </Link>
          <Link
            to="fourthMethod"
            className="menu_item"
          >
            Fourth Method
          </Link>
          <Link
            to="fifthMethod"
            className="menu_item"
          >
            Fifth Method
          </Link>
        </ul>
      </div>
    </div>
  );
}
