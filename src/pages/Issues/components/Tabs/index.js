import { TabNavigator } from 'react-navigation';

import { Tab } from '../Tab';

export const Tabs = TabNavigator({
  TabAll: { screen: Tab },
  TabOpen: { screen: Tab },
  TabClose: { screen: Tab }
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  showIcon: false,
  tabBarOptions: {
    tabStyle: { paddingVertical: 7 },
    style: {
      marginHorizontal: 20,
      marginTop: 10,
      height: 30,
      borderRadius: 5,
      borderTopWidth: 0,
      backgroundColor: '#DDD'
    }
  }
});
