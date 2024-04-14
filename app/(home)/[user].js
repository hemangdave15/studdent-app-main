import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import moment from "moment";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import axios from "axios";

const User = () => {
  const params = useLocalSearchParams();

  const [attendanceStatus, setAttendanceStatus] = useState("present");
  const [currentDate, setCurrentDate] = useState(moment());

  const goToNextDay = () => {
    const nextDate = moment(currentDate).add(1, "days");
    setCurrentDate(nextDate);
  };

  const goToPrevDay = () => {
    const prevDate = moment(currentDate).subtract(1, "days");
    setCurrentDate(prevDate);
  };

  const formatDate = (date) => {
    return date.format("MMMM D, YYYY");
  };
  const submitAttendance = async () => {
    try {
      const attendanceData = {
        studentId: params?.id,
        studentName: params?.name,
        date: currentDate.format("MMMM D, YYYY"),
        status: attendanceStatus,
      };
      const response = await axios.post(
        "http://192.168.1.7:8000/attendance",
        attendanceData
      );

      if (response.status === 200) {
        Alert.alert(`Attendance submitted successfully for ${params?.name}`);
      }
    } catch (error) {
      console.log("error submitting attendance", error);
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginLeft: "auto",
          marginRight: "auto",
          marginVertical: 20,
        }}
      >
        <AntDesign onPress={goToPrevDay} name="left" size={24} color="black" />
        <Text>{formatDate(currentDate)}</Text>
        <AntDesign onPress={goToNextDay} name="right" size={24} color="black" />
      </View>

      <Pressable
        style={{
          marginVertical: 10,
          marginHorizontal: 12,
          flexDirection: "row",
          gap: 10,
        }}
      >
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
            {params?.name.charAt(0)}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {params?.name}
          </Text>
          <Text style={{ marginTop: 5, color: "gray" }}>
            {params?.branch} ({params?.id})
          </Text>
        </View>
      </Pressable>
      <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 12 }}>
        CGPA : {params?.cgpa}
      </Text>
      <View style={{ marginHorizontal: 12 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            letterSpacing: 3,
            marginTop: 7,
          }}
        >
          ATTENDANCE
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
            marginVertical: 10,
          }}
        >
          <Pressable
            onPress={() => setAttendanceStatus("present")}
            style={{
              backgroundColor: "#C4E0E5",
              padding: 10,
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
            }}
          >
            {attendanceStatus === "present" ? (
              <FontAwesome5 name="dot-circle" size={24} color="black" />
            ) : (
              <Entypo name="circle" size={24} color="black" />
            )}
            <Text>Present</Text>
          </Pressable>

          <Pressable
            onPress={() => setAttendanceStatus("absent")}
            style={{
              backgroundColor: "#C4E0E5",
              padding: 10,
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
            }}
          >
            {attendanceStatus === "absent" ? (
              <FontAwesome5 name="dot-circle" size={24} color="black" />
            ) : (
              <Entypo name="circle" size={24} color="black" />
            )}
            <Text>Absent</Text>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
            marginVertical: 10,
          }}
        >
          <Pressable
            onPress={() => setAttendanceStatus("extra_curricular")}
            style={{
              backgroundColor: "#C4E0E5",
              padding: 10,
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
            }}
          >
            {attendanceStatus === "extra_curricular" ? (
              <FontAwesome5 name="dot-circle" size={24} color="black" />
            ) : (
              <Entypo name="circle" size={24} color="black" />
            )}
            <Text>Extra-curricular</Text>
          </Pressable>

          <Pressable
            onPress={() => setAttendanceStatus("medical_leave")}
            style={{
              backgroundColor: "#C4E0E5",
              padding: 10,
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
            }}
          >
            {attendanceStatus === "medical_leave" ? (
              <FontAwesome5 name="dot-circle" size={24} color="black" />
            ) : (
              <Entypo name="circle" size={24} color="black" />
            )}
            <Text>Medical Leave</Text>
          </Pressable>
        </View>

        <Pressable
          onPress={submitAttendance}
          style={{
            padding: 15,
            backgroundColor: "#00c6ff",
            width: 200,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            borderRadius: 6,
          }}
        >
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "500" }}
          >
            Submit Attendance
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});
