import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [randomColor, setRandomColor] = useState('#ffffff');

  const changeColor = () => {
    let hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomColor(color);
  };
  return (
    <View style={[styles.container, {backgroundColor: randomColor}]}>
      <TouchableOpacity onPress={changeColor}>
        <View style={styles.buttonComponent}>
          <Text style={styles.buttonText}>Press me</Text>
        </View>
      </TouchableOpacity>
        <Text selectable= {true} style={{margin:10,color:'black', fontSize:25}}>Color code: {randomColor}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonComponent: {
    borderColor: 'cyan',
    borderWidth: 2,
    borderRadius: 12,
    elevation:2,
    padding: 20,
    backgroundColor: '#CAD5E2',
  },
});
export default App;
