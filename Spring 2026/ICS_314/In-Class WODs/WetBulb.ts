/* eslint-disable */ 
function estimateTw(temp: number, relativeHumid: number): number {
  const wetTemp = temp * Math.atan(0.151977 * (relativeHumid + 8.313659) ** 0.5)
    + Math.atan(temp + relativeHumid)
    - Math.atan(relativeHumid - 1.676331)
    + 0.00391838
      * relativeHumid ** 1.5
      * Math.atan(0.023101 * relativeHumid)
    - 4.686035;
  // in °C
  return wetTemp;
}

function wbgt(temp: number, relativeHumid: number): string {
  let wetBulbTemp: number;
  if (relativeHumid < 0 || relativeHumid > 100) {
    return 'Please enter a humidity between 0% and 100%.';
  }
  wetBulbTemp = estimateTw(temp, relativeHumid);
  let warning: string;
  let riskLevel: string;
  let hike: number;
  let rest: number;
  let hydrate: string;
  if (wetBulbTemp <= 24.9) {
    riskLevel = 'None';
    hike = 60;
    rest = 15;
    hydrate = '1/3';
  } else if (wetBulbTemp <= 27.7) {
    riskLevel = 'Low';
    hike = 60;
    rest = 15;
    hydrate = '3/4';
  } else if (wetBulbTemp <= 29.4) {
    riskLevel = 'Moderate';
    hike = 40;
    rest = 20;
    hydrate = '1';
  } else {
    riskLevel = 'High';
    hike = 30;
    rest = 30;
    hydrate = '1';
  }

  warning = `WBGT: ${wetBulbTemp}°C Risk Level: ${riskLevel} Recommendation: Hike ${hike}, rest ${rest}, hydrate at least ${hydrate} qt per hour.`;
  if (wetBulbTemp > 31.6) {
    warning = `WBGT: ${wetBulbTemp}°C Risk Level: Extreme Recommendation: Exercise is forbidden. Very high risk for heat casualties.`;
  }

  return warning;
}

console.log(wbgt(30, 50)); // should return Wet bulb temp of 22.297 which is Low
console.log(wbgt(40, 50)); // should return Wet bulb temp of 30.894 which is High
console.log(wbgt(35, 50)); // should return Wet bulb temp of 26.594 which is Medium
console.log(wbgt(45, 50)); // should return Wet bulb temp of 35.19 which is Extreme
