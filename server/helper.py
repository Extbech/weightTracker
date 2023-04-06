from datetime import date, timedelta

def Calculate_tdee(weight: float, height: float, age: int, sex: str, lifestyle: int) -> float:
    """
    All numbers static numbers and multipliers are found here: https://steelfitusa.com/blogs/health-and-wellness/calculate-tdee
    The different lifestyle presets represents in following order:
    1. Sedentary (little to no exercise + work a desk job) = 1.2
    2. Lightly Active (light exercise 1-3 days / week) = 1.375
    3. Moderately Active (moderate exercise 3-5 days / week) = 1.55
    4. Very Active (heavy exercise 6-7 days / week) = 1.725
    5. Extremely Active (very heavy exercise, hard labor job, training 2x / day) = 1.9
    """
    lifestyle_multiplier_presets = {
        1: 1.2,
        2: 1.375,
        3: 1.55,
        4: 1.725,
        5: 1.9 
    }
    if sex == "F":
        # Basic Metabolic Rate for females
        bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
        # Total Daily Energy Expenditure
        tdee = bmr * lifestyle_multiplier_presets[lifestyle]
        return tdee
    if sex == "M":
        # Basic Metabolic Rate for females
        bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age)
        # Total Daily Energy Expenditure
        tdee = bmr * lifestyle_multiplier_presets[lifestyle]
        return tdee
    else:
        return - 1.0

def Calculate_fat_loss(weight: float, calories_burned: float) -> float:
    # 7,700 calories to burn 1 kg of fat.
    weight_lost = calories_burned / 7700
    new_weight = weight - weight_lost
    return new_weight

def Calculate_Maximum_weight_loss(days: int, weight: float, height: float, age: int, sex: str, lifestyle: int, name:str) -> list:
    weight_loss_list = []
    for i in range(days):
        tdee = Calculate_tdee(weight, height, age, sex, lifestyle)
        weight = Calculate_fat_loss(weight, tdee)
        weight_loss_list.append({
            "name": name,
            "timestamp": date.today() + timedelta(days=i+1),
            "weight": round(weight, 2)
        })
    return weight_loss_list

def Calculate_kcal_deficit(days: int, weight: float, kcal_deficit :float, name:str) -> list:
    weight_loss_list = []
    for i in range(days):
        weight = Calculate_fat_loss(weight, kcal_deficit)
        weight_loss_list.append({
            "name": name,
            "timestamp": date.today() + timedelta(days=i+1),
            "weight": round(weight, 2)
        })
    return weight_loss_list
if __name__ == "__main__":
    ## Outdated, function now returns dict instead of wight: float.
    lifestyle = 5
    days = 34
    benji_starting_weight = 82
    mailin_starting_weight = 114
    final_weight_benji = Calculate_Maximum_weight_loss(days, benji_starting_weight, 180, 25, "M", lifestyle)
    final_weight_mailin = Calculate_Maximum_weight_loss(days, mailin_starting_weight, 178, 24, "F", lifestyle)
    print(f"Your Weight after {days} days of maximum fatloss would be: {round(final_weight_benji, 2)} kg from {benji_starting_weight} kg, thats -{round(benji_starting_weight-final_weight_benji, 2)} kg")
    print(f"Your Weight after {days} days of maximum fatloss would be: {round(final_weight_mailin, 2)} kg from {mailin_starting_weight} kg, thats -{round(mailin_starting_weight-final_weight_mailin, 2)} kg")