import React, { Component } from "react";
import { StyleSheet, View, Text ,TouchableOpacity} from "react-native";
import MaterialSlider from "../components/MaterialSlider";
import MaterialRadio from "../components/MaterialRadio";
import MaterialRadio1 from "../components/MaterialRadio1";
import MaterialSlider1 from "../components/MaterialSlider1";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function UncompletedTasks(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.uncompletedTasks}>Uncompleted Tasks</Text>
        <View style={styles.rect1}>
          <View style={styles.uxResearch1ColumnRow}>
            <View style={styles.uxResearch1Column}>
              <Text style={styles.uxResearch1}>UX Research</Text>
              <Text style={styles.location}>Location</Text>
              <MaterialSlider style={styles.materialSlider2}></MaterialSlider>
            </View>
            <MaterialRadio style={styles.materialRadio3}></MaterialRadio>
          </View>
        </View>
        <View style={styles.rect2}>
          <View style={styles.thesisResearch1ColumnRow}>
            <View style={styles.thesisResearch1Column}>
              <Text style={styles.thesisResearch1}>Thesis Research</Text>
              <Text style={styles.location2}>Location</Text>
            </View>
            <MaterialRadio1 style={styles.materialRadio1}></MaterialRadio1>
          </View>
          <MaterialSlider1 style={styles.materialSlider1}></MaterialSlider1>
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
          ></IoniconsIcon></TouchableOpacity>
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
    flex: 1,
    justifyContent: "center"
  },
  rect: {
    width: 375,
    height: 812,
    backgroundColor: "rgba(185,154,154,1)",
    alignSelf: "center"
  },
  uncompletedTasks: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 37,
    marginTop: 51,
    marginLeft: 25
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
    marginTop: 21,
    marginLeft: 14
  },
  uxResearch1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 35,
    transform: [
      {
        rotate: "-1.00deg"
      }
    ]
  },
  location: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 9,
    marginLeft: 9
  },
  materialSlider2: {
    height: 37,
    width: 197,
    marginTop: 5,
    marginLeft: 9
  },
  uxResearch1Column: {
    width: 206
  },
  materialRadio3: {
    height: 71,
    width: 56,
    marginLeft: 37,
    marginTop: 21
  },
  uxResearch1ColumnRow: {
    height: 110,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 22,
    marginRight: 25
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
    marginTop: 41,
    marginLeft: 14
  },
  thesisResearch1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 30
  },
  location2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 5,
    marginLeft: 11
  },
  thesisResearch1Column: {
    width: 220
  },
  materialRadio1: {
    height: 40,
    width: 40,
    marginLeft: 41,
    marginTop: 18
  },
  thesisResearch1ColumnRow: {
    height: 58,
    flexDirection: "row",
    marginTop: 29,
    marginLeft: 20,
    marginRight: 25
  },
  materialSlider1: {
    height: 30,
    width: 150,
    marginLeft: 31
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
    marginTop: 320,
    marginLeft: 25,
    marginRight: 23
  }
});

export default UncompletedTasks;
