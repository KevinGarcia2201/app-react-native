/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <>
      <SafeAreaView>
        <View style={style.BORDER}>
          <View style={style.CUADRO1.height}>
            <Text style={style.CUADRO1.LETRA}>1</Text>
          </View>

          <View style={style.CUADRO2.height}>
            <Text style={style.CUADRO2.LETRA}>2</Text>
          </View>

          <View style={style.CUADRO3.height}>
            <Text style={style.CUADRO3.LETRA}>3</Text>
          </View>

          <View style={style.CUADRO4.height}>
            <Text style={style.CUADRO4}>4</Text>
          </View>
        </View>
        <View style={style.BORDER2}>
          <View style={style.CUADRO5}>
            <Text style={style.LETRA}>data 1 {'\n'} cinoc</Text>
          </View>
          <View style={style.CUADRO6}>
            <Text style={style.LETRA}>data 2 {'\n'} cinoc</Text>
          </View>
          <View style={style.CUADRO7}>
            <Text style={style.LETRA}>data 3 {'\n'} cinoc</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  height: {
    height: 30,
  },

  CUADRO1: {
    backgroundColor: '#142EED',
    color: '#ffffff',
    fontSize: 25,
    textAlign: 'center',
    marginRight: '35%',
    marginLeft: '35%',
    marginTop: '5%',
  },
  CUADRO2: {
    backgroundColor: '#142EED',
    color: '#ffffff',
    fontSize: 25,
    textAlign: 'center',
    marginRight: '30%',
    marginLeft: '30%',
  },

  CUADRO3: {
    backgroundColor: '#142EED',
    color: '#ffffff',
    fontSize: 25,
    textAlign: 'center',
    marginRight: '25%',
    marginLeft: '25%',
  },

  CUADRO4: {
    backgroundColor: '#142EED',
    color: '#ffffff',
    fontSize: 25,
    textAlign: 'center',
    marginRight: '20%',
    marginLeft: '20%',
    marginBottom: '15%',
  },

  CUADRO5: {
    backgroundColor: '#142EED',
    height: 60,
    marginRight: '30%',
    marginLeft: '30%',
    marginTop: 8,
  },
  CUADRO6: {
    backgroundColor: '#142EED',
    height: 60,
    marginRight: '3%',
    marginLeft: '50%',
    marginTop: 8,
  },
  CUADRO7: {
    backgroundColor: '#142EED',
    marginRight: '50%',
    marginLeft: '3%',
    height: 60,
    marginTop: 8,
  },

  LETRA: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 25,
  },

  BORDER: {
    borderWidth: 4,
    marginTop: 10,
    margin: 20,
  },

  BORDER2: {
    borderWidth: 4,
    marginTop: 10,
    height: '60%',
    margin: 20,
  },

  margen: {
    marginTop: 8,
  },
});
