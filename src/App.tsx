import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './feature/home/index';
import MyStore from './feature/myStore/index';
import Workflows from './feature/workflows/index';

function App() {
  return (
    <Router>
      <div>
        <p className="text-xl text-red-500">Hello world</p>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workflows" element={<Workflows />} />
          <Route path="/myStore" element={<MyStore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
