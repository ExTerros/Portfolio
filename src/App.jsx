import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import PageError from "./pages/error/PageError";
import AboutMe from "./pages/AboutMe";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root/>,
    errorElement: <PageError/>,
    children: [
      {
        path:'',
        element: <Home/>
      },
      {
        path: 'about-me',
        element: <AboutMe/>
      }
    ]
  }
])

function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App;