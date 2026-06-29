import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function SearchScreen({ navigation }: any) {
  const [query, setQuery] = useState("");
  const handleSearch = async () => {
    const res = await fetch("http://localhost:8000/api/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    navigation.navigate("Results", { results: data.results, query });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Find the Right Course</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. learn Python for data science"
        value={query}
        onChangeText={setQuery}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: "center" },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, fontSize: 16, marginBottom: 12 },
  button: { backgroundColor: "#2563EB", padding: 14, borderRadius: 8, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
