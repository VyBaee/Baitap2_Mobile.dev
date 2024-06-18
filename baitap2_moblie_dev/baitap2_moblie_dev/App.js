import React from 'react';
import { SafeAreaView, StyleSheet, Button, Alert } from 'react-native';

const App = () => {
  const handleButtonPress = () => {
    Alert.alert("Hello!");
  };


  return (
    <SafeAreaView style = {style.container}>
      <Button
        title="Click here"
        onPress={handleButtonPress}
      />
    </SafeAreaView>
  )
};


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;