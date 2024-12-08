import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from '../styles/globalStyles'; 

const BookItem = ({ book, onPress }) => {
  return (
    <TouchableOpacity style={globalStyles.card} onPress={() => onPress(book)}>
      <Image source={book.image} style={globalStyles.bookImage} />

      <View style={globalStyles.textContainer}>
        <Text style={globalStyles.title}>{book.title}</Text>
        <Text style={globalStyles.subtext}>{book.author}</Text>
        <Text style={globalStyles.subtext}>{book.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BookItem;
