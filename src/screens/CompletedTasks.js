import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text,TouchableOpacity } from "react-native";
import MaterialSlider from "../components/MaterialSlider";
import MaterialRadio from "../components/MaterialRadio";
import MaterialSlider1 from "../components/MaterialSlider1";
import MaterialRadio1 from "../components/MaterialRadio1";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function CompletedTasks(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <Text style={styles.completedTasks}>Completed Tasks</Text>
          <View style={styles.rect1}>
            <View style={styles.uxResearch1ColumnRow}>
              <View style={styles.uxResearch1Column}>
                <Text style={styles.uxResearch1}>UX Research</Text>
                <View style={styles.locationStack}>
                  <Text style={styles.location}>Location</Text>
                  <Text style={styles.location1}>Location</Text>
                  <Text style={styles.location2}>Location</Text>
                </View>
                <MaterialSlider style={styles.materialSlider1}></MaterialSlider>
              </View>
              <MaterialRadio style={styles.materialRadio1}></MaterialRadio>
            </View>
          </View>
          <View style={styles.rect2}>
            <View style={styles.thesisResearchColumnRow}>
              <View style={styles.thesisResearchColumn}>
                <Text style={styles.thesisResearch}>Thesis Research</Text>
                <Text style={styles.location3}>Location</Text>
                <MaterialSlider1
                  style={styles.materialSlider1}
                ></MaterialSlider1>
              </View>
              <MaterialRadio1 style={styles.materialRadio1}></MaterialRadio1>
            </View>
          </View>
          <View style={styles.icon1Row}>
          <TouchableOpacity
                onPress={() => props.navigation.navigate("HomeScreen")}
               
              >
            <EntypoIcon name="home" style={styles.icon1}></EntypoIcon>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("AddTodo")}
               
              >
            <IoniconsIcon
              name="ios-add-circle-outline"
              style={styles.icon2}
            ></IoniconsIcon>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("DisplayTodo")}
               
              >
            <FeatherIcon name="list" style={styles.icon3}></FeatherIcon>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("DisplayTodo")}
               
              >
            <FontAwesomeIcon
              name="user-circle"
              style={styles.icon4}
            ></FontAwesomeIcon>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollArea: {
    width: 375,
    height: 867,
    backgroundColor: "rgba(134,139,137,1)",
    alignSelf: "center"
  },
  scrollArea_contentContainerStyle: {
    height: 867,
    width: 375
  },
  completedTasks: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 38,
    marginTop: 52,
    marginLeft: 42
  },
  rect1: {
    width: 346,
    height: 133,
    backgroundColor: "rgba(187,184,184,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.58,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 28,
    marginTop: 23,
    marginLeft: 10
  },
  uxResearch1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 35,
    marginLeft: 1
  },
  location: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  location1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  location2: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  locationStack: {
    width: 54,
    height: 17,
    marginTop: 2
  },
  materialSlider1: {
    height: 37,
    width: 169,
    marginLeft: 6
  },
  uxResearch1Column: {
    width: 199
  },
  materialRadio1: {
    height: 40,
    width: 40,
    marginLeft: 36,
    marginTop: 29
  },
  uxResearch1ColumnRow: {
    height: 98,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 35,
    marginRight: 16
  },
  rect2: {
    width: 346,
    height: 131,
    backgroundColor: "rgba(187,184,184,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.58,
    shadowRadius: 0,
    borderRadius: 28,
    marginTop: 65,
    marginLeft: 10
  },
  thesisResearch: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 30
  },
  location3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 5,
    marginLeft: 9
  },
  thesisResearchColumn: {
    width: 220
  },
  thesisResearchColumnRow: {
    height: 95,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 26,
    marginRight: 24
  },
  icon1: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 44,
    width: 33,
    marginLeft: 54
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginLeft: 63,
    marginTop: 2
  },
  icon4: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginLeft: 57,
    marginTop: 4
  },
  icon1Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 293,
    marginLeft: 25,
    marginRight: 23
  }
});

export default CompletedTasks;
