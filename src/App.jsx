import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import PageError from "./pages/error/PageError";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root/>,
    errorElement: <PageError/>,
    children: [
      {
        path:'',
        element: <Home/>
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