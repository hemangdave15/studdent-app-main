import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native";
import { useState,useEffect } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


export default function StudentPerformance() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://192.168.1.7:8000/students");
        const data = await response.json();
      
        const sortedStudents = [];
      
        // Filter and sort students for each branch
        for (let branch of ["CSE", "AIML", "CE", "ME", "ENTC", "RNA"]) {
          const students = data.filter(student => student.branch === branch);
          const sortedStudentsBranch = students.sort((a, b) => b.cgpa - a.cgpa);
          sortedStudents.push(...sortedStudentsBranch);
        }
      
        setStudents(sortedStudents);
      } catch (error) {
        console.error("Error fetching students", error);
      }
    };

    fetchStudents();
  }, []);

  return (
      //#E9E4F0
    <LinearGradient colors={["#b5daf7", "#7F7FD5"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Rank List</Text>
        {["CSE", "AIML", "CE", "ME", "ENTC", "RNA"].map(branch => (
          <View key={branch} style={styles.branchContainer}>
            <Text style={styles.branchTitle}>{branch}</Text>
            <FlatList
              data={students.filter(student => student.branch === branch)}
              keyExtractor={(item) => item._id.toString()}
              renderItem={({ item, index }) => (
                <View style={styles.studentContainer}>
                  <Text style={styles.rank}>{index + 1}.</Text>
                  <View style={styles.studentInfo}>
                    <Text style={styles.studentName}>{item.studentName}</Text>
                    <Text style={styles.cgpa}>{item.cgpa}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        ))}
      </View>
      </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  branchContainer: {
    marginBottom: 20,
  },
  branchTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'black'
  },
  studentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rank: {
    width: 30,
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  studentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 5,
  },
  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  cgpa: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'black',
  },
});