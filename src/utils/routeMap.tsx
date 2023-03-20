import App from "../App";
import Contact from "../pages/contact";
import About from "../pages/about";
import Webatl from "../pages/webatl";
import Bloglist from "../pages/bloglist";
import Accelerator from "../pages/accelerator";

export const RouteMap = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Bloglist />,
  },
  {
    path: "/webatl",
    element: <Webatl />,
  },
  {
    path: "/accelerator",
    element: <Accelerator />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];
