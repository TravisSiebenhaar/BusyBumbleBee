import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  actionContainer: {
    flex: 0.1,
    justifyContent: "flex-end",
    paddingBottom: 30,
  },
  signIn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  alreadyMemeber: {
    fontSize: 21,
  },
  getStartedTitle: {
    fontSize: 21,
  },
});

export default styles;
