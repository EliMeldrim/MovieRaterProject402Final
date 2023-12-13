import React, {useState, useEffect } from 'react';
import {View} from 'react-native';

import styles from '../styles/FriendsStyles.js'
import Friend from '../components/Friend.js';



var nameList = [
                {key: "Onur",selected: false,label: "Onur", image: require('../assets/SmallRGBTest2.png')},
                {key: "Samet",selected: false,label: "Samet",  image: require('../assets/SmallRGBTest2.png')},
                {key: "Efe",selected: false,label: "Efe",  image: require('../assets/SmallRGBTest2.png')},
                {key: "Bora",selected: false,label: "Bora",  image: require('../assets/SmallRGBTest2.png')}
                ]
                
const VirtualListBasics = ({user}) => {
  const[friends,setFriends]= useState([]);
  const [list, setList] = useState(nameList);
  const [aphoto, setPhoto] = useState('assets/snack-icon.png');

useEffect(() => {
        async function loadList(url) {
           
            const response = await fetch(url);
            const names = await response.json();
            setFriends(names.friends);
            console.log(names.friends);
            }

            const urladress = 'https://cs.boisestate.edu/~scutchin/cs402/codesnips/loadjson.php?user={movierater'+ user.username +'}';

        loadList(urladress)

}, []);



  var alist = <View style = {styles.container} >
                <Friend friendList={friends} source={{uri: aphoto}} /> 
                </View>
  return (alist);
}

export default VirtualListBasics;
