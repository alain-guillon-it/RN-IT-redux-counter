import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import {
  decrement,
  increment,
  incrementByAmount,
  multiplyByAmount,
  resetData,
} from "../features/counter/counterSlice";

export default function Counter() {
  const [inputNumber, setInputNumber] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 38 }}>Counter Redux APP</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "80%",
        }}
      >
        <Text style={{ fontSize: 32, color: "#333333" }}> {count}</Text>
        <Pressable
          style={{
            backgroundColor: "grey",
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginHorizontal: 8,
            marginVertical: 16,
          }}
          onPress={() => dispatch(resetData())}
        >
          <Text style={{ fontSize: 32, color: "white" }}>RAZ</Text>
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
        }}
      >
        <Pressable
          onPress={() => dispatch(increment())}
          style={{
            backgroundColor: "skyblue",
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginHorizontal: 8,
            marginVertical: 16,
          }}
        >
          <Text style={{ fontSize: 32 }}>+ 1</Text>
        </Pressable>
        <Pressable
          onPress={() => dispatch(decrement())}
          style={{
            backgroundColor: "salmon",
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginHorizontal: 8,
            marginVertical: 16,
          }}
        >
          <Text style={{ fontSize: 32 }}>- 1</Text>
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "80%",
        }}
      >
        <TextInput
          style={styles.input}
          value={inputNumber}
          onChangeText={(inputNumber) => setInputNumber(parseInt(inputNumber))}
          keyboardType="numeric"
        />
        <Pressable
          onPress={() => dispatch(multiplyByAmount(inputNumber))}
          style={{
            backgroundColor: "darkorange",
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginHorizontal: 8,
            marginVertical: 16,
          }}
        >
          <Text style={{ fontSize: 32 }}>x</Text>
        </Pressable>
        <Pressable
          onPress={() => dispatch(incrementByAmount(inputNumber))}
          style={{
            backgroundColor: "brown",
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginHorizontal: 8,
            marginVertical: 16,
          }}
        >
          <Text style={{ fontSize: 32 }}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "50%",
  },
});
