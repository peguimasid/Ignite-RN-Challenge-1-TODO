import React, { FunctionComponent } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface HeaderProps {
  isDark: boolean;
  changeTheme(): void;
}

export const Header: FunctionComponent<HeaderProps> = ({
  isDark,
  changeTheme,
}) => {
  return (
    <View style={isDark ? styles.headerDark : styles.header}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: "Poppins-SemiBold" }]}>
        do
      </Text>
      <TouchableOpacity onPress={changeTheme}>
        <Text style={styles.headerText}>Change Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#273FAD",
  },
  containerDark: {
    backgroundColor: "#191932",
  },
  header: {
    paddingBottom: 44,
    backgroundColor: "#273FAD",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerDark: {
    paddingBottom: 44,
    backgroundColor: "#191932",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 24,
    color: "#FFF",
    fontFamily: "Poppins-Regular",
  },
  changeThemeText: {
    fontSize: 15,
    color: "#FFF",
    fontFamily: "Poppins-Regular",
    marginLeft: 15,
  },
});
