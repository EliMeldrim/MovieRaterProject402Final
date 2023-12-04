import {TouchableOpacity,Text, View, StyleSheet} from 'react-native';
import styles from '../styles/Styles.js';

export default function CustomButton(props) {
  return (
    <Pressable style= {({pressed}) => {
      return pressed ? styles.pressed : styles.notpressed;
    }}
    onPress= {() => props.click()}>
      <View style = {styles.buttons}>
      <Text style = {styles.buttonTitle}>
      {props.name}
        </Text>
      </View>
    </Pressable>
  )
}

//{customButton};
