import { Link } from 'react-router-dom';

function Home() {
  console.log('hola');
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">init</Link> | <Link to="/home">Home</Link>
      </nav>
    </div>
  );
}

export default Home;
