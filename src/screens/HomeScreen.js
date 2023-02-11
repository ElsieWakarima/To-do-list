
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
// import Svg, { Ellipse } from "react-native-svg";
import FeatherIcon from "react-native-vector-icons/Feather";


function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollAreaStack}>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <Text style={styles.helloUser}>Hello User</Text>
            <Text style={styles.tasksAvailable}>4 tasks available for you</Text>
            <Text style={styles.tasks}>Tasks</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Untitled")}
                style={styles.button}
              >
                <View style={styles.rect4}></View>
                <View style={styles.rect5}></View>
              </TouchableOpacity>
              <View style={styles.taskTwoStack}>
                <Text style={styles.taskTwo}>Task two</Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Untitled")}
                  style={styles.group2}
                >
                  <View style={styles.rect10}></View>
                  <View style={styles.rect11}></View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.groupRow}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Untitled")}
                style={styles.group}
              >
                <View style={styles.rect8}></View>
                <View style={styles.rect9}></View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Untitled")}
                style={styles.group3}
              >
                <View style={styles.rect12}></View>
                <View style={styles.rect13}></View>
              </TouchableOpacity>
            </View>
            <Text style={styles.todaysTask}>Today&#39;s Task</Text>
            <View style={styles.rect14}>
              <Text style={styles.mobileApp}>Mobile App</Text>
            </View>
            <View style={styles.iconRow}>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("HomeScreen")}
               
              >
              <EntypoIcon name="home" style={styles.icon}></EntypoIcon>
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
            <FeatherIcon name="list" style={styles.icon3
        }></FeatherIcon></TouchableOpacity>
              
              
              <FontAwesomeIcon
                name="user-circle"
                style={styles.icon4}
              ></FontAwesomeIcon>
            </View>
          </ScrollView>
        </View>
        {/* <Svg viewBox="0 0 100 100" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={50}
            cy={50}
            rx={50}
            ry={50}
          ></Ellipse>
        </Svg> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  scrollArea: {
    height: '100%',
    position: "absolute",
    backgroundColor: "rgba(229,217,217,1)",
    width: '100%',
    top: 0,
    left: 0
  },
  scrollArea_contentContainerStyle: {
    height: '100%',
    width: '100%'
  },
  helloUser: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 45,
    marginTop: 150,
    marginLeft: 12
  },
  tasksAvailable: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 19,
    marginLeft: 12
  },
  tasks: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 42,
    marginTop: 36,
    marginLeft: 12
  },
  button: {
    width: 135,
    height: 148,
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect4: {},
  rect5: {},
  taskTwo: {
    top: 6,
    left: 14,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 27
  },
  group2: {
    top: 0,
    left: 0,
    width: 135,
    height: 148,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect10: {},
  rect11: {},
  taskTwoStack: {
    width: 135,
    height: 148,
    marginLeft: 41
  },
  buttonRow: {
    height: 148,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: '12%',
    marginRight: 39
  },
  group: {
    width: 135,
    height: 148,
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect8: {},
  rect9: {},
  group3: {
    width: 135,
    height: 148,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 41
  },
  rect12: {},
  rect13: {},
  groupRow: {
    height: 148,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 25,
    marginRight: 39
  },
  todaysTask: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 42,
    marginTop: 43,
    marginLeft: 12
  },
  rect14: {
    width: 325,
    height: 54,
    backgroundColor: "#E6E6E6",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 42,
    marginTop: 11,
    marginLeft: 12
  },
  mobileApp: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 28,
    marginTop: 10,
    marginLeft: 39
  },
  icon: {
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
    marginLeft: 49
  },
  icon3: {
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
    marginLeft: 55,
    marginTop: 4
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 25,
    marginRight: 32
  },
  ellipse: {
    top: 343,
    left: 360,
    width: 100,
    height: 100,
    position: "absolute"
  },
  scrollAreaStack: {
    width: 460,
    height: 2157,
    marginTop: -92
  }
});

export default HomeScreen;
