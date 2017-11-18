import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export const NotExist = ({ text }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

NotExist.propTypes = {
  text: PropTypes.string.isRequired
};

