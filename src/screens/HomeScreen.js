import React, { useState, useEffect } from 'react';
import { View, FlatList, } from 'react-native';
import Header from '../components/Header';
import BookItem from '../components/BookItem';
import { books } from '../data/books';

const HomeScreen = ({ navigation }) => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    setBookList(books);
  }, []);

  const handleBookPress = (book) => {
    navigation.navigate('BookDetail', { book });
  };

  return (
    <View>
      <Header title="Toko Buku Online" />
      <FlatList
        data={bookList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BookItem book={item} onPress={handleBookPress} />}
        contentContainerStyle={{ paddingBottom: 60 }}
      />
    </View>
  );
};


export default HomeScreen;
