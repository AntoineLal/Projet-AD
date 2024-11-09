import React from "react";
import { View, Text } from "react-native";

export default function Result({ route }) {
  const { name, gender, age, height, weight } = route.params;

  // Calcul du besoin calorique de base (BMR) pour calculer les calories
  const calculateCalories = () => {
    let bmr;
    if (gender === 'Male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'Female') {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    } else {
      bmr = (88.362 + 447.593) / 2 + ((13.397 + 9.247) / 2 * weight) +
            ((4.799 + 3.098) / 2 * height) - ((5.677 + 4.330) / 2 * age);
    }
    return bmr;
  };

  const dailyCalories = calculateCalories();
  const mealCalories = dailyCalories / 4;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Results</Text>
      <Text>Name: {name}</Text>
      <Text>Gender: {gender}</Text>
      <Text>Age: {age}</Text>
      <Text>Height: {height} cm</Text>
      <Text>Weight: {weight} kg</Text>
      <Text>Daily Calorie Needs: {Math.round(dailyCalories)} kcal</Text>
      <Text>Calories per Meal (4 meals): {Math.round(mealCalories)} kcal</Text>
    </View>
  );
}
