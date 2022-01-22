import Config from "react-native-config";
import { StyleSheet, Text, View, TouchableOpacity, Platform, StatusBar, PermissionsAndroid, ImageBackground } from 'react-native';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

export default function App() {
	checkCallPermission()
	console.log(Config.BABA)
	const image = "./assets/background.jpg"

	return (
		<ImageBackground source={require(image)} resizeMode="cover" style={{flex: 1}}>
			      <StatusBar
					animated={true}
					backgroundColor="grey" />

			<View style={styles.container}>
		
				<TouchableOpacity
				style={[styles.callButton, {backgroundColor:'#752978'}]}
				onPress={() => {onButtonPress(Config.BABA)}}
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
				onPress={() => {onButtonPress('01844484110')}}
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
		</ImageBackground>
  	);
}

function checkCallPermission(){
  PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA).then(response => {
    // Doesn't have permission  
    if(response === false){
        requestCallPermission()
    }
   })
}

const onButtonPress = (phoneNumber) => {
  RNImmediatePhoneCall.immediatePhoneCall(phoneNumber)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: "row",
    alignItems: 'flex-start',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
  },

  callButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150
  },

  textStyle: {
    fontSize: 18,
  },
});

const requestCallPermission = async () => {
  console.log('Requesting')
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CALL_PHONE
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can call directly");
    } else {
      console.log("Did not get call permission");
    }
  } catch (err) {
    console.warn(err);
  }
};
