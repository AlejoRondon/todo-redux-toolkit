import { Link } from 'react-router-dom';
import './Navbar.scss';
import { resetTasks } from '../../redux/todoSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate_to = useNavigate();
  const dispatch = useDispatch();

  const handleResetTasks = () => {
    navigate_to('/');
    dispatch(resetTasks());
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create New</Link>
        </li>
        <li>
          <Link onClick={handleResetTasks}>Reset</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
