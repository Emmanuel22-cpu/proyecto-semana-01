import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome5, FontAwesome, MaterialIcons, Entypo, } from "@expo/vector-icons";

import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  const skills = [
    { icon: <Ionicons name="logo-react" size={26} color="#61DAFB" />, name: "React Native" },
    { icon: <FontAwesome5 name="wind" size={22} color="#38BDF8" />, name: "TailwindCSS" },
    { icon: <Ionicons name="logo-nodejs" size={26} color="#68A063" />, name: "Node.js" },
    { icon: <FontAwesome5 name="js-square" size={26} color="#F7DF1E" />, name: "JavaScript" },
    { icon: <FontAwesome5 name="html5" size={24} color="#E34F26" />, name: "HTML5" },
  ];

  const projects = [
    {
      icon: <FontAwesome5 name="solar-panel" size={26} color="#FACC15" />,
      title: "Ecoenergix",
      description:
        "Plataforma de compra y venta de paneles solares con carrito de compras y autenticación.",
      tags: ["React", "Node.js", "SQL"],
    },
    {
      icon: <FontAwesome5 name="vote-yea" size={26} color="#3B82F6" />,
      title: "ElecIsailo",
      description:
        "Sistema de votaciones para la eleccion de personero, cabildante y contralor del colegio Instituto San Ignacio de Loyola.",
      tags: ["HTML", "CSS", "SQL"],
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="bg-purple-900 h-40 items-center justify-end pb-16 shadow-md">
          <Text className="text-white text-3xl font-extrabold tracking-wide">
            Mi Perfil
          </Text>
        </View>

        <View className="items-center -mt-16">
          <Image
            source={require("./assets/mi-foto.jpeg")}
            className="w-36 h-36 rounded-full border-4 border-white shadow-lg"
          />
        </View>

        <View className="items-center mt-4 px-5">
          <Text className="text-3xl font-extrabold text-gray-900 text-center">
            Emmanuel Piñeros Ramírez
          </Text>
          <Text className="text-lg text-purple-600 mt-1 font-medium text-center">
            Técnico en Programación de Software
          </Text>
        </View>

        <View className="mx-5 mt-8 bg-white rounded-2xl p-5 shadow-md">
          <View className="flex-row items-center mb-5">
            <MaterialIcons name="email" size={26} color="#671cbdff" style={{ marginRight: 12 }} />
            <View className="flex-1">
              <Text className="text-sm text-gray-500">Email</Text>
              <Text className="text-base text-gray-900 font-semibold">
                emmanuelp.ramirez@gmail.com
              </Text>
            </View>
          </View>

          <View className="flex-row items-center mb-5">
            <FontAwesome name="github" size={26} color="#671cbdff" style={{ marginRight: 12 }} />
            <View className="flex-1">
              <Text className="text-sm text-gray-500">GitHub</Text>
              <Text className="text-base text-gray-900 font-semibold">Emmanuel22-cpu</Text>
            </View>
          </View>

          <View className="flex-row items-center">
            <Entypo name="location-pin" size={26} color="#671cbdff" style={{ marginRight: 12 }} />
            <View className="flex-1">
              <Text className="text-sm text-gray-500">Ubicación</Text>
              <Text className="text-base text-gray-900 font-semibold">Bogotá, Colombia</Text>
            </View>
          </View>
        </View>

        <View className="mx-5 mt-8 mb-12 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <Text className="text-2xl font-bold text-purple-700 mb-3">Sobre Mí</Text>
          <Text className="text-base text-gray-600 leading-6">
            Actualmente curso un tecnólogo en Análisis y Desarrollo de Software.
            Me considero una persona responsable, puntual y respetuosa. Disfruto
            trabajar en equipo y tengo una gran creatividad para resolver
            problemas de manera efectiva.
          </Text>
        </View>

        <View className="mx-5 mb-10">
          <View className="flex-row items-center mb-4">
            <Ionicons name="barbell-outline" size={28} color="#671cbdff" style={{ marginRight: 8 }} />
            <Text className="text-2xl font-bold text-gray-900">Mis Habilidades</Text>
          </View>
          {skills.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} name={skill.name} />
          ))}
        </View>

        <View className="mx-5 mb-20">
          <View className="flex-row items-center mb-4">
            <MaterialIcons name="rocket-launch" size={28} color="#671cbdff" style={{ marginRight: 8 }} />
            <Text className="text-2xl font-bold text-gray-900">Mis Proyectos</Text>
          </View>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              icon={project.icon}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
