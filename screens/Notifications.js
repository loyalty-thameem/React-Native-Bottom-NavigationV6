import * as React from 'react';
import {
       View,
       Text,
       Button,
       StyleSheet
} from 'react-native';

const Notifications = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Notifications</Text>
      <Button 
             onPress={()=>alert("Notifications Button Clicked")}
             title='Click here'
             />
    </View>
  );
};

export default Notifications;
const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#8fcbbc'
    }
})
