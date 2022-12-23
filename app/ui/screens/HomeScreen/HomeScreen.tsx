import { Footer } from '@ui/components/Footer';
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import COLORS from '@ui/theme/color';
import { Header } from '@ui/components/Header';

const HomeScreen = () => {
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <Text>Hello World</Text>
      </ScrollView>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: COLORS.GRAY_1000,
  },
});

export default HomeScreen;
