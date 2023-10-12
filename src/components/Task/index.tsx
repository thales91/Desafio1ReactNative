import { TouchableOpacity, View, Image, Text } from "react-native";
import { styles } from "./styles";

interface TaskProps {
  item: {
    text: string;
    closed: Boolean;
    id: string;
  };
  onConcluir: (id: string) => void;
  onDelete: (id: string) => void;
}

const Task = ({ item, onConcluir, onDelete }: TaskProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.check}
        onPress={() => onConcluir(item.id)}
      >
        {!item.closed ? (
          <Image
            style={{ height: 17 }}
            source={require("../../../assets/check.png")}
          />
        ) : (
          <Image source={require("../../../assets/checked.png")} />
        )}
      </TouchableOpacity>
      <Text
        style={{
          ...styles.text,
          color: item.closed ? "#808080" : "#F2F2F2",
          textDecorationLine: item.closed ? "line-through" : "none",
        }}
      >
        {item.text}
      </Text>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Image source={require("../../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default Task;
