import React, { Component } from "react";
import { StyleSheet, View, Text,TouchableOpacity } from "react-native";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialIconTextbox from "../components/MaterialIconTextbox";
import MaterialUnderlineTextbox1 from "../components/MaterialUnderlineTextbox1";
import MaterialSwitch from "../components/MaterialSwitch";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function AddTodo(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.addTasks}>Add tasks</Text>
        <Text style={styles.taskName}>Task Name</Text>
        <MaterialUnderlineTextbox
          style={styles.materialUnderlineTextbox}
        ></MaterialUnderlineTextbox>
        <Text style={styles.startDate}>Start Date</Text>
        <MaterialIconTextbox
          style={styles.materialIconTextbox}
        ></MaterialIconTextbox>
        <View style={styles.startTimeRow}>
          <Text style={styles.startTime}>Start Time</Text>
          <Text style={styles.endTime}>End Time</Text>
        </View>
        <View style={styles.materialUnderlineTextbox1Row}>
          <MaterialUnderlineTextbox1
            style={styles.materialUnderlineTextbox1}
          ></MaterialUnderlineTextbox1>
          <MaterialUnderlineTextbox1
            style={styles.materialUnderlineTextbox12}
          ></MaterialUnderlineTextbox1>
        </View>
        <View style={styles.priorityRow}>
          <Text style={styles.priority}>Priority</Text>
          <Text style={styles.alert}>Alert</Text>
        </View>
        <View style={styles.materialUnderlineTextbox3Row}>
          <MaterialUnderlineTextbox
            style={styles.materialUnderlineTextbox3}
          ></MaterialUnderlineTextbox>
          <View style={styles.materialUnderlineTextbox4Stack}>
            <MaterialUnderlineTextbox
              style={styles.materialUnderlineTextbox4}
            ></MaterialUnderlineTextbox>
            <MaterialSwitch style={styles.materialSwitch}></MaterialSwitch>
          </View>
        </View>
        <MaterialButtonPrimary
          style={styles.materialButtonPrimary}
        ></MaterialButtonPrimary>
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
            name="md-add-circle"
            style={styles.icon2}
          ></IoniconsIcon>
          </TouchableOpacity>
          <TouchableOpacity
                onPress={() => props.navigation.navigate("DisplayTodo")}
               
              >
          <FeatherIcon name="list" style={styles.icon5}></FeatherIcon>
          </TouchableOpacity>
          <FontAwesomeIcon
            name="user-circle"
            style={styles.icon4}
          ></FontAwesomeIcon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(190,178,178,1)"
  },
  rect: {
    width: 375,
    height: 812,
    backgroundColor: "rgba(244,234,234,1)"
  },
  addTasks: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 43,
    marginTop: 52,
    marginLeft: 91
  },
  taskName: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 26,
    marginTop: 29,
    marginLeft: 10
  },
  materialUnderlineTextbox: {
    height: 43,
    width: 360,
    marginLeft: 13
  },
  startDate: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 16,
    marginLeft: 15
  },
  materialIconTextbox: {
    height: 43,
    width: 330,
    marginLeft: 15
  },
  startTime: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 3
  },
  endTime: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 22,
    marginLeft: 81
  },
  startTimeRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 33,
    marginLeft: 16,
    marginRight: 94
  },
  materialUnderlineTextbox1: {
    height: 43,
    width: 150,
    marginTop: 1
  },
  materialUnderlineTextbox12: {
    height: 43,
    width: 150,
    marginLeft: 21
  },
  materialUnderlineTextbox1Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 16,
    marginRight: 38
  },
  priority: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 23,
    marginTop: 5
  },
  alert: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 25,
    marginLeft: 104
  },
  priorityRow: {
    height: 33,
    flexDirection: "row",
    marginTop: 62,
    marginLeft: 16,
    marginRight: 129
  },
  materialUnderlineTextbox3: {
    width: 124,
    height: 43
  },
  materialUnderlineTextbox4: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 169,
    height: 43
  },
  materialSwitch: {
    width: 45,
    height: 23,
    position: "absolute",
    left: 110,
    top: 10
  },
  materialUnderlineTextbox4Stack: {
    width: 169,
    height: 43,
    marginLeft: 53
  },
  materialUnderlineTextbox3Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 13,
    marginRight: 16
  },
  materialButtonPrimary: {
    height: 56,
    width: 270,
    marginTop: 74,
    marginLeft: 45
  },
  icon1: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 33,
    marginLeft: 47
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginLeft: 61
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginLeft: 57,
    marginTop: 4
  },
  icon1Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 71,
    marginLeft: 27,
    marginRight: 30
  }
});

export default AddTodo;
