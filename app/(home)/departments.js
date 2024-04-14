import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';


export default function Departments() {
  return (
<View style={styles.container}>
      <View style={styles.card}>
      
        <Text style={styles.title}>Departments</Text>
        <Text style={styles.title}>Pune Institute of Technology</Text>

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.sectionTitle}>Courses Provided</Text>

          <View style={styles.descriptionContainer}>
            <Text style={styles.sectionTitle}>Computer Science</Text>
            <Text style={styles.description}>
            The department offers a rigorous program that covers both 
            theoretical foundations and practical applications 
            of computer science.
            {'\n'}{'\n'}
              Total Seats Available-180
            </Text>

          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.sectionTitle}>Artificial Intelligence and Machine Learning</Text>
            <Text style={styles.description}>
            This program offers students a comprehensive understanding
             of AI and ML technologies, preparing them for careers in
              this rapidly growing field.{'\n'}{'\n'}
              Total Seats Available-120
            </Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.sectionTitle}>Mechanical Engineering</Text>
            <Text style={styles.description}>
            This department focuses on educating students
             in the principles of mechanical engineering, 
             with an emphasis on practical applications. 
            {'\n'}{'\n'}
            Total Seats Available-60

            </Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.sectionTitle}>Electronics And Tele-Communications</Text>
            <Text style={styles.description}>
            This department focuses on providing students with a 
            strong foundation in electronics and communication technologies.
            {'\n'}{'\n'}
              Total Seats Available-60
            </Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.sectionTitle}>Robotics & Automation</Text>
            <Text style={styles.description}>
            The department offers students a unique opportunity 
            to study advanced robotics technologies and their 
            applications.
            {'\n'}{'\n'}
            Total Seats Available-60
            </Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.sectionTitle}>Civil Eningeering</Text>
            <Text style={styles.description}>
            The department focuses on educating students 
            in the fundamental principles and practices of civil engineering. 
            {'\n'}{'\n'}
              Total Seats Available-60{"\n"} {"\n"}
              {"\n"} {"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "#c1a5f2",
    borderRadius: 20,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    marginTop: 25,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 15,
    minHeight: 500,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 16,
    padding:10,
    paddingBottom:3
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    padding:10
  },
  descriptionContainer: {
    backgroundColor: "white",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 16,
    padding: 8,
  },
});



