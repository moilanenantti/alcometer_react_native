import { Text, TextInput, Pressable, ScrollView, Alert, Image, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState, useRef } from 'react';
import RadioButton from './RadioButton.js';
import styles from './Styles.js'; // Styles are defined as a separate file

export default function App() {

  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [hours, setHours] = useState(0)
  const [gender, setGender] = useState('male')
  const [alcoholLevel, setAlcoholLevel] = useState(0)
  const [resultColor, setResultColor] = useState("none")
  const [needlePosition, setNeedlePosition] = useState(styles.needle)

  const textInputRef = useRef()

  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ]

  const bottle = [
    {label: '1 bottle', value: 1},
    {label: '2 bottles', value: 2},
    {label: '3 bottles', value: 3},
    {label: '4 bottles', value: 4},
    {label: '5 bottles', value: 5},
    {label: '6 bottles', value: 6},
    {label: '7 bottles', value: 7},
    {label: '8 bottles', value: 8},
    {label: '9 bottles', value: 9},
    {label: '10 bottles', value: 10},
    {label: '11 bottles', value: 11},
    {label: '12 bottles', value: 12},
    {label: '13 bottles', value: 13},
    {label: '14 bottles', value: 14},
    {label: '15 bottles', value: 15},
  ]

  const hour = [
    {label: '1 hour', value: 1},
    {label: '2 hours', value: 2},
    {label: '3 hours', value: 3},
    {label: '4 hours', value: 4},
    {label: '5 hours', value: 5},
    {label: '6 hours', value: 6},
    {label: '7 hours', value: 7},
    {label: '8 hours', value: 8},
    {label: '9 hours', value: 9},
    {label: '10 hours', value: 10},
    {label: '11 hours', value: 11},
    {label: '12 hours', value: 12},
    {label: '13 hours', value: 13},
    {label: '14 hours', value: 14},
    {label: '15 hours', value: 15}
  ]

  const calculate = () => {
    if (weight <= 0){
      weightNotSetAlert()
    } else {
      let litres = bottles * 0.33
      let grams = litres * 8 * 4.5
      let burning = weight / 10
      let gramsLeft = grams - burning * hours
      let result = 0
  
      if (gender === 'male') {
        result = gramsLeft / (weight * 0.7)
      } else {
        result = gramsLeft / (weight * 0.6)
      }
  
      if (result < 0){
        result = 0
        setResultColor("forestgreen")
        setNeedlePosition(styles.needle)
      } else if (result < 0.5 ){
        setResultColor("forestgreen")
        setNeedlePosition(styles.needlegreen)
      } else if (1.2 > result){
        setResultColor("yellow")
        setNeedlePosition(styles.needleyellow)
      } else {
        setResultColor("red")
        setNeedlePosition(styles.needlered)
      }
      setAlcoholLevel(result)
    }    
  }

  const weightNotSetAlert = () =>
    Alert.alert(
      "Weight not set",
      "Please enter your weight (in kilograms)",
      [
        /*{
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },*/
        { text: "Set weight", onPress: () => textInputRef.current.focus(), }
      ]
    );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={styles.imagecontainer}>
          <Image
            style={styles.accelometer}
            source={require('./accelometer.png')}
          />
          <Image
            style={needlePosition}
            source={require('./needle.png')}
          />
        </View>
        <Text style={styles.heading}>ALCOMETER</Text>
        <Text style={styles.subheading}>Weight (kg)</Text>
        <TextInput
          style={styles.weightinput}
          ref={textInputRef}
          placeholder="Enter weight..."
          value={weight}
          onChangeText={text => setWeight(text)}
          keyboardType='numeric' 
          maxLength={4} />
        <Text style={styles.subheading}>Bottles</Text>
        <View style={styles.borderBottom}>
          <Picker
            selectedValue={bottles}
            onValueChange={(value, index) => setBottles(value)}
            mode="dropdown" // Android only
            style={styles.picker}
          >
            {
              bottle.map((bottle, index) => {
                return(
                  <Picker.Item key={index} label={bottle.label} value={bottle.value} />
              )})
            }
          </Picker>
        </View>
        <Text style={styles.subheading}>Time</Text>
        <View style={styles.borderBottom}>
          <Picker
            selectedValue={hours}
            onValueChange={(value, index) => setHours(value)}
            mode="dropdown" // Android only
            style={styles.picker}
          >
            {
              hour.map((hour, index) => {
                return(
                  <Picker.Item key={index} label={hour.label} value={hour.value} />
              )})
            }
          </Picker>
        </View>
        <Text style={styles.subheading}>Gender</Text>
        <RadioButton props={genders} returnValue={setGender} />
        <Text style={[styles.result, { backgroundColor: resultColor}]}>{alcoholLevel.toFixed(2)}</Text>
        <Pressable style={styles.calculateBtn} onPress={calculate}>
          <Text style={styles.calculateBtnText}>Calculate</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
