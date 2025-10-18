import { View, Text } from "react-native";
import React from "react";

export default function SkillCard({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
}) {
  return (
    <View className="flex-row items-center bg-blue-100 p-3 rounded-xl mb-3 shadow-sm">
      <View className="mr-3">{icon}</View>
      <Text className="text-lg text-gray-800 font-semibold">{name}</Text>
    </View>
  );
}
