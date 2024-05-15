import './App.css';
import { useState } from 'react';
import { Home } from '@/pages/Home';
import { Button } from '@/components/ui/button';

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="h-screen flex flex-col items-center justify-center">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button>Test</Button>
        <Button
          variant="outline"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </Button>
      </header>
    </div>
  );
};

export default App;
