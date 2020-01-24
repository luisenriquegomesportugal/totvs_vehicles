import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./pages/Login";
import User from "./pages/User";

const navigationOptions = {
  headerStyle: {
    backgroundColor: "#3B83Bd",
    shadowColor: "transparent"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};

const UserRoute = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      ...navigationOptions,
      title: "Lista de veículos"
    }
  }
});

const EmployeeRoute = createStackNavigator({
  User: {
    screen: User,
    navigationOptions
  }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Login,
      UserRoute,
      EmployeeRoute
    },
    {
      initialRouteName: "Login"
    }
  )
);
