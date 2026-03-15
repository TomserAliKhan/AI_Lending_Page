import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./components/beforeLogin/home/Home";
const Signup = lazy(() => import("./routes/Signup"));
const SignIn = lazy(() => import("./routes/SignIn"))
const Contect = lazy(() => import("./routes/Contect"))
const Pricing = lazy(() => import("./routes/Pricing"))
const Layout = lazy(() => import("./components/beforeLogin/home/components/Layout"))
const Policy = lazy(() => import("./routes/Policy"))



import ProtectedRoute from "./routes/protected/ProtectedRoute";
const ResetPassword = lazy(() => import("./auth/ResetPassword"));
const Dashboard=lazy(()=>import("./components/afterLogin/home/dashboard/Dashboard.jsx"))
const LayoutAfter=lazy(()=>import("./components/afterLogin/LayoutAfter"))


const Notfound = lazy(() => import("./routes/404"));

import { useSelector } from "react-redux";
import Loading from "./components/Loading";

function App() {


  let route = createBrowserRouter(
    createRoutesFromElements(
      <>


        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />

          <Route
            path="/sign-up"
            element={
              <Suspense fallback={<Loading />}>
                <Signup />
              </Suspense>
            }
          />

          <Route path="/sign-in" element={
            <Suspense fallback={<Loading />}>
              <SignIn />
            </Suspense>
          } />

          <Route path="/contect" element={
            <Suspense fallback={<Loading />}>
              <Contect />
            </Suspense>
          } />

          <Route path="/pricing" element={
            <Suspense fallback={<Loading />}>
              <Pricing />
            </Suspense>
          } />

          <Route path="/policy" element={
            <Suspense fallback={<Loading />}>
              <Policy />
            </Suspense>
          } />



         
        </Route>
         <Route path="/" element={<LayoutAfter />}>

          <Route element={<ProtectedRoute />}>

            <Route path="/reset-password" element={
                   <Suspense fallback={<Loading />}>
                        <ResetPassword />
                    </Suspense>
            } />

            <Route path="/dashboard" element={
                  <Suspense fallback={<Loading />}>
                        <Dashboard />
                  </Suspense>
            } />
            <Route path="/dashboard/:id" element={
                  <Suspense fallback={<Loading />}>
                        <Dashboard />
                  </Suspense>
            } />



          </Route>  

        </Route>

        <Route path="*" element={<Notfound />} />


        

      </>,
    ),
  );

  return <RouterProvider router={route} />;
}

export default App;
