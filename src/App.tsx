// import { Banner } from './components/banner/Banner'
// import { Footer } from './components/footer/Footer'
// import Header from './components/header/Header'
// import { Hero } from './components/hero/Hero'
import Home from './pages/Home'
import Blog from './pages/Blog'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
// import { Home, Blog, SignIn, SignUp } from './pages'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Default404Page } from './pages/Default404Page';
import { About } from './pages/About';
import { AuthDashboard } from './pages/AuthDashboard';

  // Todo: Add pages and routes
    // Todo: Add page: About 
    // Todo: Add page: Blog 
    // Todo: Add page: Pricing
    // Todo: Add page: Login/Sign up 
    // Todo: Add page: Logged in - Dashboard 
    // Todo: Add page: Logged in - Edit Blog 
  // Todo: Add mobile styles for hero and banner
  // Todo: fix css eslint error
  // Todo: Fix test - no attributes (Jest issue)


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Default404Page />
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/dashboard",
      element: <AuthDashboard userName={''} userEmail={''} />,
    },
  ]);

function App() {
  return (
    <> 
        {/* <Header />
        <Hero />
        <Banner />
        <Footer /> */}
            <RouterProvider router={router} />

    </>
  )
}

export default App
