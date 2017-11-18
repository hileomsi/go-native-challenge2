import React, { Component } from 'react';
import { FlatList, RefreshControl, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';

import { Card, NotExist } from 'common/components';
import { Github } from 'config/api';

import styles from './styles';
import { Header } from './components';

export default class Repositories extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      setParams: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired
    }).isRequired
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    return {
      header: <Header addRepository={params.addRepository} clear={params.clear} />
    };
  }

  state = {
    repositories: [],
    loading: false
  };

  componentDidMount() {
    this.props.navigation.setParams({
      addRepository: this.addRepository,
      clear: this.clear
    });

    this.loadRepositories();
  }

  clear = async () => {
    await AsyncStorage.clear();
    this.setState({ repositories: [] });
    alert('Papocaram os repositórios \n😖');
  }

  addRepository = async (name) => {
    try {
      const repository = await Github.getRepository(name);
      const repositories = [...this.state.repositories, repository];
      if (!this.state.repositories.some(repo => repo.id === repository.id)) {
        await AsyncStorage.setItem('@repositories', JSON.stringify(repositories));
  
        this.setState({ repositories });
      } else {
        alert('Um é bom, dois é demais. \nDigite outro repositório \n😁');
      }
    } catch (err) {
      alert('Procurei e não achei \n🤦🏻‍♂️');
    }
  }

  loadRepositories = async () => {
    this.setState({ loading: true });
    const repositories = await AsyncStorage.getItem('@repositories') || '[]';

    this.setState({ repositories: JSON.parse(repositories), loading: false });
  }

  pageIssues = (params) => {
    this.props.navigation.navigate('Issues', params);
  }

  render() {
    if (this.state.repositories.length === 0) {
      return (<NotExist text='Não existem repositórios 👍🏻' />);
    }

    return (
      <FlatList
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.state.loading}
            onRefresh={this.loadRepositories}
          />
        }
        data={this.state.repositories}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Card title={item.name} subtitle={item.login} image={item.image} payload={item.payload} onPress={this.pageIssues} />}
      />
    );
  }
}
