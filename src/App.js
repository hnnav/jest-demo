import { useState } from 'react';
import Counter from './Counter';

function App() {

  const [initialCount, setInitialCount] = useState(0)

  return (
    <div className="App">
      <Counter initialCount={initialCount}/>
    </div>
  );
}

export default App;
