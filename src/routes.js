import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./pages/Login";
import User from "./pages/User";
import Cars from "./pages/Cars";
import Vehicles from "./pages/Vehicles";
import AddVehicle from "./pages/AddVehicle";
import ChangePass from "./pages/ChangePass";
import Home from "./pages/Home";

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
  },
  Cars: {
    screen: Cars,
    navigationOptions: {
      ...navigationOptions,
      title: "Detalhe do veículo"
    }
  },
  ChangePass: {
    screen: ChangePass,
    navigationOptions: {
      ...navigationOptions,
      title: "Alterar senha"
    }
  },
  User: {
    screen: User,
    navigationOptions: {
      ...navigationOptions,
      title: "Perfil"
    }
  }
});

const EmployeeRoute = createStackNavigator({
  Vehicles: {
    screen: Vehicles,
    navigationOptions: {
      ...navigationOptions,
      title: "Lista de veículos"
    }
  },
  Cars: {
    screen: Cars,
    navigationOptions: {
      ...navigationOptions,
      title: "Detalhe do veículo"
    }
  },
  AddVehicle: {
    screen: AddVehicle,
    navigationOptions: {
      ...navigationOptions,
      title: "Formulário de veículo"
    }
  },
  ChangePass: {
    screen: ChangePass,
    navigationOptions: {
      ...navigationOptions,
      title: "Alterar senha"
    }
  },
  User: {
    screen: User,
    navigationOptions: {
      ...navigationOptions,
      title: "Perfil"
    }
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
