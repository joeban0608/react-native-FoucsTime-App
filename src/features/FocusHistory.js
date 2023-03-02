import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ historyArr }) => {
  if (!historyArr.length) return;
  const renderHistoryArr = ({ item }) => (
    <Text style={styles.item}>- {item}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Things we've focus on :</Text>
      <FlatList
        data={historyArr}
        renderItem={renderHistoryArr}
        // keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
  },
  text: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
  item: {
    color: colors.white,
    paddingTop: spacing.sm,
  },
});
