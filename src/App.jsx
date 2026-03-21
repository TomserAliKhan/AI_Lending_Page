import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
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

const LayoutAfter = lazy(() => import("./components/afterLogin/LayoutAfter"))


const Notfound = lazy(() => import("./routes/404"));

import { useSelector } from "react-redux";

import Loading from "./components/Loading";
import DashbordLayout from "./components/afterLogin/home/dashboard/DashbordLayout.jsx";
import Chat from "./routes/protected/Chat.jsx";
import ChatLayout from "./components/afterLogin/chat/ChatLayout.jsx";
const Profile =lazy(()=> import("./components/afterLogin/home/dashboard/Profile.jsx"));
const Integration =lazy(()=> import("./components/afterLogin/home/dashboard/Integration.jsx"))
const Billing =lazy(()=> import("./components/afterLogin/home/dashboard/Billing.jsx"))
const TextGenerator=lazy(()=>import("./components/afterLogin/chat/TextGenerator.jsx"))
const ImageGenerator=lazy(()=>import("./components/afterLogin/chat/ImageGenerator.jsx"))
const CodeGenerator=lazy(()=>import("./components/afterLogin/chat/CodeGenerator.jsx"))
const VideoGenerator=lazy(()=>import("./components/afterLogin/chat/VideoGenerator.jsx"))
const EmailGenerator=lazy(()=>import("./components/afterLogin/chat/EmailGenerator.jsx"))





function App() {
  const auth=useSelector((state)=>state.auth.isLoggedIn)

let beforeLogin=  createBrowserRouter(
    createRoutesFromElements(<>

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
         <Route path="*" element={<Notfound />} />
    </>
    ))

let afterLogin=  createBrowserRouter(
    createRoutesFromElements(
      <>
       <Route path="/" element={<LayoutAfter />}>
       <Route index element={<Navigate to='/dashboard' replace/>}/>

          <Route element={<ProtectedRoute />}>

            <Route path="/reset-password" element={
              <Suspense fallback={<Loading />}>
                <ResetPassword />
              </Suspense>
            } />
            <Route path="/chat" element={<ChatLayout/>}>
            <Route index element={<Chat/>}/>
            <Route path="text-generator" element={<Suspense fallback={<Loading/>}>
              <TextGenerator/>
            </Suspense>}/>
            <Route path="image-generator" element={<Suspense fallback={<Loading/>}>
              <ImageGenerator/>
            </Suspense>}/>
            <Route path="code-generator" element={<Suspense fallback={<Loading/>}>
              <CodeGenerator/>
            </Suspense>}/>
            <Route path="video-generator" element={<Suspense fallback={<Loading/>}>
              <VideoGenerator/>
            </Suspense>}/>
            <Route path="email-generator" element={<Suspense fallback={<Loading/>}>
              <EmailGenerator/>
            </Suspense>}/>
            </Route>
           
            <Route path="/dashboard" element={<Suspense fallback={<Loading />}>
              <DashbordLayout />
            </Suspense>}>

             

              <Route index element={<Navigate to='profile' replace />} />
              <Route path="profile" element={
                <Profile/>
                }/>
              <Route path="billing" element={<Billing/>}/>
              <Route path="integration" element={<Integration/>}/>

            </Route>





          </Route>

        </Route>
         <Route path="*" element={<Notfound />} />
</>

    ))

   let route=''
   let x=()=>{if (auth) {
    route= afterLogin
   }else{
    route= beforeLogin
   }
  }
  x()

    
     

   

  return <RouterProvider router={route} />;
}

export default App;
