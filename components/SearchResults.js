import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
const SearchResults = ({ data, input, setInput }) => {
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (item?.studentName.toLowerCase().includes(input.toLowerCase())) {
            return (
              <View
                style={{
                  marginVertical: 10,
                  gap: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 8,
                      padding: 10,
                      backgroundColor: "#4b6cb7",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 16 }}>
                      {item?.studentName?.charAt(0)}
                    </Text>
                  </View>

                  <View>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      {item?.studentName}
                    </Text>
                    <Text style={{ marginTop: 5, color: "gray" }}>
                      {item?.branch} ({item?.studentId})
                    </Text>
                  </View>
                </View>
                <Pressable
                  onPress={() => {
                    axios
                      .delete(
                        `http://192.168.1.7:8000/removeStudent/${item?.studentId}`
                      )
                      .then(() => {
                        console.log("deleted");
                      })
                      .catch((e) => {
                        console.log(e);
                      });
                  }}
                >
                  <AntDesign
                    style={{ marginRight: 10 }}
                    name="minuscircle"
                    size={24}
                    color="black"
                  />
                </Pressable>
              </View>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});
