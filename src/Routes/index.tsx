import { createBrowserRouter, createRoutesFromElements, Route  } from "react-router-dom";
import HomePage from "../pages"
import About from "../pages/About"
import Contact from "../pages/Contact";
import Layout from "../pages/Layout";
import LearnPage from "../pages/Learn";
import LearnLayout from "../pages/Learn/Layout"
import ThinkingInReact from "../pages/Learn/ThinkingInReact";
import Installation from "../pages/Learn/Installation";
import Contribute from "../pages/Contribute";
import Login from "../pages/Login";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import ErrorHandler from "../components/errors/ErrorHandler";
import PageNotFound from "../pages/PageNotFound";

const isLoggedin=true;
const userData:{email:string}|null = isLoggedin?{email:"Abdo@gmail.com"}:null;
const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<ErrorHandler/>}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="contribute" element={
          <ProtectedRoute isAllowed={isLoggedin} redirectedPath={'/login'} data={userData}>
            <Contribute/>
          </ProtectedRoute>
        } />
        <Route path="login" element={
          <ProtectedRoute isAllowed={!isLoggedin} redirectedPath={'/contribute'} data={userData}>
            <Login/>
          </ProtectedRoute>
        }/>
      </Route>
      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<LearnPage />} />
        <Route path="thinking-in-react" element={<ThinkingInReact />} />
        <Route path="installation" element={<Installation />} />
      </Route>

      {/* Page not Found */}
      <Route path={'*'} element={<PageNotFound/>} />
    </>
  )
);

export default routes;