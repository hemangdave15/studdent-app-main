import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

const CardWithScrollView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>About the Institute</Text>
        <Text style={styles.title}>Pune Institute of Technology</Text>

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.sectionTitle}>Location</Text>
          <Text style={styles.description}>Pune, Maharashtra, India</Text>

          <View style={styles.descriptionContainer}>
            <Text style={styles.sectionTitle}>Overview</Text>
            <Text style={styles.description}>
              Pune Institute of Technology (PIT) is a renowned institution
              located in the vibrant city of Pune, known for its excellence in
              providing education and research opportunities in the fields of
              computer science, artificial intelligence and machine learning
              (AIML), robotics, electronics and communication, and mechanical
              engineering.
            </Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.sectionTitle}>Faculty and Staff</Text>
            <Text style={styles.description}>
              PIT boasts a team of highly qualified and experienced faculty
              members who are experts in their respective fields. The faculty
              members are dedicated to providing quality education, mentorship,
              and guidance to students, nurturing their talents and preparing
              them for successful careers in their chosen fields.
            </Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.sectionTitle}>Campus</Text>
            <Text style={styles.description}>
              PIT boasts a sprawling and picturesque campus spread over acres of
              lush greenery, providing an ideal environment for academic
              pursuits and extracurricular activities. The campus is equipped
              with state-of-the-art facilities, modern classrooms, well-equipped
              laboratories, and research centers, creating an inspiring learning
              atmosphere for students.
            </Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.sectionTitle}>Research Programs</Text>
            <Text style={styles.description}>
              PIT is committed to fostering a culture of innovation and research
              excellence. The institution offers various research programs and
              opportunities for students and faculty members to engage in
              cutting-edge research projects, collaborate with industry
              partners, and contribute to advancements in their respective
              fields.
            </Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.sectionTitle}>Industry Connect</Text>
            <Text style={styles.description}>
              PIT has established strong ties with leading industries and
              organizations, facilitating industry-relevant
              training,internships, and placements for its students. The
              institution regularly hosts industry experts, guest lectures, and
              workshops toprovide students with insights into the latest trends
              and developments in the industry.{"\n"} {"\n"}
              {"\n"} {"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "#7cd1eb",
    borderRadius: 20,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    marginTop: 40,
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

export default CardWithScrollView;
