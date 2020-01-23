import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "./pages/Login";
import User from "./pages/User";

export default createAppContainer(
  createSwitchNavigator({
    Login
  })
);
