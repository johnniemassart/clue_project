import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import PrivateRoutes from "./utils/PrivateRoutes";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/profile" element={<Profile />}></Route>
            {/* <Route path="/welcome" element={<Welcome />}></Route> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
