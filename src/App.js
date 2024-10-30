import { Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects/Projects';
import Login from './pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Projects />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
