import { View, Text } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#2563EB" }}>
      <Text style={{ color: "white", fontSize: 32, fontWeight: "bold" }}>¡Hola Mundo!</Text>
      <Text style={{ color: "white", fontSize: 18, marginTop: 10 }}>
        Mi primera app con React Native Web 🚀
      </Text>
    </View>
  );
}