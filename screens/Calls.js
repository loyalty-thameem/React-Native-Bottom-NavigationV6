import * as React from 'react';
import {
       View,
       Text,
       Button,
       StyleSheet
} from 'react-native';

const Calls = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Calls</Text>
      <Button 
             onPress={()=>alert("Calls Button Clicked")}
             title='Click here'
             />
    </View>
  );
};

export default Calls;
const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#8fcbbc'
    }
})
