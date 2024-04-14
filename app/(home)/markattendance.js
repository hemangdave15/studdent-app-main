import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const markattendance = () => {
  const router = useRouter();
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

  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get("http://192.168.1.7:8000/students");
        setStudents(response.data);
      } catch (error) {
        console.log("error fetching student data", error);
      }
    };
    fetchStudentData();
  }, []);
  const [attendance, setAttendance] = useState([]);
  const fetchAttendanceData = async () => {
    try {
      const response = await axios.get(`http://192.168.1.7:8000/attendance`, {
        params: {
          date: currentDate.format("MMMM D, YYYY"),
        },
      });
      setAttendance(response.data);
    } catch (error) {
      console.log("error fetching attendance data", error);
    }
  };

  useEffect(() => {
    fetchAttendanceData();
  }, [currentDate]);
  const studentWithAttendance = students.map((student) => {
    const attendanceRecord = attendance.find(
      (record) => record.studentId === student.studentId
    );

    return {
      ...student,
      status: attendanceRecord ? attendanceRecord.status : "", // 'Not Marked' or a default status
    };
  });
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Pressable>
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
          <AntDesign
            onPress={goToPrevDay}
            name="left"
            size={24}
            color="black"
          />
          <Text>{formatDate(currentDate)}</Text>
          <AntDesign
            onPress={goToNextDay}
            name="right"
            size={24}
            color="black"
          />
        </View>

        <View style={{ marginHorizontal: 12 }}>
          {studentWithAttendance.map((item, index) => (
            <Pressable
              onPress={() =>
                router.push({
                  pathname: "/[user]",
                  params: {
                    name: item.studentName,
                    id: item.studentId,
                    cgpa: item?.cgpa,
                    branch: item?.branch,
                  },
                })
              }
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginVertical: 10,
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
                  {item?.studentName?.charAt(0)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {item?.studentName}
                </Text>
                <Text style={{ marginTop: 5, color: "gray" }}>
                  {item?.branch} ({item?.studentId})
                </Text>
              </View>
              {item?.status && (
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 8,
                    padding: 10,
                    backgroundColor: "#FF69B4",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 16, color: "white", fontWeight: "bold" }}
                  >
                    {item.status.charAt(0)}
                  </Text>
                </View>
              )}
            </Pressable>
          ))}
        </View>
      </Pressable>
    </View>
  );
};

export default markattendance;

const styles = StyleSheet.create({});
