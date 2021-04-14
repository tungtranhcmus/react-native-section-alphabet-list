import * as React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const ListLetterIndex = ({
  sectionData,
  onPressLetter,
  indexLetterColor
}) => {
  const labelStyle = indexLetterColor ? { color: indexLetterColor } : {}

  return (
    <View style={styles.letterIndexContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.flaslist}
        data={sectionData}
        keyExtractor={(i) => i.title}
        renderItem={({ item, index }) => (
          <TouchableOpacity testID="indexItem" onPress={() => onPressLetter(index)}>
            <View style={styles.letterIndexItem}>
              <Text testID="indexItem__title" style={[styles.letterIndexLabel, labelStyle]}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}