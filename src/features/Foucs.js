import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundButton } from '../components/RoundButton';
import { spacing } from '../utils/sizes';

export const Focus = ({ setCurrentSubject }) => {
  const [subject, setSubject] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.textInput}>
          <TextInput label="What is your focus on?" onChangeText={setSubject} />
        </View>
        <View style={styles.button}>
          <RoundButton
            title="+"
            size={50}
            onPress={() => {
              setCurrentSubject(subject)
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingTop: spacing.lg,
    paddingBottom: spacing.lg,
    justifyContent: 'flex-start',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  button: {
    justifyContent: 'center',
  },
});
