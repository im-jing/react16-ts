import Home from "../containers/home";
import UiDesign from "../containers/ui-design";
import Book from "../containers/book/index";
import Cart from "../containers/cart/index";

const routes = [
  {
    title: "首页",
    path: "/",
    component: Home,
  },
  {
    title: "组件",
    path: "/ui-design",
    component: UiDesign,
  },
  {
    title: "书籍列表",
    path: "/book",
    component: Book,
  },
  {
    title: "购物车列表",
    path: "/cart",
    component: Cart,
  },
];

// @TODO: filter duplicated routes(same path)

export default routes;
