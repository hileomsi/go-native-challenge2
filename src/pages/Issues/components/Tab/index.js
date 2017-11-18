import React, { Component } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { colors, fonts } from 'common/styles';

import { Card, NotExist } from 'common/components';

const tabs = {
  TabAll: { label: 'Todas', prop: 'all' },
  TabOpen: { label: 'Abertas', prop: 'opened' },
  TabClose: { label: 'Fechadas', prop: 'closed' }
};

export class Tab extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: ({ focused }) => {
      const tab = tabs[navigation.state.routeName];
      const styles = { fontSize: fonts.small, color: colors.textSecondary };
      if (focused) {
        styles.color = colors.dark;
        styles.fontWeight = 'bold';
      }

      return (<Text style={styles}>{tab.label}</Text>);
    }
  })

  static propTypes = {
    screenProps: PropTypes.shape({
      all: PropTypes.array.isRequired,
      closed: PropTypes.array.isRequired,
      opened: PropTypes.array.isRequired
    }).isRequired,
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        routeName: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  render() {
    const tab = tabs[this.props.navigation.state.routeName];
    const { screenProps } = this.props;

    if (screenProps[tab.prop].length === 0) {
      return (<NotExist text='Não existe issues' />);
    }

    return (
      <FlatList
        style={styles.container}
        data={screenProps[tab.prop]}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Card {...item} onPress={screenProps.onPress} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
