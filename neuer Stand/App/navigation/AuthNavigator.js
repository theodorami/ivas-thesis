import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import DashboardScreen from "../screens/DashboardScreen";
import MenuScreen from "../screens/MenuScreen";
import DetailsScreen from "../screens/DetailsScreen";
import BasisEins from "../components/DashboardTabs/BasisEins";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Dashboard"
      component={DashboardScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Menu"
      mode="modal"
      component={MenuScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Außenmodul" component={DetailsScreen} />
    <Stack.Screen name="BasisEins" component={BasisEins} />
  </Stack.Navigator>
);

export default AuthNavigator;
