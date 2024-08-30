import {Pressable, StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../../../config/theme';
import {useCounterStore} from '../../store';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const count = useCounterStore(state => state.count);
  const incrementBy = useCounterStore(state => state.incrementBy);
  const decrementBy = useCounterStore(state => state.decrementBy);
  const reset = useCounterStore(state => state.reset);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Count ${count}`,
    });
  }, [count]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Counter {count}</Text>

      <Pressable
        onPress={() => incrementBy()}
        style={globalStyles.primaryButton}>
        <Text>Increment value</Text>
      </Pressable>

      <Pressable
        onPress={() => decrementBy()}
        style={globalStyles.primaryButton}>
        <Text>Decrement value</Text>
      </Pressable>

      <Pressable onPress={() => reset()} style={globalStyles.primaryButton}>
        <Text>Reset value</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});
