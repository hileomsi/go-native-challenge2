import { StackNavigator } from 'react-navigation';

import RepositoriesPage from 'pages/Repositories';
import IssuesPage from 'pages/Issues';

const RootNavigator = StackNavigator({
  Repositories: { screen: RepositoriesPage },
  Issues: { screen: IssuesPage }
}, {
  initialRouteName: 'Repositories'
});

export default RootNavigator;
