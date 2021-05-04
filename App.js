import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Swiper from "react-native-swiper";
// import AppLoading from "expo-app-loading";
import {
  useFonts,
  //Montserrat_400Regular,
  Montserrat_500Medium,
 // montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    paddingTop: 80,
    marginHorizontal: 30,
  },
  img: {
    alignSelf: "center",
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    height: h * 0.5,
    width: w * 0.9,
  },
  title: {
    fontFamily: "montserrat_600SemiBold",
    marginTop: 60,
    marginHorizontal: 10,
    fontSize: 32,
  },
  text: {
    color: "#767676",
    fontFamily: "Montserrat_500Medium",
    marginTop: 20,
    fontSize: 16,
    lineHeight: 25,
    marginLeft: 10,
  },
});

const App = () => {
  let [fontsLoaded] = useFonts({
  //   //Montserrat_400Regular,
    Montserrat_500Medium,
  //   montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {
  return (
      <Swiper
        buttonWrapperStyle={{
          backgroundColor: "transparent",
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
          left: 0,
          flex: 1,
          paddingHorizontal: 30,
          paddingVertical: 20,
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
        style={styles.wrapper}
        showsButtons={true}
        paginationStyle={{
          marginRight: w * 0.7,
          marginBottom: h * 0.02,
        }}
        activeDotColor="#7da013"
        dotColor="#998FA2"
        nextButton={
          <View
            style={{
              height: 60,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              width: 60,
              backgroundColor: "#7da013",
            }}
          >
            <AntDesign name="arrowright" size={22} color="#FFF" />
          </View>
        }
        prevButton={
          <View
            style={{
              height: 60,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              width: 60,
              backgroundColor: "#7da013",
              marginHorizontal: 20,
            }}
          >
            <AntDesign name="arrowleft" size={22} color="#FFF" />
          </View>
        }
      >
        <View style={styles.slide}>
          <Image source={require("./images/img1.png")} style={styles.img} />
          <Text style={styles.title}>The Goal is to...</Text>
          <Text style={styles.text}>
          To be successful, you have to use each day as an opportunity to improve, to be better, to get a little bit closer to your goals.
          </Text>
        </View>
        <View style={styles.slide}>
          <Image source={require("./images/img2.png")} style={styles.img} />
          <Text style={styles.title}>Of course you can 💪🏽 </Text>
          <Text style={styles.text}>
          It might sound like a lot of work—and with a busy schedule, next to impossible. 
          </Text>
        </View>

        <View style={styles.slide}>
          <Image source={require("./images/img3.png")} style={styles.img} />
          <Text style={styles.title}>Do Something...</Text>
          <Text style={styles.text}>
          But the best part is, the more you accomplish, t
          he more you’ll want to do, the higher you’ll want to reach.
          </Text>
        </View>
        <View style={styles.slide}>
          <Image source={require("./images/img4.png")} style={styles.img} />
          <Text style={styles.title}>Get it Done!</Text>
          <Text style={styles.text}>
          So as long as you have the hunger for success, you will always have the power within you to achieve it.
          </Text>
        </View>
      </Swiper>
  );
  // }
};

export default App;
