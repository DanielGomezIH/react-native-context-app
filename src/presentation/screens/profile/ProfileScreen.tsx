import {View, Text, StyleSheet, Pressable} from 'react-native';
import {globalStyles} from '../../../config/theme';
import {useProfileStore} from '../../store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{name}</Text>
      <Text style={globalStyles.title}>{email}</Text>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => useProfileStore.setState({name: 'Daniel Gómez'})}>
        <Text>Change name</Text>
      </Pressable>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => useProfileStore.setState({email: 'daniel@gmail.com'})}>
        <Text>Change email</Text>
      </Pressable>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => changeProfile('Jhon Doe', 'jhondoe@gmail.com')}>
        <Text>Reset profile</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});
