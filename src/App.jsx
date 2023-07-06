import { Route, Routes } from "react-router-dom";
import Base from "./base";
import Login from './Login';

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/app" element={<Base />}></Route>
      </Routes>
    </div>
  );
}

export default App;
