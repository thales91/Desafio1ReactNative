import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
  },
  logo: {
    marginTop: 71,
  },
  emptyContainer: {
    paddingVertical: 48,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  emptyImage: {
    height: 56,
    width: 56,
    alignSelf: "center",
  },
  emptyTextBold: {
    paddingTop: 16,
    fontFamily: "Inter-Bold",
    fontSize: 14,
    color: "#808080",
    lineHeight: 19.6,
  },
  emptyText: {
    fontFamily: "Inter",
    fontWeight: "normal",
    fontSize: 14,
    color: "#808080",
    lineHeight: 19.6,
  },
  statusContainer: {
    marginTop: 33,
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  status: {
    flexDirection: "row",
    gap: 8,
  },
  numberContainer: {
    backgroundColor: "#333",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignItems: "center",
  },
  textNumber: {
    fontFamily: "Inter-Bold",
    fontSize: 12,
    color: "#d9d9d9",
  },
  text: {
    fontFamily: "Inter-Bold",
    fontSize: 14,
  },
  list: {
    width: "100%",
    marginTop: 20,
  },
});
