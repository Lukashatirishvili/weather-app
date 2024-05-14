import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Map from "./pages/Map";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/map",
        element: <Map />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
