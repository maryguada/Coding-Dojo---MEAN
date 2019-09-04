
// --   Practice reading JavaScript the same way that the interpreter reads it. 

// -- 1.  NUMBER ONE  > prints out "hello"
console.log("hello"); 
var hello = "world"; 


// -- 2. NUMBER TWO > prits out "magnet"
var needle = "haystack"; 
test(); 
function test(){
    var needle = "magnet"; 
    console.log(needle);
}


//-- 3.  NUMBER THREE  > prints out "super cool"
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);


//-- 4. NUMBER FOUR  > prints out "food" and "half-chicken"
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}


// -- 5. NUMBER FIVE  > prints out "chicken" and "chicken". "mean() is not a function"
mean();
console.log(food); 
var mean = function() {
	food = "chicken";
	console.log(food); 
	var food = "fish";
	console.log(food); 
}
console.log(food);
// it doesn't console log "fish" b/c we are not calling the function



// -- 6.  NUMBER SIX  > prints out "rock" on line 59, "r&b" on line 61 and "disco" on line 63
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre); 
}
console.log(genre); // this is a global scope variable, it will print "disco". 



// -- 7.  NUMBER SEVEN  > prints out "San Jose" on line 68 & 76, "seattle" line 72, and "burbank" line 74
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);


// -- 8.  NUMBER EIGHT  > prints out "dojo ={name: Chicago, students: 65, hiring: true}"
//                      > prints out "dojo = close for now"
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;

}


// END OF ASSIGNMENT 













