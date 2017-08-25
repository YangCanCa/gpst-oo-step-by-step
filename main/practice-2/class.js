// Write your code here
const student = require('./student');
module.exports = class Class {
    constructor(num){
        this.num = num;
    }
    assignLeader(student){
        this.leader = student.name;
        student.introduce = function(){
           return `My name is ${student.name}. I am ${student.age} years old. I am a Student. I am Leader of Class ${this.clazz.num}.`
        }
    }
    
}

