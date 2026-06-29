import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CourseCard from "../components/CourseCard";

export default function ResultsScreen({ route }: any) {
  const { results } = route.params;
  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CourseCard course={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 12 } });
