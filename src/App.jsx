import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
