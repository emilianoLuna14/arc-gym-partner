import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const screens = ["Home", "Profile", "login", "Matchmaking", "Chat", "Settings"];

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Welcome to Arc Buddy's index</Text>
        <Text style={styles.subtitle}>
          Use this page to navigate. This is the root of the app.
        </Text>
        {screens.map((screen) => (
          <Link key={screen} href={`/screens/${screen.toLowerCase()}`} style={styles.link}>
            Go to {screen}
          </Link>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 24 },
  main: { flex: 1, justifyContent: "center", maxWidth: 960, marginHorizontal: "auto" },
  title: { fontSize: 64, fontWeight: "bold" },
  subtitle: { fontSize: 36, color: "#38434D" },
  link: { marginTop: 20, fontSize: 18, color: "#1E90FF" },
});
