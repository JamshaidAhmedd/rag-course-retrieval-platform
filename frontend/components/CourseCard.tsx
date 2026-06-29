import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CourseCard({ course }: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.meta}>{course.platform} · {course.instructor}</Text>
      <View style={styles.row}>
        <Text style={styles.rating}>★ {course.rating}</Text>
        <Text style={styles.score}>Match: {(course.relevance_score * 100).toFixed(0)}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", borderRadius: 10, padding: 16, marginBottom: 12, elevation: 2 },
  title: { fontSize: 16, fontWeight: "600", marginBottom: 4 },
  meta: { color: "#666", marginBottom: 8 },
  row: { flexDirection: "row", justifyContent: "space-between" },
  rating: { color: "#F59E0B", fontWeight: "bold" },
  score: { color: "#10B981", fontWeight: "bold" },
});
