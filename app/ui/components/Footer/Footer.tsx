import React from 'react';
import { StyleSheet, View } from 'react-native';

import COLORS from '@ui/theme/color';
import { ICON_SIZE } from '@ui/common/iconSize';
import { PressableIcon } from '../Icons/PressableIcon';

const Footer = () => {
  return (
    <View style={styles.container}>
      <PressableIcon
        iconName="home-sharp"
        iconSize={ICON_SIZE['regular']}
        color={COLORS.GRAY_100}
      />
      <PressableIcon
        iconName="book-sharp"
        iconSize={ICON_SIZE['regular']}
        color={COLORS.GRAY_100}
      />
      <View>
        <PressableIcon
          iconName="add-sharp"
          iconSize={ICON_SIZE['regular']}
          hasBackground={true}
          backgroundColor={COLORS.YELLOW_500}
          color={COLORS.GRAY_500}
        />
      </View>

      <PressableIcon
        iconName="warning-sharp"
        iconSize={ICON_SIZE['regular']}
        color={COLORS.GRAY_100}
      />
      <PressableIcon
        iconName="person"
        iconSize={ICON_SIZE['regular']}
        color={COLORS.GRAY_100}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 12,
    maxHeight: 90,
    height: '100%',
    backgroundColor: COLORS.GRAY_500,
  },
});

export default Footer;
