import Home from "../containers/home";
import UiDesign from "../containers/ui-design";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/ui-design",
    component: UiDesign,
  },
];

// @TODO: filter duplicated routes(same path)

export default routes;
