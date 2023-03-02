import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Foucs';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';
// or any pure javascript modules available in npm

export default function App() {
  const [currentSubject, setCurrentSubject] = useState('');
  const [historyArr, setHistoryArr] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus setCurrentSubject={setCurrentSubject} />
          <FocusHistory historyArr={historyArr} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistoryArr([...historyArr, subject]);
          }}
          clearSubject={() => {
            setCurrentSubject('');
          }}></Timer>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlack,
  },
});
