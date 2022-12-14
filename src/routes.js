import React from "react";
import $ from "jquery";

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const Dashboard = React.lazy(() => import("./App/components/Home/Index"));
const Page404 = React.lazy(() => import("./App/components/Page404/index"));

const routes = [
  {
    path: "/",
    exact: true,
    name: "Inicio",
    component: Dashboard,
  },
  { component: Page404 },
];

export default routes;
