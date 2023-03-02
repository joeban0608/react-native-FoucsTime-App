import React, { useState } from 'react';
import { useKeepAwake } from 'expo-keep-awake';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { colors } from '../utils/colors';
import { Countdown } from '../components/Countdown';
import { RoundButton } from '../components/RoundButton';
import { spacing } from '../utils/sizes';
import { ProgressBar } from 'react-native-paper';
import { Timing } from '../components/Timing';

export const Timer = ({ focusSubject, clearSubject,onTimerEnd }) => {
  useKeepAwake()
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.5);
  // 設定 vibrate 振動頻率
  const ONE_SECOND_IN_MS = 1000;
  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

  const onEnd = async (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false)
    setProgress(1)
    reset()
    onTimerEnd(focusSubject)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          // onProgress={progress => setProgress(progress)}
          onEnd={onEnd}
        />
        <View style={styles.tasks}>
          <Text style={styles.title}>Focusing on: </Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={styles.progressBarContainer}>
        <ProgressBar
          progress={progress}
          color={colors.progressBar}
          style={{ height: spacing.sm }}
        />
      </View>
      <Timing setMinutes={setMinutes} />
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundButton
            title="pause"
            onPress={() => setIsStarted(false)}
          />
        ) : (
          <RoundButton
            title="start"
            onPress={() => setIsStarted(true)}
          />
        )}
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundButton
            title="-"
            onPress={clearSubject}
            size={50}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // color: colors.white,
    flex: 1,
  },
  countDown: {
    // flex: 1,
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    marginTop: spacing.md,
  },
  clearSubjectWrapper: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center', 
  },
  tasks: {
    paddingTop: spacing.xxl,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
  progressBarContainer: {
    paddingBottom: spacing.xxl,
  },
});
