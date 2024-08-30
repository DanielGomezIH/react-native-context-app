import {NavigationContainer} from '@react-navigation/native';
import {BottomTabsNavigator} from './navigators';

export const Main = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};
