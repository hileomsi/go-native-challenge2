import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import { colors } from 'common/styles';

export const Header = ({ title, back }) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <TouchableOpacity onPress={back}>
        <Icon name='angle-left' size={20} color={colors.darker} />
      </TouchableOpacity>
      <View style={styles.containerText}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  back: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 70,
    backgroundColor: colors.white,
    paddingTop: 15,
    paddingHorizontal: 20
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerText: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold'
  }
});
