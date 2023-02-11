
import React, { Component, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import '../components/global.js'

function Untitled2(props) {
  const [complete,setComplete]=useState(false);
  const [incomplete,setIncomplete]=useState(false);
  const [todo,setTodo]=useState(true)
  return (
    <View style={styles.container}>
      <View style={styles.rect3Stack}>
        <View style={styles.rect3}>
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
            <FeatherIcon name="list" style={styles.icon3}></FeatherIcon></TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("DisplayTodo")}
               
            >
            <FontAwesomeIcon
              name="user-circle"
              style={styles.icon4}
            ></FontAwesomeIcon>
            </TouchableOpacity>
          </View>
        </View>
       
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.incompleteTasks}>Incomplete Tasks</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.completedTasks}>Completed Tasks</Text>
        </TouchableOpacity>

      </View>
      <View  ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect3: {
    left: 14,
    width: 386,
    height: 812,
    position: "absolute",
    backgroundColor: "rgba(147,139,139,1)",
    top: 0,
    flexDirection: "row"
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
    flex: 1,
    marginRight: 34,
    marginLeft: 25,
    marginTop: 742
  },
  button2: {
    top: 35,
    left: 207,
    width: 198,
    height: 36,
    position: "absolute",
    backgroundColor: "rgba(185,154,154,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.58,
    shadowRadius: 0
  },
  incompleteTasks: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 17,
    marginTop: 9,
    marginLeft: 22
  },
  button: {
    top: 35,
    left: 0,
    width: 202,
    height: 36,
    position: "absolute",
    backgroundColor: "rgba(134,139,137,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.58,
    shadowRadius: 0
  },
  completedTasks: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    width: 139,
    height: 20,
    marginTop: 6,
    marginLeft: 20
  },
  rect3Stack: {
    width: 405,
    height: 812,
    marginLeft: -14
  }
});

export default Untitled2;


