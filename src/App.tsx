import './App.css';
import { Home } from '@/pages/Home';
import { Button } from '@/components/ui/button';

export const App = () => {
  return (
    <>
      <h1 className="text-3xl underline">Hello world!</h1>
      <Button variant="secondary">Secondary</Button>
      <Home />
    </>
  );
};

export default App;
