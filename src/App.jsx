import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import PageError from "./pages/error/PageError";
import AboutMe from "./pages/AboutMe";
import MyProjects from "./pages/MyProject";
import { getProjectListFile, getProjectFile } from "./services/github/githubService";
import Project from "./pages/Project";

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
        path: 'my-projects',
        children : [
          {
            path: '',
            element: <MyProjects/>,
            loader: () => getProjectListFile(),
          },
          {
            path: ':projectName',
            element: <Project/>,
            loader: (param) => getProjectFile(param.params.projectName)
          }
        ]
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