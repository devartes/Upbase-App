import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Search} from '../assets';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Search width={20} height={20} />
        </View>
        <TextInput
          placeholder="Buscar capacitações, profissionais..."
          style={styles.input}
          placeholderTextColor="#424F4D"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#006557',
    paddingHorizontal: 20,
    paddingVertical: 31,
  },
  header: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  iconContainer: {
    padding: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingHorizontal: 1,
    paddingVertical: 8,
  },
});

export default Header;
