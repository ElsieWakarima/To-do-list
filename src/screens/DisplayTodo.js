import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function DisplayTodo(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect3}>
        <Text style={styles.yourTasks}>Your Tasks</Text>
        
        <TouchableOpacity
                onPress={() => props.navigation.navigate("CompletedTasks")}
                style={styles.button}
              >
          <Text style={styles.completedTasks}>Completed Tasks</Text>
          </TouchableOpacity>
      

        <TouchableOpacity style={styles.button2}  onPress={() => props.navigation.navigate("UncompletedTasks")}>
          <Text style={styles.uncompletedTasks}>Uncompleted Tasks</Text>
        </TouchableOpacity>
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
               
              ><FeatherIcon name="list" style={styles.icon3}></FeatherIcon></TouchableOpacity>
          
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect3: {
    width: 386,
    height: 812,
    backgroundColor: "rgba(147,139,139,1)"
  },
  yourTasks: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 31,
    marginTop: 59,
    marginLeft: 93
  },
  button: {
    width: 315,
    height: 126,
    backgroundColor: "rgba(134,139,137,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.58,
    shadowRadius: 0,
    marginTop: 57,
    marginLeft: 25
  },
  completedTasks: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 35,
    marginTop: 42,
    marginLeft: 20
  },
  button2: {
    width: 315,
    height: 126,
    backgroundColor: "rgba(185,154,154,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.58,
    shadowRadius: 0,
    marginTop: 127,
    marginLeft: 30
  },
  uncompletedTasks: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 33,
    marginTop: 54,
    marginLeft: 9
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
    marginTop: 210,
    marginLeft: 25,
    marginRight: 34
  }
});

export default DisplayTodo;
