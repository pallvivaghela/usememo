import './App.css';
import { useState , useMemo } from 'react';

function App() {
  const [cnt, setCnt] = useState(0);
  const [item, setItem] = useState(0);

  const demo = useMemo( () => function test(){
    // setCnt((c) => c + 1);
    console.log(cnt);
    // alert();
  })(cnt)
  return (
    <div className="App">
      {demo}
      <input type="button" value="setCnt" onClick={() => setCnt(cnt + 1)}></input>
      <input type="button" value="setItem" onClick={() => setItem(item + 1)}></input>
    </div>
  );
}

export default App;
