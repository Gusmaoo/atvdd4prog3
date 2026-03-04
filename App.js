import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const messages = [
  {
    id: "1",
    name: "Claudia du grau",
    message: "hj as 11 pro cinema",
    time: "3m atras",
    unread: 3,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "2",
    name: "Dani ficada",
    message: "oq foi dotor",
    time: "5m atras",
    unread: 1,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "3",
    name: "joana dark",
    message: "a gerra eh hj de q hrs?",
    time: "1h atras",
    unread: 2,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: "4",
    name: "polipokect",
    message: "amh é aniversario teu?",
    time: "2h atras",
    unread: 1,
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: "5",
    name: "Olivia Palito",
    message: "Mamae ta te chamando aq em casa",
    time: "5h atras",
    unread: 0,
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    id: "6",
    name: "Richarlisinha",
    message: "esse teus storys ficou massa.",
    time: "Ontem",
    unread: 0,
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    id: "7",
    name: "japinha da yoki",
    message: "vai comer pastel de flango hj?",
    time: "Ontem",
    unread: 0,
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Mensagens & Conversas</Text>
      <View style={styles.divider} />

      {/* Sub Header */}
      <View style={styles.subHeader}>
        <Text style={styles.markRead}>Marcar tudo como lido</Text>
        <Text style={styles.sort}>Classificar por tempo ▼</Text>
      </View>

      {/* List */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />

            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.time}>{item.time}</Text>
              {item.unread > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.unread}</Text>
                </View>
              )}
            </View>
          </View>
        )}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home-outline" size={24} color="#4C5FA8" />
        <Ionicons name="chatbubble-outline" size={24} color="#4C5FA8" />
        <Ionicons name="mail-outline" size={24} color="#4C5FA8" />
        <Ionicons name="person-outline" size={24} color="#4C5FA8" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 10,
  },

  divider: {
    height: 2,
    width: "40%",
    backgroundColor: "#4C5FA8",
    alignSelf: "center",
    marginVertical: 10,
  },

  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  markRead: {
    color: "#666",
  },

  sort: {
    color: "#4C5FA8",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
    alignItems: "center",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },

  name: {
    fontWeight: "bold",
    fontSize: 16,
  },

  message: {
    color: "#666",
    marginTop: 3,
  },

  time: {
    fontSize: 12,
    color: "#999",
  },

  badge: {
    backgroundColor: "#4C5FA8",
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  badgeText: {
    color: "#fff",
    fontSize: 12,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
});