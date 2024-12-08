import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  card: {
    flexDirection: 'row', 
    margin: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  bookImage: {
    width: 60,
    height: 90, 
    marginRight: 15, 
    borderRadius: 5, 
  },
  textContainer: {
    justifyContent: 'center', 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtext: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
});
