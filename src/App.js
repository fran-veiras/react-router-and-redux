import './App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createStore } from 'redux';
import { NightModeControl } from './components/NightModeControl';
import { Container } from '@chakra-ui/react';

function App() {
  const [numberId, setNumberId] = useState('');

  const handlerNumberId = (e) => {
    setNumberId(e.target.value);
  };

  const [routes, setRoutes] = useState([]);

  const sendData = () => {
    setRoutes((val) => [...val, numberId]);
  };

  // (state, action) {newState}

  function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
      case 'counter/incremented':
        return { value: state.value + 1 };
      case 'counter/decremented':
        return { value: state.value - 1 };
      default:
        return state;
    }
  }

  let store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(() => console.log(store.getState()));

  const incrementState = () => {
    store.dispatch({ type: 'counter/incremented' });
  };

  const decrementState = () => {
    store.dispatch({ type: 'counter/decremented' });
  };

  const [mode, setMode] = useState(false);

  return (
    <Container>
      <input
        value={numberId}
        placeholder="numberId"
        onChange={handlerNumberId}
      ></input>
      <button onClick={sendData}>Envíar</button>
      <h1>Init</h1>
      {routes.map((val) => (
        <p key={val}>{val}</p>
      ))}
      <nav>
        <Link to="/">init</Link> | <Link to="/home">Home</Link> |
        {routes.map((val) => (
          <Link to={`/teams/${val}`}>{val}</Link>
        ))}
      </nav>
      <button onClick={incrementState}>Increment</button>
      <button onClick={decrementState}>Decrement</button>
      <NightModeControl mode={mode} setMode={setMode} />
    </Container>
  );
}

export default App;
