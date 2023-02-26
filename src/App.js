import { Route, Routes } from "react-router-dom";
import CustomerDashboard from "./components/customer-dashboard/customer-dashboard";
import Home from "./components/home/Home";
import { UserLogin } from "./components/login/user-login/user-login";
import { CustomerRegister } from "./components/register/CustomerRegister";
import { UserRegister } from "./components/register/user-register";
import NavigationGuide from "./components/vendor-dashboard/NavigationGuide";
import VendorDashboard from "./components/vendor-dashboard/vendor-dashboard";


function App() {
  return (
    <div className="App">

      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/vendor-register" element={<UserRegister />} />
        <Route exact path="/customer-register" element={<CustomerRegister />} />
        <Route exact path="/user-login" element={<UserLogin />} />
        <Route exact path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route exact path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route exact path="/navigation-guide" element={<NavigationGuide />} />
      </Routes>
    </div>
  );
}

export default App;
