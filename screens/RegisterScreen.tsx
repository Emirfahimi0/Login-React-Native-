import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect,useRef,useState } from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../components/AppTextInput";
import axios from "axios";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;


export const RegisterScreen: React.FC<Props> = ({ navigation: { navigate } }) => {

    const userRef = useRef();
    const errRef = useRef();




  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [pass_repass, set_repass] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [success, setSuccess] = useState(false);


 function _isRegister () {


    console.log("Hi "+email);

  var checkEmail = RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);
  if ((email.length==0) || (password.length==0) || (pass_repass.length==0)){
    alert("Required Field Is Missing!!!");

  }
  
  else if (!(checkEmail).test(email)){
    alert("invalid email!!!");
  }


  else if (password.length<8){
    alert("Minimum 08 characters required!!!");

          }
        else if (!((/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(password))){
    alert("Use atleast 0 1 special character!!!");
      }
          else if (((/[ ]/).test(password))){
    alert("Don't include space in password!!!");
    }
            else if(password !== pass_repass){
            alert("Password does not match!!!");
         }
  
  else{
    var InsertAPIURL = "http://10.0.2.2:80/SignIn/Register.php";   //API to render signup

    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    
    var Data ={
      Email: email,
      Password: password
    };

  // FETCH func ------------------------------------
  fetch(InsertAPIURL,{
      method:'POST',
      headers:headers,
      body: JSON.stringify(Data) //convert data to JSON
  })
  .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
  .then((response)=>{
    alert(response[0].Message);       // If data is in JSON => Display alert msg
    navigate("Login"); //Navigate to next screen if authentications are valid
  })
  .catch((error)=>{
      alert("Error Occured" + error);
      console.log("Error Occured" + error);
  })
  }

 }
  
  return (
    <SafeAreaView>
      <View
        style={{
          padding: Spacing * 2,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: FontSize.xLarge,
              color: Colors.primary,
              fontFamily: Font["poppins-bold"],
              marginVertical: Spacing * 3,
            }}
          >
            Create account
          </Text>
          <Text
            style={{
              fontFamily: Font["poppins-regular"],
              fontSize: FontSize.small,
              maxWidth: "80%",
              textAlign: "center",
            }}
          >
            Create an account so you can explore all the existing jobs
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <AppTextInput placeholder="Email" 
           onChangeText={email=>setemail(email)} 
           value={email}    />
          <AppTextInput placeholder="Password" 
          onChangeText={setpassword} 
          value={password} 
          secureTextEntry/>
          <AppTextInput placeholder="Confirm Password" 
          onChangeText={set_repass} 
          value={pass_repass}
          secureTextEntry
          />
        </View>

        <TouchableOpacity
        onPress={() =>{ 
          _isRegister();
          console.log('You tapped the button!');
        }}
          style={{
            padding: Spacing * 2,
            backgroundColor: Colors.primary,
            marginVertical: Spacing * 3,
            borderRadius: Spacing,
            shadowColor: Colors.primary,
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Sign up
          </Text>
          
        </TouchableOpacity>
        <TouchableOpacity
        // Api post 
          onPress={() =>{ 
           
           navigate("Login")
          }}
          style={{
            padding: Spacing,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.text,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Already have an account
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.primary,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Or continue with
          </Text>

          <View
            style={{
              marginTop: Spacing,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-google"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-apple"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-facebook"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;