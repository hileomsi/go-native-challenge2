import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import { colors, fonts } from 'common/styles';

export class Header extends Component {
  static propTypes = {
    addRepository: PropTypes.func,
    clear: PropTypes.func
  }

  static defaultProps = {
    addRepository: () => {},
    clear: () => {}
  };

  state = { name: '' }

  addRepository = () => {
    if (!this.state.name) {
      return alert('Digite algo pequeno gafanhoto \n🐛');
    }

    return this.props.addRepository(this.state.name);
  }

  render() {
    const { clear } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <TextInput
            autoCorrect={false}
            autoCapitalize='none'
            style={styles.input}
            placeholder='Adicionar repositório'
            onChangeText={name => this.setState({ name })}
          />
          <TouchableOpacity onPress={() => this.addRepository()}>
            <Icon name='plus' style={styles.icon} size={16} color={colors.darker} />
          </TouchableOpacity>
          <TouchableOpacity onPress={clear}>
            <Icon name='trash-o' style={styles.icon} size={16} color={colors.darker} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 70,
    backgroundColor: colors.white,
    paddingTop: 15,
    paddingHorizontal: 20
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    backgroundColor: colors.light,
    height: 30,
    padding: 7,
    borderRadius: 5,
    flex: 1,
    fontSize: fonts.small
  },
  icon: {
    marginLeft: 20
  }
});
