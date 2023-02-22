import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import { UserLogin } from "./components/login/user-login/user-login";
import { UserRegister } from "./components/register/user-register";


function App() {
  return (
    <div className="App">

      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/user-register" element={<UserRegister />} />
        <Route exact path="/user-login" element={<UserLogin />} />

      </Routes>
    </div>
  );
}

export default App;
