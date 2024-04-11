import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import PageError from "./pages/error/PageError";
import AboutMe from "./pages/AboutMe";
import MyProject from "./pages/MyProject";
import { getReadme } from "./services/github/githubService";

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
      },
      {
        path: 'my-project',
        element: <MyProject/>,
        loader: () => getReadme(),
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