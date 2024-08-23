/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const initialDistance = 0; // distance (km)
const remainingFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

// Function to calculate new velocity with error handling
const calcNewVelocity = (velocity, acceleration, time) => {
    if (typeof velocity !== 'number' || typeof acceleration !== 'number' || typeof time !== 'number') {
        throw new Error('Invalid input: velocity, acceleration, and time must be numbers.');
    }
    return velocity + (acceleration * time);
}

// Calculations
const newDistance = Math.round(initialDistance + (velocity * timeInSeconds / 3600)); // calculates new distance in km and rounds to nearest whole number
const remainingFuelAfterBurn = Math.round(remainingFuel - (fuelBurnRate * timeInSeconds)); // calculates remaining fuel and rounds to nearest whole number
const newVelocity = Math.round(calcNewVelocity(velocity * 1000 / 3600, acceleration, timeInSeconds) * 3600 / 1000); // converts velocity to m/s for calculation and back to km/h, then rounds

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelAfterBurn} kg`);