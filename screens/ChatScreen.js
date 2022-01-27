import * as React from 'react';
import {
       View,
       Text,
       Button,
       StyleSheet
} from 'react-native';

const ChatScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>ChatScreen</Text>
      <Button 
             onPress={()=>alert("ChatScreen Button Clicked")}
             title='Click here'
             />
    </View>
  );
};

export default ChatScreen;
const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#8fcbbc'
    }
})
