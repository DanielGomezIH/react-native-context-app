import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  ProfileScreen,
  SettingsScreen,
} from '../presentation/screens';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        options={{title: 'Home'}}
        component={HomeScreen}
      />
      <Tab.Screen
        name="profile"
        options={{title: 'Profile'}}
        component={ProfileScreen}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
