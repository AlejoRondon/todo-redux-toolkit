import './App.css';
import 'normalize.css'; // Import Normalize.css here
// Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Components
import Navbar from './components/Navbar/Navbar';
// Pages
import Home from './pages/Home/Home';
import CreateNew from './pages/CreateNew/CreateNew';
import TodoDetails from './pages/TodoDetails/TodoDetails';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<CreateNew />} />
          <Route exact path="/details/:id" element={<TodoDetails />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
