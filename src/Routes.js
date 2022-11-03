import LogIn from "./components/Authentication/LogiIn";
import SignUp from "./components/Authentication/SignUp";
import Main from "./layouts/Main";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("./components/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
export default router;
