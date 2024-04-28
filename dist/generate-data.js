"use strict";
function generateRandomId() {
    return Math.floor(Math.random() * 1000);
}
function generateRandomData(id) {
    const firstNames = ["John", "Emma", "Michael", "Sophia", "William", "Olivia", "James", "Amelia", "Benjamin", "Isabella"];
    const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"];
    const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];
    const positions = ["Engineer", "Manager", "Designer", "Developer", "Analyst", "Consultant", "Specialist", "Coordinator", "Administrator", "Architect"];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomPosition = positions[Math.floor(Math.random() * positions.length)];
    return {
        id: id,
        picture: `../img/pic1.png`,
        fName: randomFirstName,
        lName: randomLastName,
        ageVal: (Math.floor(Math.random() * 20) + 18).toString(),
        cityVal: randomCity,
        positionVal: randomPosition,
        salaryVal: (Math.floor(Math.random() * 50000) + 50000).toString(),
        sDateVal: "1111-12-18",
        emailVal: `${randomFirstName.toLowerCase()}.${randomLastName.toLowerCase()}@example.com`,
        phoneVal: ("0000000000" + Math.floor(Math.random() * 10000000000)).slice(-10),
    };
}
const hasGeneratedData = localStorage.getItem("userProfile") !== null;
if (!hasGeneratedData) {
    const generatedData = [];
    for (let i = 1; i <= 20; i++) {
        generatedData.push(generateRandomData(i));
    }
    localStorage.setItem("userProfile", JSON.stringify(generatedData));
}
