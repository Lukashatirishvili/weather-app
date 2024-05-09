import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Map from "./pages/Map";
import SavedLocation from "./pages/SavedLocation";
import Calendar from "./pages/Calendar";
import Converter from "./pages/Converter";
import Settings from "./pages/Settings";

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
      {
        path: "/savedlocations",
        element: <SavedLocation />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/converter",
        element: <Converter />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
