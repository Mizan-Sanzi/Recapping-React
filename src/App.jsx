import './App.css'
import Counter from './counter';
import Friends from './friends';
import Team from './team';
import Users from './users';

function App() {
  function handleClick (){
    alert('Button One clicked');
  }
  const handleClick2 = () => {
    alert("Button Two Clicked")

  }
  
  return (
    <>
      <h1>Recapping React</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Button One</button>
      <button onClick={handleClick2}>Button Two</button>
      <button onClick={() => {alert('Button Three Clicked')}}>Button Three</button>
    </>
  )
}

export default App
