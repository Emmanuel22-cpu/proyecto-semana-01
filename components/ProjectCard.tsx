import { View, Text } from "react-native";
import React from "react";

export default function ProjectCard({
  icon,
  title,
  description,
  tags,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <View className="bg-white p-4 rounded-xl mb-4 shadow-md border border-gray-200">
      <View className="mb-2">{icon}</View>
      <Text className="text-lg font-bold text-gray-900">{title}</Text>
      <Text className="text-sm text-gray-600 mt-1">{description}</Text>
      <View className="flex-row flex-wrap mt-2">
        {tags.map((tag, index) => (
          <View
            key={index}
            className="bg-blue-200 rounded-full px-2 py-1 mr-2 mb-2"
          >
            <Text className="text-xs text-blue-800 font-medium">#{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

