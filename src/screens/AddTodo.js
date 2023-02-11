import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Text,TouchableOpacity, TextInput, Button, Pressable } from "react-native";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialIconTextbox from "../components/MaterialIconTextbox";
import MaterialUnderlineTextbox1 from "../components/MaterialUnderlineTextbox1";
import MaterialSwitch from "../components/MaterialSwitch";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import DatePicker from "react-native-date-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import '../components/global.js'


import { SelectList } from 'react-native-dropdown-select-list'
import { AsyncStorage } from "react-native";



function AddTodo(props) {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [showstart, setShowstart] = useState(false);
  const [showend, setShowend] = useState(false);
  const [taskname, setTaskname] = useState("");
  const [starttime, setStarttime] = useState('Select Time');
  const [endtime, setEndtime] = useState('Select Time');
  const [selected, setSelected] = React.useState("");
  const [tasks, setTasks] = useState([]);
  const [todolist, settodolist] = useState(
    {
      name: "",
      startdate: "",
      starttime: "",
      endtime: "",
      priority: "",
      alert: "",
      longitude: "",
      latitude: "",
      status: "",
    }
  );
 
  const addTask = (task) => {
    var todo1 = []
    todo1.push({
      name: taskname,
      startdate: date,
      starttime: starttime,
      endtime: endtime,
      priority: selected,
      alert: "",
      longitude: "",
      latitude: "",
      status: "",
    });
    global.todo.push(todo1)

  //   settodolist(  
  //     {
  //       name: taskname,
  //   startdate: date,
  //   starttime: starttime,
  //   endtime: endtime,
  //   priority: selected,
  //   alert: "",
  //   longitude: "",
  //   latitude: "",
  //   status: "",

  // })
  // setTasks([...tasks, todolist]);
  const mydata = JSON.stringify(global.todo);
console.log(mydata)
    // if (task == null) return;
    // setTasks([...tasks, task]);
    // // Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }


  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  var fulldate = day + '/' + month + '/' + year;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };
  const onStartChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    let today = currentDate;
    let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
    let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();

    let time = hours + ':' + minutes ;
    setShowstart(false);
    setStarttime(time);
  };
  const onEndChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    let today = currentDate;
    let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
    let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();

    let time = hours + ':' + minutes ;
    setShowend(false);
    setEndtime(time);
  };
  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      // setShow(false);
      // for iOS, add a button that closes the picker

      // {showcompleted && <code ya completed hii side>}
      // {showuncompleted && <code ya uncompleted hii side>}
      // {showall && <code ya all hii side>}
    }
    setMode(currentMode);
  };
const handlename = (e) =>{
  alert(e)
}
  const showDatepicker = () => {
    setShow(true);
    showMode('date');
  };

  const showstartTimepicker = () => {
    showMode('time');
    setShowstart(true);
  };
  const showendTimepicker = () => {
    showMode('time');
    setShowend(true);
  };
  const data = [
    {key:'1', value:'High'},
    {key:'2', value:'Medium'},
    {key:'3', value:'Low'},
    
]
const _storeData = async () => {
  try {
      await AsyncStorage.setItem('name', 'Tom');
  } catch (error) {
      // Error saving data
  }
}

const _retrieveData = async () => {
  try {
      const value = await AsyncStorage.getItem('name');
      if (value !== null) {
          // Our data is fetched successfully
          console.log(value);
      }
  } catch (error) {
      // Error retrieving data
  }
}

useEffect(() => {
_retrieveData()
}, []);
      return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.addTasks}>Add tasks</Text>
        <Text style={styles.taskName}>Task Name</Text>
        <TextInput
        placeholder="Name"
        onChangeText={text => setTaskname(text)}
        style={{
          height:50,
          width:'80%',
          backgroundColor:'white',
          padding:12,
          marginLeft:'10%'
          }}
      ></TextInput>
        
        <Text style={styles.startDate}>
        Start Date
        </Text>
      {/* <Button onPress={showTimepicker} title="Show time picker!" /> */}
      <Pressable onPress={showDatepicker} style={{ backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"}}>
      <Icon onPress={showDatepicker} name="calendar" style={styles.iconStyle}></Icon>
      <Text disabled  style={styles.inputStyle}>Selected Date: {fulldate}</Text>
    </Pressable>

     
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
           
        <View style={styles.startTimeRow}>
          <Text style={styles.startTime}>Start Time</Text>
          <Text style={styles.endTime}>End Time</Text>
        </View>
        <View style={styles.materialUnderlineTextbox1Row}>
          <Pressable
            style={styles.materialUnderlineTextbox1}
            // onPress={showstartTimepicker}
            onPress={addTask}

          >
   
             <Text
        placeholder="Placeholder"
        style={styles.inputStyle}
      >{starttime.toLocaleString()}</Text>
         {showstart && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onStartChange}
        />
      )}
          </Pressable>
       
          <Pressable
          onPress={showendTimepicker}
            style={styles.materialUnderlineTextbox12}
          >
             <Text
        placeholder="Placeholder"
        style={styles.inputStyle}
      >{endtime.toLocaleString()}</Text>
           {showend && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onEndChange}
        />
      )}
          </Pressable>
        </View>
        <View style={styles.priorityRow}>
          <Text style={styles.priority}>Priority</Text>
          <Text style={styles.alert}>Alert</Text>
        </View>
        <View style={styles.materialUnderlineTextbox3Row}>
          <View
            style={styles.materialUnderlineTextbox3}
          >
             <SelectList 
              setSelected={(val) => setSelected(val)} 
              data={data} 
              save="value"
              />
          </View>
          <View style={styles.materialUnderlineTextbox4Stack}>
            {/* <MaterialUnderlineTextbox
              style={styles.materialUnderlineTextbox4}
            ></MaterialUnderlineTextbox> */}
            <MaterialSwitch style={styles.materialSwitch}></MaterialSwitch>
          </View>
        </View>
        <MaterialButtonPrimary
        onPress={addTask}
          style={styles.materialButtonPrimary}
        ></MaterialButtonPrimary>
        
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(244,234,234,1)",
    height:'100%'

    // alignContent:'center',
  },
  rect: {
    width: '100%',
    height: '90%',
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
  dateselecter: {
    // height: 43,
    // width: 330,
    // marginLeft: 
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
    left: 0,
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
    width: '70%',
    marginTop: 74,
    marginLeft: '15%'
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

    height: '10%',
    flexDirection: "row",
    marginBottom: 0,
    marginLeft: '10%',
    marginRight: 30,
    width:'90%'
  },
  iconStyle: {
    color: "#616161",
    fontSize: 30,
    paddingLeft: 8
  },
  inputStyle: {
    color: "#000",
    marginLeft: 16,
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    paddingTop: 14,
    paddingBottom: 8,
    
  }
});

export default AddTodo;
