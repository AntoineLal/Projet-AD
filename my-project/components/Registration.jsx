import { useState } from "react";
import { Text, View, ScrollView } from "react-native"; // Only keep these for components that aren't HTML tags
import { NavigationContainer } from "@react-navigation/native";
import './registration.css';  // Importing the updated CSS file

export default function Registration({ navigation }) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <div className="container">
        <Text className="heading">
            <h1>Register your info</h1>
          
        </Text>

        <label className="label">Name:</label>
        <input
          type="text"
          className="input"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="label">Gender:</label>
        <div className="gender-container">
          {['Male', 'Female', 'Other'].map((option) => (
            <div
              key={option}
              onClick={() => setGender(option)}
              className={`gender-option ${gender === option ? 'selected-gender-option' : ''}`}
            >
              <Text className="gender-text">{option}</Text>
            </div>
          ))}
        </div>

        <label className="label">Age:</label>
        <input
          type="number"
          className="input"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label className="label">Height (cm):</label>
        <input
          type="number"
          className="input"
          placeholder="Enter your height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <label className="label">Weight (kg):</label>
        <input
          type="number"
          className="input"
          placeholder="Enter your weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <div className="submit-container">
          <button
            className="button"
            onClick={() => {
              navigation.navigate("Result", { name, gender, age, height, weight });
            }}
          >
            <span className="submit-text">Submit</span>
          </button>
        </div>
      </div>
    </ScrollView>
  );
}
