import { RoundButton } from './RoundButton';
import { View, StyleSheet } from 'react-native';

export const Timing = ({ setMinutes }) => {
  return (
    <View style={styles.timingWrapper}>
      <View style={styles.buttonWrapper}>
        <RoundButton
          size={75}
          title={'10'}
          onPress={() => {
            setMinutes(10);
          }}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundButton
          size={75}
          title={'15'}
          onPress={() => {
            setMinutes(15);
          }}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundButton
          size={75}
          title={'20'}
          onPress={() => {
            setMinutes(20);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timingWrapper:{
    flex: 0.1,
    flexDirection: 'row'
  },
  buttonWrapper: {
    flex: 1,
    alignItems: 'center',
  },
});
