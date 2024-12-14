class Storage {
  static getCalorieLimit(defaultLimit = 2000) {
    if (localStorage.getItem('calorieLimit') === null) {
      localStorage.setItem('calorieLimit', defaultLimit);
      return defaultLimit;
    }

    return +localStorage.getItem('calorieLimit');
  }

  static setCalorieLimit(calorieLimit) {
    localStorage.setItem('calorieLimit', calorieLimit);
  }

  static getTotalCalorie(defaultCalories = 0) {
    if (localStorage.getItem('totalCalories') === null) {
      localStorage.setItem('totalCalories', defaultCalories);
      return defaultCalories;
    }
    return +localStorage.getItem('totalCalories');
  }

  static updateTotalCalories(calories) {
    localStorage.setItem('totalCalories', calories);
  }

  static getMeals() {
    let meals;

    if (localStorage.getItem('meals') === null) {
      meals = [];
    } else {
      meals = JSON.parse(localStorage.getItem('meals'));
    }
    return meals;
  }

  static saveMeal(meal) {
    const meals = Storage.getMeals();
    meals.push(meal);
    localStorage.setItem('meals', JSON.stringify(meals));
  }

  static getWorkouts() {
    let workout;

    if (localStorage.getItem('workouts') === null) {
      workout = [];
    } else {
      workout = JSON.parse(localStorage.getItem('workouts'));
    }
    return workout;
  }

  static saveWorkout(workout) {
    const workouts = Storage.getWorkouts();
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }

  static removeMeal(id) {
    const meals = Storage.getMeals();

    // Filter out the meal with the specified ID
    const updatedMeals = meals.filter((meal) => meal.id !== id);

    // Save the updated array back to localStorage
    localStorage.setItem('meals', JSON.stringify(updatedMeals));
  }

  static removeWorkout(id) {
    const workouts = Storage.getWorkouts();

    // Filter out the workout with the specified ID
    const updatedWorkouts = workouts.filter((workout) => workout.id !== id);

    // Save the updated array back to localStorage
    localStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
  }

  static clearAll() {
    localStorage.removeItem('totalCalories');
    localStorage.removeItem('meals');
    localStorage.removeItem('workouts');
  }
}

export default Storage;
