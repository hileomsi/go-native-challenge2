import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { colors } from 'common/styles';

import { styles } from './styles';

export const Card = ({ image, title, subtitle, payload, onPress }) => (
  <TouchableWithoutFeedback onPress={() => onPress({ payload })}>
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={{ uri: image }}
        />
        <View style={styles.info}>
          <Text numberOfLines={1} style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      <View>
        <Icon name='angle-right' style={styles.icon} size={24} color={colors.light} />
      </View>
    </View>
  </TouchableWithoutFeedback>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  payload: PropTypes.shape({
    name: PropTypes.string,
    fullname: PropTypes.string,
    url: PropTypes.string
  }).isRequired,
  onPress: PropTypes.func
};

Card.defaultProps = {
  onPress: () => {}
};
