import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import AccountCreated from "./pages/AccountCreated";
import Newpassword from "./pages/Newpassword";
import Forgetpassword from "./pages/Forgetpassword";
import Emailvariefication from "./pages/Emailvariefication";
import ForgotVerifyOtp from "./pages/ForgotVerifyOtp";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/email-verification" element={<Emailvariefication />} />
          <Route path="/forget-password" element={<Forgetpassword />} />
          <Route path="/forgot-verify-otp" element={<ForgotVerifyOtp />} />
          <Route path="/new-password" element={<Newpassword />} />
          <Route path="/account-created" element={<AccountCreated />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

