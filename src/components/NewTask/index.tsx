import { TextInput, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

interface NewTaskProps {
  addTask: (task: string) => void;
}

const NewTask: React.FC<NewTaskProps> = ({ addTask }) => {
  const [task, setTask] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onChangeText={setTask}
      />
      <TouchableOpacity
        style={{ ...styles.button, opacity: task === "" ? 0.5 : 1 }}
        disabled={task === ""}
        onPress={() => addTask(task)}
      >
        <Image source={require("./img/plus.png")}></Image>
      </TouchableOpacity>

      <View />
    </View>
  );
};

export default NewTask;
