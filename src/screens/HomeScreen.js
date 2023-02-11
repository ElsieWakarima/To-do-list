
import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import '../components/global.js'


function HomeScreen(props) {
  const [count, setcount] = useState(0);
  const [ccount, setccount] = useState(0);
  const [tcount, settcount] = useState(0);
  const [acount, setacount] = useState(0);

  const [today, settoday] = useState([]);
  const [date, setDate] = useState(new Date());


 const counttodo =() => {
    const todo = global.todo.filter(item => item.status === false);
    setcount(todo.length)

    const ctodo = global.todo.filter(item => item.status === true);
    setccount(ctodo.length)

    const ttodo = global.todo.filter(item => item.startdate === today);
    settcount(ttodo.length)

    const atodo = global.todo.filter(item => item.alert === 0);
    setacount(atodo.length)
}
  useEffect(() => {

  
    const interval = setInterval(() =>{
      counttodo()
      mydate()
      console.log(today)
    },1000)
    // loaddata();
    // loadtotal();
    return()=>clearInterval(interval)
  }, []);
  const mydate = () => {
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var fulldate = day + '/' + month + '/' + year;

    const todaydate = global.todo.filter(item => item.startdate === fulldate);
    settoday(todaydate)

  }
  return (
    <View style={styles.container}>
      <View style={styles.scrollAreaStack}>
        <View style={styles.scrollArea}>
       
            <Text style={styles.helloUser}>Welcome</Text>
            <Text style={styles.tasksAvailable}>{count} tasks available for you</Text>
            <Text style={styles.tasks}>Tasks</Text>

            <View style={styles.container}>
      <View style={styles.ccountRow}>
        <View style={styles.ccount}>
          <View style={styles.crec}>
            <View style={styles.ciconRow}>
              <IoniconsIcon
                name="md-checkbox-outline"
                style={styles.cicon}
              ></IoniconsIcon>
              <View style={styles.cnoColumn}>
                <Text style={styles.cno}>{ccount}</Text>
                <Text style={styles.completed}>Completed</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.pcount}>
          <View style={styles.prec}>
            <View style={styles.piconRow}>
              <IoniconsIcon name="md-time" style={styles.picon}></IoniconsIcon>
              <View style={styles.pnoColumn}>
                <Text style={styles.pno}>{count}</Text>
                <Text style={styles.pending}>Pending</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.tcountRow}>
        <View style={styles.tcount}>
          <View style={styles.trec}>
            <View style={styles.ticonRow}>
              <FontAwesomeIcon
                name="calendar"
                style={styles.ticon}
              ></FontAwesomeIcon>
              <View style={styles.tnoColumn}>
                <Text style={styles.tno}>{tcount}</Text>
                <Text style={styles.today}>Today</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.acount}>
          <View style={styles.arec}>
            <View style={styles.aiconRow}>
              <FontAwesomeIcon
                name="bell-o"
                style={styles.aicon}
              ></FontAwesomeIcon>
              <View style={styles.apnColumn}>
                <Text style={styles.apn}>{acount}</Text>
                <Text style={styles.allTodo}>All Todo</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>


            <Text style={styles.todaysTask}>Today&#39;s Task</Text>
            <View style={styles.rect14}>
            <FlatList
          style={{height:"90%",width:'100%'}}
          enableEmptySections={true}
          data={today}
          filterBy={today => data.status = 0}
          searchTerm={1}
           searchBy="status"

          // keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return ( 

              <Text style={styles.mobileApp}>{item.name}</Text>

              
            )
          }}
        /> 
            </View>
            
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
            name="md-add-circle"
            style={styles.icon2}
          ></IoniconsIcon>
          </TouchableOpacity>
          <TouchableOpacity
                onPress={() => props.navigation.navigate("DisplayTodo")}
               
              >
          <FeatherIcon name="list" style={styles.icon5}></FeatherIcon>
          </TouchableOpacity>
        
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F3F4F7',

    
    
  },
  scrollArea: {
    height: '100%',
    position: "absolute",
    // backgroundColor: "rgba(229,217,217,1)",
    width: '100%',
    top: 0,
    left: 0
  },
  scrollArea_contentContainerStyle: {
    height: '100%',
    width: '100%'
  },
  helloUser: {
    color: "#121212",
    fontSize: 45,
    marginTop: 150,
    marginLeft: '5%',
    fontWeight:'900'
  },
  tasksAvailable: {
    color: "#121212",
    fontSize: 19,
    marginLeft: '5%',
  },
  tasks: {
    color: "#121212",
    fontSize: 42,
    marginTop: 36,
    marginLeft: '5%',
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
    color: "#121212",
    fontSize: 42,
    marginTop: 43,
    marginLeft: '5%',
    fontWeight:'700'
  },
  rect14: {
    width: '90%',
    height: 54,
    backgroundColor: "#E6E6E6",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 42,
    marginTop: 20,
    marginLeft: '5%'
  },
  mobileApp: {
    color: "#121212",
    fontSize: 28,
    marginTop: 10,
    marginLeft: 39
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
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginLeft: 47
  },
  
  icon1Row: {

    height: '10%',
    flexDirection: "row",
    // marginBottom: 0,
    marginLeft: '23%',
    marginRight: 30,
    width:'90%',
     // position:'absolute',
    // marginTop:'202%',
    bottom:-120
  },
  iconStyle: {
    color: "#616161",
    fontSize: 30,
    paddingLeft: 8
  },
  ellipse: {
    top: 343,
    left: 360,
    width: 100,
    height: 100,
    position: "absolute"
  },
  scrollAreaStack: {
    width: '100%',
    height: '90%',
    marginTop: -92
  },

  // container: {
  //   flex: 1
  // },
  ccount: {
    width: '44%',
    height: 120

  },
  crec: {
    width: '100%',
    height: 120,
    
    backgroundColor: "#1bb1b0",
    borderRadius: 19
  },
  cicon: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    height: 33,
    width: 23
  },
  cno: {
    // fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 23
  },
  completed: {
    // fontFamily: "roboto-700",
    color: "#69dcdb",
    marginTop: 2,
    width:100,
    fontSize:12
  },
  cnoColumn: {
    width: 69,
    marginLeft: 6
  },
  ciconRow: {
    height: 46,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 20,
    marginRight: 25
  },
  pcount: {
    width: '44%',
    height: 120,
    
    marginLeft: 10
  },
  prec: {
    width: '100%',
    height: 120,
    
    backgroundColor: "#fe7746",
    borderRadius: 19
  },
  picon: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    height: 33,
    width: 24
  },
  pno: {
    color: "rgba(255,255,255,1)",
    fontSize: 23
  },
  pending: {
    color: "#fca888",
    marginTop: 1,
    width:100,
    fontSize:12
  },
  pnoColumn: {
    width: 52,
    marginLeft: 7,
    marginTop: 1
  },
  piconRow: {
    height: 46,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 20,
    marginRight: 40,
    
  },
  ccountRow: {
    height: 120,
    
    flexDirection: "row",
    // marginTop: 149,
    marginLeft: '5%',
    marginRight: 41,
    width:'100%'
  },
  tcount: {
    width: '44%',
    height: 120

  },
  trec: {
    width: '100%',
    height: 120,
    
    backgroundColor: "#f55478",
    borderRadius: 19
  },
  ticon: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    height: 30,
    width: 28
  },
  tno: {
    color: "rgba(255,255,255,1)",
    fontSize: 23
  },
  today: {
    color: "#fea3bc",
    marginTop: 1,
    marginLeft: 2,
    width:100,
    fontSize:12
  },
  tnoColumn: {
    width: 40,
    marginLeft: 2
  },
  ticonRow: {
    height: 45,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 20,
    marginRight: 53
  },
  acount: {
    width: '44%',
    height: 120,
    
    marginLeft: 10
  },
  arec: {
    width: '100%',
    height: 120,
    
    backgroundColor: "#8676fe",
    borderRadius: 19
  },
  aicon: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    height: 30,
    width: 30,
    marginTop: 2
  },
  apn: {
    color: "rgba(255,255,255,1)",
    fontSize: 23
  },
  allTodo: {
    color: "#baadfc",
    marginTop: 2,
    width:100,
    fontSize:12
  },
  apnColumn: {
    width: 51,
    marginLeft: 3
  },
  aiconRow: {
    height: 46,
    
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 18,
    marginRight: 41
  },
  tcountRow: {
    height: 120,
    width:'100%',
    flexDirection: "row",
    marginTop: 10,
    marginLeft: '5%',
    marginRight: 41
  }
});

export default HomeScreen;
