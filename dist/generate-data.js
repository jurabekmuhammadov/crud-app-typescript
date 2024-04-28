"use strict";
function generateRandomId() {
    return Math.floor(Math.random() * 1000);
}
function generateRandomDateOfBirth() {
    const year = Math.floor(Math.random() * (2004 - 1940)) + 1940;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    const formattedMonth = month < 10 ? '0' + month : '' + month;
    const formattedDay = day < 10 ? '0' + day : '' + day;
    return `${year}-${formattedMonth}-${formattedDay}`;
}
function generateRandomData(id) {
    const firstNames = ["John", "Emma", "Michael", "Sophia", "William", "Olivia", "James", "Amelia", "Benjamin", "Isabella"];
    const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"];
    const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];
    const positions = ["Frontend", "Backend", "UI/UIX", "Flutter", "Motion Design",];
    const emails = [
        "user1@example.com",
        "user2@example.com",
        "user3@example.com",
        "user4@example.com",
        "user5@example.com",
        "user6@example.com",
        "user7@example.com",
        "user8@example.com",
        "user9@example.com",
        "user10@example.com",
        "user11@example.com",
        "user12@example.com",
        "user13@example.com",
        "user14@example.com",
        "user15@example.com",
        "user16@example.com",
        "user17@example.com",
        "user18@example.com",
        "user19@example.com",
        "user20@example.com"
    ];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomPosition = positions[Math.floor(Math.random() * positions.length)];
    const randomEmail = emails[Math.floor(Math.random() * emails.length)];
    const randomBirthDate = generateRandomDateOfBirth();
    const isMarried = Math.random() < 0.5;
    return {
        id: id,
        picture: `../img/pic1.png`,
        fName: randomFirstName,
        lName: randomLastName,
        birthDate: randomBirthDate,
        address: randomCity,
        position: randomPosition,
        email: randomEmail,
        salary: (Math.floor(Math.random() * 50000) + 50000).toString(),
        isMarried: isMarried,
    };
}
const hasGeneratedData = localStorage.getItem("users") !== null;
if (!hasGeneratedData) {
    const generatedData = [];
    for (let i = 1; i <= 20; i++) {
        generatedData.push(generateRandomData(i));
    }
    localStorage.setItem("users", JSON.stringify(generatedData));
}
