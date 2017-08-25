const Person = require('./person');

module.exports = class Teacher extends Person{
    constructor(name,age,classes,id){
        super(name,age,id);
        this.classes = classes;
    }
    introduce(){
        if(this.classes.length === 0){
            return `${super.introduce()} I am a Teacher. I teach No Class.`
        }else{
            return `${super.introduce()} I am a Teacher. I teach Class ${this.classes[0].num},${this.classes[1].num}.`
        }
    }
}