import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginTop: 45,
    gap: 5,
    paddingHorizontal: 24,
  },
  input: {
    flex: 1,
    height: 54,
    paddingHorizontal: 16,
    backgroundColor: "#262626",
    borderRadius: 6,
    borderColor: "#0D0D0D",
    borderWidth: 1,
    fontSize: 16,
    fontFamily: "Inter",
    color: "#F2F2F2",
  },
  button: {
    height: 52,
    width: 52,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
  },
});
