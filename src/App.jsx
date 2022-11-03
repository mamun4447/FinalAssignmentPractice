import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";

function App() {
  return (
    <div className="max-w-7xl mx-auto ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
