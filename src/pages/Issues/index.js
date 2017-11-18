import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Linking } from 'react-native';
import { Github } from 'config/api';

import { Header, Tabs } from './components';

export default class Issues extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.object.isRequired
      }).isRequired
    }).isRequired
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    return { header: <Header title={params.payload.name} back={() => navigation.goBack()} /> };
  }

  state = {
    all: [],
    opened: [],
    closed: []
  }

  componentDidMount() {
    this.loadIssues();
  }

  onPressCard = ({ payload }) => {
    Linking.openURL(payload.url);
  }

  loadIssues = async () => {
    const { payload } = this.props.navigation.state.params;
    const issues = await Github.getIssues(payload.fullname);
    this.setState({
      all: issues,
      opened: issues.filter(issue => issue.state === 'open'),
      closed: issues.filter(issue => issue.state === 'close')
    });
  }

  render() {
    return (<Tabs screenProps={{ ...this.state, onPress: this.onPressCard }} />);
  }
}
