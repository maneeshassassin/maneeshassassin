
const clock = new Date();
const year = clock.getFullYear();
const hour = clock.getHours();
const minutes = clock.getMinutes();
const scnd = clock.getSeconds();

document.getElementById("clock").innerHTML= hour +":"+minutes+":"+scnd;

function Person (first,last,age,color){
        this.firstName=first,
        this.lastname=last,
        this.myage=age,
        this.mycolor=color              
};
Person.prototype.language = "Hindi";
Person.prototype.details = function(){
    return this.firstName + " " + this.myage;
}

let biodata = new Person("maneesh","kumar",26,"white");
let bioData = new Person("sonu","sharma",29,"white");
console.log(biodata.details());

let set = new Set();
set.add("maneesh");
set.add("sonu");
set.add("Ravi");
console.log(set);
set.forEach((value)=>{
        console.log(value);
});

let map = new Map();
map.set("firstName","surender");
map.set("dob",1996);
map.set("sate","rajasthan");
console.log(map);

map.forEach((value,index)=>{
    console.log(index+":"+value);
})