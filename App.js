import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Alert,
    StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    // Load tasks from AsyncStorage when app starts
    useEffect(() => {
        loadTasks();
    }, []);

    // Save tasks to AsyncStorage whenever they change
    useEffect(() => {
        saveTasks();
    }, [tasks]);

    // Load tasks from AsyncStorage
    const loadTasks = async () => {
        try {
            const storedTasks = await AsyncStorage.getItem("tasks");
            if (storedTasks) {
                setTasks(JSON.parse(storedTasks));
            }
        } catch (error) {
            console.log("Failed to load tasks:", error);
        }
    };

    // Save tasks to AsyncStorage
    const saveTasks = async () => {
        try {
            await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
        } catch (error) {
            console.log("Failed to save tasks:", error);
        }
    };

    // Add a new task
    const addTask = () => {
        // if (task.trim() === "") return;
        // if task is empty, give an alert
        if (task.trim() === "") {
            Alert.alert("Error", "Please enter a task", [{ text: "OK" }]);
            return;
        }
        setTasks([...tasks, { id: Date.now().toString(), text: task }]);
        setTask("");
    };

    // Delete a task
    const deleteTask = (id) => {
        Alert.alert("Delete Task", "Are you sure?", [
            { text: "Cancel", style: "cancel" },
            {
                text: "Delete",
                onPress: () => setTasks(tasks.filter((task) => task.id !== id)),
            },
        ]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>To-Do List</Text>

            {/* Input Field */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter task..."
                    value={task}
                    onChangeText={setTask}
                />
                <TouchableOpacity style={styles.addButton} onPress={addTask}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>

            {/* Task List */}
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.taskItem}>
                        <Text style={styles.taskText}>{item.text}</Text>
                        <TouchableOpacity onPress={() => deleteTask(item.id)}>
                            <Text style={styles.deleteButton}>❌</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    inputContainer: { flexDirection: "row", marginBottom: 10 },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
    },
    addButton: {
        marginLeft: 10,
        backgroundColor: "#2196F3",
        padding: 15,
        borderRadius: 5,
    },
    addButtonText: { color: "#fff", fontSize: 20, fontWeight: "bold" },
    taskItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        marginBottom: 5,
    },
    taskText: { fontSize: 16 },
    deleteButton: { color: "red", fontSize: 18 },
});
