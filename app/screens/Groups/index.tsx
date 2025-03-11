import {Image, StyleSheet, Platform, Text, View} from 'react-native';

export default function Groups() {
  return (
    <View style={styles.container}>
      <Text>
        Groups
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
