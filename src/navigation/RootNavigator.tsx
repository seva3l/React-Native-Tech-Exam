import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
    },
  };  

const RootNavigator = () =>{
    return(
        <NavigationContainer theme={theme}>
            <DrawerNavigator/>
        </NavigationContainer>
    )
}

export default RootNavigator;