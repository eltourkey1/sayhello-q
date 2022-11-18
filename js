let myarry = ["mohamed", "ali", "joley", "Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (let i = 0; i < myarry.length; i++) {
    if (myarry[i][0] === "j" || myarry[i][0] === "J") {
        console.log(`hello ${myarry[i]}`);
    } else {
        console.log(`goodby ${myarry[i]}`);
 
    }
};
