const staffList = [     
    { name: "Neha Sharma", years: 32, city: "Chennai" },     
    { name: "Rohan Mehta", years: 38, city: "Hyderabad" },     
    { name: "Ayesha Khan", years: 25, city: "Pune" },     
    { name: "Vikram Singh", years: 29, city: "Delhi" },     
    { name: "Anjali Desai", years: 35, city: "Ahmedabad" },     
    { name: "Kunal Joshi", years: 27, city: "Kolkata" },     
    { name: "Meera Pillai", years: 30, city: "Chandigarh" },     
    { name: "Zahid Ali", years: 23, city: "Delhi" },     
    { name: "Ritika Sen", years: 31, city: "Pune" },     
    { name: "Armaan Kapoor", years: 26, city: "Noida" } 
];

const enrichedStaff = staffList.map(person => ({ 
    ...person, 
    seniorStatus: person.years > 30 
}));

console.log("Staff with Senior Status Flag:", enrichedStaff);

const bigCityStaff = staffList.filter(person => 
    person.city === "Delhi" || person.city === "Noida" 
);

console.log("Staff from Delhi or Noida:", bigCityStaff);

const combinedAge = staffList.reduce((total, person) => total + person.years, 0);

console.log("Combined Age of Staff Members:", combinedAge);
