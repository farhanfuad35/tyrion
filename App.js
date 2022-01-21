import { StyleSheet, Text, View, TouchableOpacity, Platform, StatusBar, PermissionsAndroid } from 'react-native';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.callButton, {backgroundColor:'#752978'}]}
        // onPress={() => {onButtonPress('01713031557')}}
        onPress={requestCallPermission}
      >
        <Text style={styles.textStyle}>Baba</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.callButton, {backgroundColor:'#55c951'}]}
        onPress={() => {onButtonPress('01773657785')}}
      >
        <Text style={styles.textStyle}>Amma</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.callButton, {backgroundColor:'#87bbe8'}]}
        onPress={() => {onButtonPress('01763185363')}}
      >
        <Text style={styles.textStyle}>Niloy</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.callButton, {backgroundColor:'#db6a07'}]}
        onPress={() => {onButtonPress('01710458996')}}
      >
        <Text style={styles.textStyle}>Kaku</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.callButton, {backgroundColor:'#fa6eff'}]}
        onPress={() => {onButtonPress('01743325437')}}
      >
        <Text style={styles.textStyle}>Panna Fupi</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.callButton, {backgroundColor:'#c9080f'}]}
        onPress={() => {onButtonPress('01743946285')}}
      >
        <Text style={styles.textStyle}>Zuli Mami</Text>
      </TouchableOpacity>

    </View>
  );
}

const onButtonPress = (phoneNumber) => {
  RNImmediatePhoneCall.immediatePhoneCall(phoneNumber)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: "row",
    backgroundColor: 'grey',
    alignItems: 'flex-start',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
  },

  callButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150
  },

  textStyle: {
    fontSize: 18,
  }
});

const requestCallPermission = async () => {
  console.log('Requesting')
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CALL_PHONE,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};
