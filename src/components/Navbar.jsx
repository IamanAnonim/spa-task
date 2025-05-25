import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#f2f2f2' }}>
      <Link to="/" style={{ margin: '0 10px' }}>Haqqımızda</Link>
      <Link to="/portfolio" style={{ margin: '0 10px' }}>İş nümunələri</Link>
      <Link to="/contact" style={{ margin: '0 10px' }}>Əlaqə</Link>
    </nav>
  );
}

export default Navbar;
