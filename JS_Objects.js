// Assignment: JavaScrip Objects 
// Objectives: Assess your familiarity with JavaSctript, iterating over arrays and objects.

// Challenge 1: Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohort. 


function printCohort(arr){
    for (var i = 0; i < arr.length; i++){
        console.log("Name: "+ arr[i].name + " , Cohort : " + arr[i].cohort)
    }
}
// pass in arr of "students" when calling the function. 
let students =[
    {name: "Mary", cohort: "June 2019" },
    {name: "Ben" , cohort: "June 2019" },
    {name: "Howard" , cohort: "June 2019"},
    {name: "Kasey", cohort: "May 2019"},
    {name: "Alex" , cohort: "May 2019" },
    {name: "Kevin", cohort: "May 2019" }

]; 

printCohort(students);

// Challenge 2 : Write a function that accepts an object of users divided into employees and managers, and 
//display the number of characters per employee/manager's name, as shown below, and logs the information to the console.

// const users ={
//     employees: [
//         {first_name: 'Miguel', last_name: 'Jones'},
//         {first_name: 'Ernie', last_name: 'Bertson'},
//         {first_name: 'Nora', last_name: 'Lu'},
//         {first_name: 'Sally', last_name: 'Barkyoumb'}
//     ]

//     managers: [
//         {first_name: "Susan" , last_name: "Chambers"},
//         {first_name: "Manuel" , last_name: "Rivera"}

//     ]
// };

// Challenge 2 Begin: 
function employeesManagers(obj){
    for(let segment in users){
        console.log(segment.toUpperCase());
        for(var i = 0; i < users[segment].length; i++){
            var charCount = users[segment][i].last_name.length + users[segment][i].first_name.length;
            console.log(i+1 + " - " + users[segment][i].last_name.toUpperCase() + ", " + users[segment][i].first_name.toUpperCase() + " - " + charCount)
        }
    }
}

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 employeesManagers(users); 

