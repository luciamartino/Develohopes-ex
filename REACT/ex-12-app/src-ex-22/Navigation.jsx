import { Link } from 'react-router';

export function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/users/:username">Users</Link>
    </nav>
  );
}