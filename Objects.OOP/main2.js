const car = {
    manufacturer: "volkswagen",
    model: "golf",
    productionYear: "1989",
    averageSpeed: 64
}
function showCarInfo() {
    console.log(`${car.manufacturer}`);
    console.log(`${car.model}`);
    console.log(`${car.productionYear}`);
    console.log(`${car.averageSpeed} km/h`);
}
function distanceTime(distance) {
    let hours = distance / car.averageSpeed;
    let counter = 1;
    for (let i = 0; i < distance / car.averageSpeed; i++) {
        counter++;
        if (counter == 4) {
            hours++;
            counter = 1;
        }
    }
    console.log(Math.floor(hours));
}
showCarInfo();
distanceTime(300);

