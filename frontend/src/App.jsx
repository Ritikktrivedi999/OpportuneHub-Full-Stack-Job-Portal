import Home from "./components/Home.jsx"
import Jobs from "./components/Pages/Jobs/Jobs.jsx"
import Login from "./components/auth/Login"
import About from "./components/Pages/About/About.jsx"
import Signup from "./components/auth/Signup"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from "./components/Pages/Browse/Browse.jsx"
import Profile from "./components/Pages/Profile/Profile.jsx"
import JobDescription from "./components/Pages/Jobs/JobDescription.jsx"
import Companies from "./components/admin/Companies.jsx"
import CreateCompany from "./components/admin/CreateCompany.jsx"
import CompanySetup from "./components/admin/CompanySetup.jsx"




const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/jobs",
      element: <Jobs />,

    },
    //Route inside Job Page
    {
      path: "/description/:id",
      element:<JobDescription/>,

    },
    {
      path: "/about",
      element: <About />
    },
    {

      path: "/browse",
      element: <Browse />

    },
    {

      path: "/profile",
      element: <Profile />

    },

  // For Admin Routes    
  {
    path: "/admin/companies",
    element: <Companies/>,
  },
  {
    path: "/admin/companies/create",
    element: <CreateCompany/>,
    },
    {
      path: "/admin/companies/:id",
      element: <CompanySetup/>,
      },
   

    
  ]
)

function App() {

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
