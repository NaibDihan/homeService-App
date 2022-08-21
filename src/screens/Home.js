import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";


const Home = (props) => {
    const description="One-stop solution for your services. Order any service, anytime.";
    return (
      <View style={styles.mainContainer}>
        <View style={styles.homeTop}>
          <Text style={styles.mainHeader}>Welcome to</Text>
          <Text
            style={[
              styles.mainHeader,
              {
                fontSize: 33,
                color: "#4c5dab",
                marginTop: 0,
              },
            ]}>
            {/* {props.appName} */}
          </Text>
          <Image
            style={styles.headerImage}
            resizeMode="contain"
            source={require("../../assets/3.png")}>
            </Image>
  
          
  
          <Text style={styles.paraStyle}>{description} </Text>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    mainContainer: {
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      backgroundColor: "#fff",
      textAlign: "center",
    },
  
    homeTop: {
      // height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 10,
    },
    
    headerImage: {
      height: undefined,
      width: "100%",
      aspectRatio: 1,
      display: "flex",
      alignItems: "stretch",
      
      // borderRadius: 80,
    },
  
    mainHeader: {
      marginTop: 150,
      fontSize: 30,
      color: "#344055",
      textTransform: "uppercase",
      fontFamily: "Nunito_600SemiBold",
    },
  
    paraStyle: {
      textAlign: "center",
      fontSize: 19,
      color: "#7d7d7d",
      // marginTop: 30,
      paddingBottom: 50,
      lineHeight: 26,
      fontFamily: "JosefinSans_400Regular",
      fontWeight:700,
    },
  
  });

export default Home;

