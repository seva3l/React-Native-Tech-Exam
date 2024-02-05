import { createDrawerNavigator } from '@react-navigation/drawer';
import UIScreen from '@screens/UI';
import NativeScreen from '@screens/Native';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
      <Drawer.Navigator screenOptions={{headerTitleAlign: 'left'}}>
        <Drawer.Screen name="UI Exam"  component={UIScreen}/>
        <Drawer.Screen name="Native Module Exam" component={NativeScreen} />
      </Drawer.Navigator>
    );
  }
  
  export default DrawerNavigator;