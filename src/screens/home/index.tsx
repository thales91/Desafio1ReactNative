import { View, Text, Image, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import NewTask from "../../components/NewTask";
import { useMemo, useState } from "react";
import Task from "../../components/Task";

const Home = () => {
  const [tasks, setTasks] = useState<
    Array<{ text: string; closed: Boolean; id: string }>
  >([]);
  const [id, setId] = useState(1);
  const addTask = (task: string) => {
    setTasks([...tasks, { text: task, closed: false, id: id.toString() }]);
    setId(id + 1);
  };

  const concluidas = useMemo(() => {
    return tasks.filter((item) => item.closed === true).length;
  }, [tasks]);

  const handleDelete = (id: string) => {
    Alert.alert("Deletar", "Deseja realmente deletar esta tarefa?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          setTasks(tasks.filter((item) => item.id !== id));
        },
      },
    ]);
  };
  const handleCheck = (id: string) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, closed: !item.closed } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/Logo.png")} />
      <NewTask addTask={addTask} />
      <View style={styles.statusContainer}>
        <View style={styles.status}>
          <Text style={{ ...styles.text, color: "#4EA8DE" }}>Criada</Text>
          <View style={styles.numberContainer}>
            <Text style={styles.textNumber}>{tasks.length}</Text>
          </View>
        </View>
        <View style={styles.status}>
          <Text style={{ ...styles.text, color: "#8284FA" }}>Concluídas</Text>
          <View style={styles.numberContainer}>
            <Text style={styles.textNumber}>{concluidas}</Text>
          </View>
        </View>
      </View>
      <FlatList
        style={styles.list}
        data={tasks}
        renderItem={({ item }) => (
          <Task item={item} onConcluir={handleCheck} onDelete={handleDelete} />
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Image
              style={styles.emptyImage}
              source={require("../../../assets/Clipboard.png")}
            />
            <Text style={styles.emptyTextBold}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
