import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Alert,
  Modal,
} from "react-native";
import MIcon from "react-native-vector-icons/MaterialIcons";

const ScrambleWordGame = () => {
  const Data = [
    "java",
    "c++",
    "react",
    "html",
    "css",
    "python",
    "php",
    "swift",
    "ruby",
    "c#",
    "sql",
    "javascript",
    "kotlin",
    "spark",
    "cobol",
  ];

  const [play, setPlay] = useState(true);
  const [ranWord, setRanWord] = useState("");
  const [scrambleWord, setScrambleWord] = useState("");
  const [guessVal, setGuessVal] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [timer, setTimer] = useState(0);
  const [QTime, setQTime] = useState(false);
  const [count, setCount] = useState(1);
  const [ATrue, setATrue] = useState(0);
  const [AFalse, setAFalse] = useState(0);
  const [showResultModal, setShowResultModal] = useState(false);

  // START GAME BUTTON  ***********
  const StartGame = () => {
    const ranNumGen = Math.floor(Math.random() * Data.length);
    const ranWordGen = Data[ranNumGen];
    setRanWord(ranWordGen);
    let scrambleW = ranWordGen.split("");
    for (let i = scrambleW.length; i > 0; i--) {
      let temp = scrambleW[i];
      let j = Math.floor(Math.random() * (i + 1));
      scrambleW[i] = scrambleW[j];
      scrambleW[j] = temp;
    }
    setScrambleWord(scrambleW);
  };

  // START GAME BUTTON END  ***********
  // CHECK THE WORD

  const GuessWord = () => {
    if (ranWord == guessVal) {
      setShowModal(true);
      setAlertText("Your Answer is Right");
      setCount(count + 1);
      setATrue(ATrue + 1);
      setGuessVal("");
      // setTimer(0);
      // setQTime(false);
    } else {
      setShowModal(true);
      setAlertText(`your Answer is wrong, Answer is  ${ranWord}`);
      setCount(count + 1);
      setAFalse(AFalse + 1);
      setGuessVal("");
      // setTimer(0);
      // setQTime(false);
    }
  };
  // CHECK THE WORD END
  const modalData = () => {
    if (count < 6) {
      setShowModal(false), StartGame();
    } else {
      setShowResultModal(true);
      // setTimer(0);
      // setQTime(false);
    }
  };
  const exitGame = () => {
    setShowResultModal(false);
    setPlay(!play);
    setCount(1);
    setATrue(0);
    setAFalse(0);
    // setTimer(0);
    // setQTime(false);
  };

  // // TIMER
  // const gameTimer = setTimeout(() => {
  //   if (QTime) {
  //     setTimer(timer + 1);
  //     if (timer == 6) {
  //       GuessWord();
  //       setTimer(0);
  //       setQTime(false);
  //     }
  //   } else {
  //     setTimer(0);
  //     setQTime(false);
  //   }
  // }, 1000);
  // // TIMER END

  return (
    <View style={styles.container}>
      <StatusBar barStyle="white-content" backgroundColor="rgba(0,0,83,0.9)" />
      {play ? (
        <View style={styles.container}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>SCRAMBLE WORD</Text>
          </View>
          <View style={styles.logo}>
            <Text style={styles.text}>Total Questions 10</Text>
            <Text style={styles.text}>Per Question Time 10 Seconds</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setPlay(false);
              setQTime(true);
              StartGame();
            }}
            style={styles.btnStart}
          >
            <Text style={styles.text}>START GAME</Text>
            <MIcon name="navigate-next" size={30} color="#ffaccc" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.gameArea}>
          {/* <Text style={styles.text}>{timer}</Text> */}
          <View style={styles.guessWordArea}>
            <Text style={styles.guessText}>{scrambleWord}</Text>
            <TextInput
              value={guessVal}
              placeholder="Type here"
              style={styles.input}
              onChangeText={(val) => {
                setGuessVal(val);
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              GuessWord();
            }}
            style={[styles.btnStart, { bottom: 80 }]}
          >
            <Text style={[styles.text, { marginRight: 0 }]}>GUESS</Text>
          </TouchableOpacity>

          <Modal
            visible={showModal}
            transparent={true}
            animationType="slide"
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerModal}>
                <Text style={styles.modalText}>{alertText}</Text>
                <TouchableOpacity
                  onPress={() => {
                    modalData(), setQTime(true);
                  }}
                  style={styles.btnBackground}
                >
                  <Text style={styles.modalBtnText}>Next</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          {/* Modal for final result */}
          <Modal
            visible={showResultModal}
            transparent={true}
            animationType="slide"
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerModal}>
                <Text style={styles.modalText}>Total Question 5</Text>
                <Text style={styles.modalText}>True {ATrue}</Text>
                <Text style={styles.modalText}>false {AFalse}</Text>
                <TouchableOpacity
                  onPress={() => {
                    exitGame();
                  }}
                  style={styles.btnBackground}
                >
                  <Text style={styles.modalBtnText}>Exit Game</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          {/* Modal for final result end */}
        </View>
      )}
    </View>
  );
};

export default ScrambleWordGame;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(20,20,83,0.9)",
  },
  logo: {
    marginTop: 120,
    alignItems: "center",
  },
  logoText: {
    fontSize: 60,
    letterSpacing: 3,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "rgba(1, 235, 25, 0.75)",
    textShadowOffset: { width: -4, height: 1 },
    textShadowRadius: 7,
  },
  btnStart: {
    borderWidth: 0.9,
    borderColor: "rgba(220,220,23,0.9)",
    width: 225,
    height: 55,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    bottom: 80,
    left: 110,
    position: "absolute",
    flexDirection: "row",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    letterSpacing: 2,
    marginRight: 10,
  },
  // *********** GAME AREA **************
  gameArea: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(20,20,83,0.9)",
  },
  guessWordArea: { marginTop: 130 },
  input: {
    color: "#fff",
    fontSize: 20,
    borderBottomWidth: 0.6,
    borderBottomColor: "#1222f0",
    width: 230,
    textAlign: "center",
    marginVertical: 40,
    padding: 10,
  },
  guessText: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#0faaaa",
    letterSpacing: 2,
  },
  // Modal
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerModal: {
    top: -20,
    width: "70%",
    height: "30%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  modalText: {
    fontSize: 24,
    textAlign: "center",
  },
  modalBtnText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  btnBackground: {
    bottom: 30,
    position: "absolute",
    backgroundColor: "#005500",
    borderRadius: 20,
    padding: 10,
    width: "50%",
    elevation: 2,
  },
  // Modal end
});
