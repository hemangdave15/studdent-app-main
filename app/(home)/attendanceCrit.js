import React from 'react'
import { Text, View } from 'react-native'
import { StyleSheet, ScrollView } from 'react-native'

export default function AttendanceCriteria() {
  return (
    <View style={styles.container}>
    <View style={styles.card}>
      <Text style={styles.title}>AttendanceCriteria</Text>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.sectionTitle}>Different Criteria</Text>

        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>All Clear</Text>
          <Text style={styles.description}>
          Clear: This designation is given when the overall attendance across all 
          subjects is greater than 75%, signifying exemplary attendance performance.
    
          </Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>TNG</Text>
          <Text style={styles.description}>
          TNG- Term Not Granted{'\n'}{'\n'}
          This is assigned when the overall attendance across all subjects is below 70%, 
          indicating a need for improvement in all areas of attendance.
          </Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>CNG</Text>
          <Text style={styles.description}>
          CNG- Course Not Granted{'\n'}{'\n'}
          Indicates that the attendance of some subjects is
           below the expected standard, specifically less than 70%.

          </Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>CCNG</Text>
          <Text style={styles.description}>
          CCNG- Conditionally Course Not Granted{'\n'}{'\n'}
          Implies that while the overall attendance is not ideal, falling between 70% and 75%, 
          it is not yet considered unsatisfactory.{'\n'}
          Assignments need to be submitted according to the respective faculty.
          </Text>
        </View>

        <View style={styles.container}>
      <View style={[styles.row, styles.header]}>
        <Text style={styles.cell}>Days</Text>
        <Text style={styles.cell}>Documents Required</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>Greater than 10 days</Text>
        <Text style={styles.cell}>
          Investigation Reports{'\n'}
          Details of Treatment Received{'\n'}
          Medical Certificate/Fitness Certificate
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>Less than 10 days</Text>
        <Text style={styles.cell}>
          Medical Certificate{'\n'}
          Investigation Reports{'\n'}
          Details of Treatment Received (if any)
        </Text>
      </View>
    </View>
   <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text> 

        
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
  backgroundColor: "#CAEAF0",
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
row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingVertical: 10,
  },
  header: {
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 2,
    borderBottomColor: '#cccccc',
  },
  cell: {
    flex: 1,
    padding: 8,
    textAlign: 'center',
  },
});


