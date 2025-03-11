import {Image, StyleSheet, Platform, Text, View} from 'react-native';
import Groups from "@/app/groups";

export default function App() {
  return (
    <Groups />
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
