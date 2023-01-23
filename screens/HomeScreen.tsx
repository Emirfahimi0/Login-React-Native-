import {
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    View,
    Dimensions,
  } from "react-native";
  import React, { useEffect,useState } from "react";
  import Spacing from "../constants/Spacing";
  import FontSize from "../constants/FontSize";
  import Colors from "../constants/Colors";
  import Font from "../constants/Font";
  import { Ionicons } from "@expo/vector-icons";
  import { NativeStackScreenProps } from "@react-navigation/native-stack";
  import { RootStackParamList } from "../types";
import { StatusBar } from "expo-status-bar";
  const { height } = Dimensions.get("window");
  
  type Props = NativeStackScreenProps<RootStackParamList, "Home">;
  
  const HomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    

    const [value, setValue] = useState<any>([])
   
    

      useEffect(() => {
        const getData = async() => {
          const res: any = await fetch("http://10.0.2.2:80/SignIn/User.php", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              
            },
          });
          const data: any = await res.json();
          setValue(data);
          console.log(value);
          
         }
        getData();
          },[]);

///Render
    return (
        <SafeAreaView>
        <View>
        <StatusBar  backgroundColor="#212121" />
        <ImageBackground
          style={{
            height: height / 3.5,
          }}
          resizeMode="contain"
          source={require("../assets/images/Ricky.png")}
        />
        
          <View
          style={{
            paddingHorizontal: Spacing * 3,
            paddingTop: Spacing,
          }}
        >

      <View 
      style={
        {justifyContent: 'center', alignItems: 'center'}
        }>
             <Image
            source={
             require('../assets/images/User.png')
            }
            style={{
              width: 100,
              height: 100,
              borderRadius: 100 / 2,
              borderWidth: 3,
              borderColor: '#FFFFFF',
              position: 'absolute',
              zIndex: 2,
            }}
          />
      
       
        </View>
        <View style={{marginTop: 60}}>

        {
        value.map((user: { first_Name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; last_Name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; })=>( 
                       <Text
                       style={{
                         fontFamily: Font["poppins-semiBold"],
                         fontSize: FontSize.large,
                         textAlign: 'center',
                         color:Colors.text,
                       }}>
                        {user.first_Name} {user.last_Name}
                     </Text>
                ))} 
       
        {
        value.map((user: { Bio: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; })=>( 
          <Text 
          
          style={{ 
            fontFamily: Font["poppins-bold"],
          fontSize: FontSize.small,
          textAlign: 'center',
          color: Colors.darkText}}>
            {user.Bio}
          </Text>
                ))} 

          <View style={{marginLeft: 80}}>
          <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                }}>
              <Ionicons name="md-transgender-sharp"  color={Colors.text}
                size={Spacing * 2} />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
              {
              value.map((user: { Gender: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; })=>( 

                <Text  
                style={{ 
            fontFamily: Font["poppins-regular"],
            fontSize: FontSize.small,
          color: Colors.text}}>{user.Gender}</Text>
          ))} 

              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                }}>
              <Ionicons name="phone-portrait-outline"  color={Colors.text}
                size={Spacing * 2} />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
              {
              value.map((user: { number: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; })=>( 

                <Text  
                style={{ 
            fontFamily: Font["poppins-regular"],
            fontSize: FontSize.small,
          color: Colors.text}}>{user.number}</Text>
          ))} 
              </View>
            </View>
       
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                }}>
               <Ionicons name="ios-chevron-forward-circle-outline"  color={Colors.text}
                size={Spacing * 2} />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
              {
              value.map((user: { Age: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; })=>( 

                <Text  
                style={{ 
            fontFamily: Font["poppins-regular"],
            fontSize: FontSize.small,
          color: Colors.text}}>{user.Age}</Text>
          ))} 
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                }}>
                <Ionicons name="mail-open-sharp"  color={Colors.text}
                size={Spacing * 2} />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
              {
              value.map((user: { email: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; })=>( 

                <Text  
                style={{ 
            fontFamily: Font["poppins-regular"],
            fontSize: FontSize.small,
          color: Colors.text}}>{user.email}</Text>
          ))} 
              </View>
              
            </View>
          </View>
          <View
            style={{flexDirection: 'row', marginTop: 40, marginHorizontal: 30}}>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Ionicons name="logo-facebook" size={25} color={Colors.darkText} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Ionicons name="logo-instagram" size={25} color={Colors.darkText} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Ionicons name="logo-github" size={25} color={Colors.active} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Ionicons name="logo-twitter" size={25} color={Colors.darkText} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Ionicons name="logo-linkedin" size={25} color={Colors.darkText} />
            </TouchableOpacity>
          </View>
        </View>
    

    
        </View>
       
        <View
          style={{
            paddingHorizontal: Spacing * 5,
            paddingTop: Spacing * 6,
            flexDirection: "row",
            justifyContent:"center"
          }}
        >
          <TouchableOpacity
            onPress={() => navigate("Login")}
            style={{
              backgroundColor: Colors.borderWithOpacity,
              paddingVertical: Spacing * 1.5,
              paddingHorizontal: Spacing * 1.5,
              width: "50%",
              borderRadius: Spacing,
              shadowColor: Colors.onPrimary,
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
                fontSize: FontSize.medium,
                textAlign: "center",
              }}
            >
              Log Out
            </Text>
          </TouchableOpacity>
          
        </View>
        </View>
        </SafeAreaView>
      );

  };
  export default HomeScreen;