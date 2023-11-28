import { getDistance } from "geolib";
const getPosition = function () {
  return new Promise(function (resolved, reject) {
    navigator.geolocation.getCurrentPosition(resolved, reject);
  });
};
export const distanceCalculator = async (position) => {
  try {
    const pos = await getPosition();
    const { latitude, longitude } = pos.coords;
    const distance = getDistance(
      { latitude, longitude },
      {
        latitude: position.latitude,
        longitude: position.longitude,
      }
    );
    console.log(distance);
    return distance;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};
