import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const BookDetailScreen = ({ route }) => {
  const { book } = route.params;  

  return (
    <ScrollView style={styles.container}>
      <Image source={book.image} style={styles.bookImage} />

      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>by {book.author}</Text>
      <Text style={styles.price}>{book.price}</Text>

      <Text style={styles.description}>{book.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  bookImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: '#6200ea',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginTop: 20,
  },
});

export default BookDetailScreen;
