import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";

function FlatListHeaderComponent({ isDark }: { isDark: boolean }) {
  return (
    <View>
      <Text style={isDark ? styles.headerDark : styles.header}>
        Minhas tasks
      </Text>
    </View>
  );
}

interface ITask {
  id: number;
  title: string;
  done: boolean;
}

interface MyTasksListProps {
  tasks: ITask[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  isDark: boolean;
}

export function MyTasksList({
  tasks,
  onLongPress,
  onPress,
  isDark,
}: MyTasksListProps) {
  return (
    <View style={isDark ? styles.backgroundDark : styles.background}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              testID={`button-${index}`}
              activeOpacity={0.7}
              onPress={() => onPress(item.id)}
              onLongPress={() => onLongPress(item.id)}
              style={
                item.done
                  ? isDark
                    ? styles.taskButtonDoneDark
                    : styles.taskButtonDone
                  : styles.taskButton
              }
            >
              <View
                testID={`marker-${index}`}
                style={
                  item.done
                    ? isDark
                      ? styles.taskMarkerDoneDark
                      : styles.taskMarkerDone
                    : styles.taskMarker
                }
              />
              <Text
                style={
                  item.done
                    ? isDark
                      ? styles.taskTextDoneDark
                      : styles.taskTextDone
                    : isDark
                    ? styles.taskTextDark
                    : styles.taskText
                }
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
        ListHeaderComponent={<FlatListHeaderComponent isDark={isDark} />}
        ListHeaderComponentStyle={{
          marginBottom: 20,
        }}
        style={{
          marginHorizontal: 24,
          marginTop: 32,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  backgroundDark: {
    flex: 1,
    backgroundColor: "#10101E",
  },
  header: {
    color: "#3D3D4D",
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
  },
  headerDark: {
    color: "#565BFF",
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#3D3D4D",
    marginRight: 10,
  },
  taskText: {
    color: "#3D3D4D",
  },
  taskTextDark: {
    color: "#FFF",
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: "rgba(25, 61, 223, 0.1)",
    flexDirection: "row",
    alignItems: "center",
  },
  taskButtonDoneDark: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: "rgba(21, 21, 36, 0.3)",
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: "#273FAD",
    marginRight: 10,
  },
  taskMarkerDoneDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: "#565BFF",
    marginRight: 10,
  },
  taskTextDone: {
    color: "#A09CB1",
    textDecorationLine: "line-through",
  },
  taskTextDoneDark: {
    color: "#FFF",
    textDecorationLine: "line-through",
  },
});
