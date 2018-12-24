import React from 'react';
import { Alert, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

function Profile() {
  return (
    <View style={{ padding: 20 }}>
      <BorderlessButton onPress={() => Alert.alert('BorderlessButton')}>
        <View style={styles.button}>
          <Text>BorderlessButton</Text>
        </View>
      </BorderlessButton>

      <View style={{ height: 10 }} />

      <TouchableOpacity onPress={() => Alert.alert('TouchableOpacity')}>
        <View style={styles.button}>
          <Text>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5
  }
});

export default Profile;
