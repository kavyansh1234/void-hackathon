import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./layout/Navbar";
import Login from "./pages/user/Login";

import NotFoundPage from "./pages/user/NotFoundPage";

import Home from "./pages/user/Home";
import CandidateTable from "./components/Candidatetable";

const Layout = () => {
  return (
    <div className="flex flex-col items-center ">
      <Navbar />
      <div>
        <div className="w-[60vw] m-auto flex flex-col items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/Home", element: <Home /> },
      { path: "/voting-booth", element: <CandidateTable /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
