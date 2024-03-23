import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageNotFound from "./pages/404";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Notifications from "./pages/notifications";
import Profile from "./pages/profile";
import ResetPassword from "./pages/reset-passoword";
import ChangePassword from "./pages/reset-passoword/change-password";
import SnackBar from "./components/snackbar";
import { useAppSelector } from "./stores/hooks";

function App() {
  const { show, message, isError } = useAppSelector(
    (state) => state.snackbar.value
  );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/change-password/:email/:otp"
            element={<ChangePassword />}
          />
        </Routes>
      </BrowserRouter>
      {<SnackBar show={show} message={message} isError={isError} />}
    </>
  );
}

export default App;
