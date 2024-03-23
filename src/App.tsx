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
import Chat from "./pages/chat";
import PersistLogin from "./routeProtectors/persistLogin";
import RedirectHome from "./routeProtectors/redirectHome";
import Unauthorised from "./pages/unauthorised";
import RequireAuthorization from "./routeProtectors/requireAuthorization";
import TutorDashboard from "./pages/usertypes/tutor/dashboard";
import TuteeDashboard from "./pages/usertypes/tutee/dashboard";
import AdminDashboard from "./pages/usertypes/admin/dashboard";

function App() {
  const { show, message, isError } = useAppSelector(
    (state) => state.snackbar.value
  );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/unauthorised" element={<Unauthorised />} />
          <Route element={<RedirectHome />}>
            <Route path="/" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route
              path="/change-password/:email/:otp"
              element={<ChangePassword />}
            />
          </Route>
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuthorization allowed_user="tutor" />}>
              <Route path="/tutor/dashboard" element={<TutorDashboard />} />
            </Route>
            <Route element={<RequireAuthorization allowed_user="tutee" />}>
              <Route path="/tutee/dashboard" element={<TuteeDashboard />} />
            </Route>
            <Route element={<RequireAuthorization allowed_user="admin" />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Route>
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chat" element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {<SnackBar show={show} message={message} isError={isError} />}
    </>
  );
}

export default App;
