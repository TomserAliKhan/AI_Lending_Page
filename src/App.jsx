import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Chat from "./routes/Chat";
import Signup from "./routes/Signup";
import SignIn from "./routes/SignIn";
import ProtectedRoute from "./routes/protected/ProtectedRoute";
import ResetPassword from "./auth/ResetPassword";
import Contect from "./routes/Contect";
import Pricing from "./routes/Pricing";
import Policy from "./routes/Policy";
import Notfound from "./routes/404";

function App() {
  let route = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/policy" element={<Policy />} />
         
        </Route>
        <Route element={<ProtectedRoute/>}>
        <Route path="/reset-password" element={<ResetPassword/>}/>
        </Route>
         <Route path="*" element={<Notfound />} />
      </>,
    ),
  );

  return <RouterProvider router={route} />;
}

export default App;
