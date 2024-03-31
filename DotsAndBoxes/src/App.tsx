import { Board } from './components/Board'
import { useContext } from 'react'
import './App.css'
import { ListContext } from './Providers/GridProvider';

function App() {
  const { dispatch } = useContext(ListContext);
  return (
    <>
      <button onClick={() => dispatch({ type: "resetGrid"})}>Reset</button>
      <Board/>
    </>
  )
}

export default App
