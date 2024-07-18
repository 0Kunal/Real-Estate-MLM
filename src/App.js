import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import MainLayout from "./layout/mainLayout";
import Landing from "./pages/landing";
import Properties from "./pages/properties";
import AboutUs from "./pages/aboutUs";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Profile from "./pages/profile";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/properties",
          element: <Properties />,
        },
        {
          path: "/aboutus",
          element: <AboutUs />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};

export default App;
