
import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, FlatList, Pressable } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import '../components/global.js'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


function Displaytodo(props) {

  // decalring constant and states
  const [complete,setComplete]=useState(false);
  const [incomplete,setIncomplete]=useState(false);
  const [alltodo,setallTodo]=useState(true)
  const [data,setdata]=useState([])
  const [cdata,setcdata]=useState([])
  const [ndata,setndata]=useState([])


  const mydata = JSON.stringify(global.todo);

// function to update task status i.e completion
  const updateState = (name) => {

    console.log(name)
    const newState = data.map(item => {
      // 👇️ if item.name equals name, update status property
      if (item.name === name && item.status == false) {
        return {...item, status: true};
      }

      else{
        return {...item, status: false};
      }

      // 👇️ otherwise return the itemect as is
    });
// updating global variable
    setdata(newState);
    global.todo = newState;

  };

  // load tasks on load and reload for update
  useEffect(() => {
    const interval = setInterval(() =>{
      const mydata = JSON.stringify(global.todo);
      let datas = global.todo.filter(function(item){
        return item.status == true;
     })
     let datas1 = global.todo.filter(function(item){
      return item.status == false;
   })
     setcdata(datas)
     setndata(datas1)
     setdata(global.todo)

      console.log(global.todo)

    },1000)
    return()=>clearInterval(interval)
  }, []);
  
// display completed tasks
    const handleComplete = () =>{
      setIncomplete(false)
      setComplete(true)
      setallTodo(false)
    }
    // display incompleted tasks

    const handleIncomplete = () =>{
      setIncomplete(true)
      setComplete(false)
      setallTodo(false)
    }
  return (
    <View style={styles.container}>
    <View style={styles.rect3Stack}>
          <View style={styles.rect3}>
          {/* load all tasks */}
         {alltodo &&   
         <FlatList
          style={{height:"90%",width:'100%'}}
          enableEmptySections={true}
          data={data}
          filterBy={data => data.status = 1}
          searchTerm={1}
           searchBy="status"

          renderItem={({ item }) => {
            return ( 

              <View style={styles.group}>
          <View style={styles.tododisplay}>
            <View style={styles.iconRow}>
            <TouchableOpacity onPress={()=> updateState(item.name)}>
              <Icon name={item.status ? "radiobox-marked" : "radiobox-blank"} style={styles.icon}></Icon>
              </TouchableOpacity>
              <Text style={styles.gaskNameAndTimtle}>{item.name}</Text>
              <Text style={styles.time}>{item.starttime}</Text>
            </View>
            <Text style={styles.latLong}>Lat:{item.latitude}{"\n"}Long:{item.longitude}</Text>
          </View>
        </View>
              
            )
          }}
        /> }
        {/* Load completed tasks */}
         {complete &&  
          <FlatList
          style={{height:"90%",width:'100%'}}
          enableEmptySections={true}
          data={cdata}
          filterBy={data => data.status = 1}
          searchTerm={1}
           searchBy="status"

          renderItem={({ item }) => {
            return ( 
              <View style={styles.group}>
          <View style={styles.tododisplay}>
            <View style={styles.iconRow}>
            <TouchableOpacity onPress={()=> updateState(item.name)}>
              <Icon name={item.status ? "radiobox-marked" : "radiobox-blank"} style={styles.icon}></Icon>
              </TouchableOpacity>
              <Text style={styles.gaskNameAndTimtle}>{item.name}</Text>
              <Text style={styles.time}>{item.starttime}</Text>
            </View>
            <Text style={styles.latLong}>Lat:{item.latitude}{"\n"}Long:{item.longitude}</Text>
          </View>
        </View>
            )
          }}
        />}
        {/* load uncompleted tasks */}
         {incomplete &&
            <FlatList
          style={{height:"90%",width:'100%'}}
          enableEmptySections={true}
          data={ndata}
          filterBy={data => data.status = 1}
          searchTerm={1}
           searchBy="status"

          renderItem={({ item }) => {
            return ( 
              

              <View style={styles.group}>
          <View style={styles.tododisplay}>
            <View style={styles.iconRow}>
            <TouchableOpacity onPress={()=> updateState(item.name)}>

            <Icon name={item.status ? "radiobox-marked" : "radiobox-blank"} style={styles.icon}></Icon>
              </TouchableOpacity>
              <Text style={styles.gaskNameAndTimtle}>{item.name}</Text>
              <Text style={styles.time}>{item.starttime}</Text>
            </View>
            <Text style={styles.latLong}>Lat:{item.latitude}{"\n"}Long:{item.longitude}</Text>
          </View>
        </View>
            )
          }}
        />}
         
          </View>
        <View style={{marginTop:15,marginLeft:'5%'}}>
        {/* toggle incomplete tasks */}
            <TouchableOpacity style={styles.button2}
            onPress={handleIncomplete}
            >
                <Text style={styles.incompleteTasks}>Incomplete Tasks</Text>
              </TouchableOpacity>
        {/* toggle completed tasks */}
        <TouchableOpacity style={styles.button}
              onPress={handleComplete}
              >
                <Text style={styles.completedTasks}>Completed Tasks</Text>
              </TouchableOpacity>
        </View>
            

      </View>
            {/* bottom navigation bar */}

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
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F3F4F7'

  },
  rect3: {
    left: 14,
    width: '100%',
    height: '100%',
    position: "absolute",
    top: 12,
    flexDirection: "row",
    marginTop:'20%'
  },
  icon1: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginLeft: 10,

  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginLeft: 47
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginLeft: 47
  },

  icon1Row: {

    height: '10%',
    flexDirection: "row",
    marginLeft: '23%',
    marginRight: 30,
    width:'90%',
    bottom:-30
  },
  iconStyle: {
    color: "#616161",
    fontSize: 30,
    paddingLeft: 8
  },
  button2: {
    top: 35,
    left: 200,
    width: '47%',
    height: 36,
    position: "absolute",
    backgroundColor: "#4278DE",
    shadowColor: "#FFFFFF",
    shadowOffset: {
      width: 0,
      height: 2
    },
    borderRadius: 10,
    elevation: 5,
    shadowOpacity: 0.58,
    shadowRadius: 0
  },
  incompleteTasks: {
    color: "#DFE8FA",
    fontSize: 16,
    fontWeight:'900',
    marginTop: 6,
    marginLeft: 22,
    height:'100%'
  },
  button: {
    top: 35,
    left: 0,
    width: '47%',
    height: 36,
    position: "absolute",
    backgroundColor: "#DFE8FA",
    shadowColor: "#FFFFFF",
    shadowOffset: {
      width: 0,
      height: 2
    },
    borderRadius:10,
    elevation: 5,
    shadowOpacity: 0.58,
    shadowRadius: 0
  },
  completedTasks: {
    color: "#4278DE",
    fontSize: 16,
    fontWeight:'900',
    width: 139,
    height: 20,
    marginTop: 6,
    marginLeft: 20,
    height:'100%'

  },
  rect3Stack: {
    width: '100%',
    height: '90%',
    marginLeft: -14
  },rect1: {
    width: '90%',
    marginLeft:'10%',
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
    color: "#121212",
    fontSize: 12,
    marginLeft: 1,
    fontWeight:'900',
  },
  location: {
    fontSize:9,
    top: 0,
    left: 0,
    position: "absolute",
    color: "#121212",
    width:100
  },
  location1: {
    fontSize:9,

    top: 10,
    left: 0,
    position: "absolute",
    color: "#121212",
    width:100

  },
  location2: {
    fontSize:9,
    width:100,

    top: 30,
    left: 0,
    position: "absolute",
    color: "#121212"
  },
  locationStack: {
    flex:1,
    width: 74,
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
    width:'100%',
    height: 98,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 35,
    marginRight: 16
  },

  group: {
    width: '90%',
    height: 70,
    marginTop: 15,
    marginLeft: '5%'
  },
  tododisplay: {
    width: '100%',
    height: 70,
    backgroundColor: "#fafafc",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#eeedef"
  },
  icon: {
    height: 29,
    width: 25,
    marginTop: 1,
    color: "#3F51B5",
    fontSize: 23,
    lineHeight: 24,
  },
  gaskNameAndTimtle: {
    color: "#343941",
    fontSize: 18,
    marginLeft: 9
  },
  time: {
    color: "#edadc0",
    fontSize: 16,
    marginLeft: '80%',
    marginTop: 1,
    position:'absolute'
  },
  iconRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 9,
    marginRight: 27
  },
  latLong: {
    color: "#9ca0a4",
    fontSize: 10,
    marginTop: 2,
    marginLeft: 35
  }
});

export default Displaytodo;


