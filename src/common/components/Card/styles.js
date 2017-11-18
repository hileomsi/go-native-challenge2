import { StyleSheet } from 'react-native';
import { colors, fonts } from 'common/styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    padding: 20,
    marginTop: 10,
    marginHorizontal: 20,
    shadowColor: colors.dark,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 0
    }
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 22,
    marginRight: 10
  },
  info: {
    flex: 1,
    marginRight: 10
  },
  title: {
    color: colors.darker,
    fontSize: fonts.regular,
    fontWeight: 'bold'
  },
  subtitle: {
    color: colors.dark,
    fontSize: fonts.small
  }
});
