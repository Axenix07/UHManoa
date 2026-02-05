//https://courses.ics.hawaii.edu/ics314s26/morea/typescript-1/wod-wind-chill-c1b2.html
function windchill(temp: number, wind: number): string {
  let windchill: number;
  let warning: string;
  let message: string;
  if (wind < 3) {
    if (temp < 40) {
      return "The windspeed is to low to be applicable, but the temperature is low enough that there is extreme danger of frostbite possible on exposed skin within 5 minutes.";
    }
    return "The windspeed is to low to be applicable";
  }

  windchill =
    35.74 +
    0.625 * temp -
    35.75 * (wind ^ 0.16) +
    0.4275 * temp * (wind ^ 0.16);

  if (windchill <= -48) {
    warning =
      "Extreme danger of frostbite possible on exposed skin within 5 minutes.";
  } else if (windchill <= -32) {
    warning =
      "Very high danger of frostbite possible on exposed skin within 10 minutes";
  } else if (windchill < -17) {
    warning =
      "High danger of frostbite possible on exposed skin within 30 minutes";
  } else if (windchill <= 25) {
    warning =
      "Moderate danger of frostbite possible on exposed skin over 2 hours.";
  } else {
    warning = "None";
  }
  return `Windchill ${windchill}°F: ${warning}`;
}
