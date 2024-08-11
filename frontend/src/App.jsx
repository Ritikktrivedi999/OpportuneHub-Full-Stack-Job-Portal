import Home from "./components/Home.jsx"
import Jobs from "./components/Pages/Jobs/Jobs.jsx"
import Login from "./components/auth/Login"
import About from "./components/Pages/About/About.jsx"
import Signup from "./components/auth/Signup"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from "./components/Pages/Browse/Browse.jsx"
import Profile from "./components/Pages/Profile/Profile.jsx"




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
      element: <Profile/>

    }
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
