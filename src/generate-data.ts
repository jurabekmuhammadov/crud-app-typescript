function generateRandomId(): number {
    return Math.floor(Math.random() * 1000);
}

function generateRandomData(id: number): any {
    const firstNames: string[] = ["John", "Emma", "Michael", "Sophia", "William", "Olivia", "James", "Amelia", "Benjamin", "Isabella"];
    const lastNames: string[] = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"];
    const cities: string[] = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];
    const positions: string[] = ["Engineer", "Manager", "Designer", "Developer", "Analyst", "Consultant", "Specialist", "Coordinator", "Administrator", "Architect"];

    const randomFirstName: string = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName: string = lastNames[Math.floor(Math.random() * lastNames.length)];
    const randomCity: string = cities[Math.floor(Math.random() * cities.length)];
    const randomPosition: string = positions[Math.floor(Math.random() * positions.length)];

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

const hasGeneratedData: boolean = localStorage.getItem("userProfile") !== null;

if (!hasGeneratedData) {
    const generatedData: any[] = [];
    for (let i: number = 1; i <= 20; i++) {
        generatedData.push(generateRandomData(i));
    }

    localStorage.setItem("userProfile", JSON.stringify(generatedData));
}