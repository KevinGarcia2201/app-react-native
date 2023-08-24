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
          <View style={style.CUADRO1}>
            <Text style={style.CUADRO1}>1</Text>
          </View>

          <View style={style.CUADRO2}>
            <Text style={style.CUADRO2}>2</Text>
          </View>

          <View style={style.CUADRO3}>
            <Text style={style.CUADRO3}>3</Text>
          </View>

          <View style={style.CUADRO4}>
            <Text style={style.CUADRO4}>4</Text>
          </View>
        </View>

        <View style={style.BORDER}>
          <View style={style.CUADRO5}>
            <Text style={style.CUADRO5}>data 1</Text>
          </View>

          <View style={style.CUADRO5}>
            <Text style={style.CUADRO5}>cinoc</Text>
          </View>

          <View style={style.CUADRO6}>
            <Text style={style.CUADRO6}>data 2</Text>
          </View>

          <View style={style.CUADRO6}>
            <Text style={style.CUADRO6}>cinoc</Text>
          </View>

          <View style={style.CUADRO7}>
            <Text style={style.CUADRO7}>data 3</Text>
          </View>

          <View style={style.CUADRO7}>
            <Text style={style.CUADRO7}>cinoc</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  CUADRO1: {
    backgroundColor: '#142EED',
    height: 30,
    color: '#ffffff',
    fontSize: 25,
    textAlign: 'center',
    marginRight: '35%',
    marginLeft: '35%',
    marginTop: '5%',
  },
  CUADRO2: {
    backgroundColor: '#142EED',
    height: 30,
    color: '#ffffff',
    fontSize: 25,
    textAlign: 'center',
    marginRight: '30%',
    marginLeft: '30%',
  },

  CUADRO3: {
    backgroundColor: '#142EED',
    height: 30,
    color: '#ffffff',
    fontSize: 25,
    textAlign: 'center',
    marginRight: '25%',
    marginLeft: '25%',
  },

  CUADRO4: {
    backgroundColor: '#142EED',
    height: 30,
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
    color: '#ffffff',
    fontSize: 25,
    textAlign: 'center',
    marginRight: '30%',
    marginLeft: '30%',
  },
  CUADRO6: {
    backgroundColor: '#142EED',
    height: 60,
    color: '#ffffff',
    fontSize: 25,
    textAlign: 'center',
    marginRight: '3%',
    marginLeft: '40%',
  },
  CUADRO7: {
    backgroundColor: '#142EED',
    height: 60,
    color: '#ffffff',
    fontSize: 25,
    textAlign: 'center',
    marginRight: '40%',
    marginLeft: '3%',
  },

  BORDER: {
    rgba: (51, 56, 57, 1),
  },
});
