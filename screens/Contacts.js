import * as React from 'react';
import {
       View,
       Text,
       Button,
       StyleSheet
} from 'react-native';

const Contacts = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Contacts</Text>
      <Button 
             onPress={()=>alert("Contacts Button Clicked")}
             title='Click here'
             />
    </View>
  );
};

export default Contacts;
const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#8fcbbc'
    }
})
