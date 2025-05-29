class Animal{
    constructor(name="뽀삐"){
        this.name = name;
        this.hungry = 0;
    }
    run(){
        console.log(`${this.name} 동물이 달린다.`);
        this.hungry += 10;
    }
    eat(){
        console.log(`${this.name} 동물이 먹는다.`);
        this.hungry -= 10;
    }
}
const animal = new Animal("바둑이");

class Rabbit extends Animal {
    constructor(name, color){
        super(`rabbit-${name}`);
        this.color = color;
    }
    newFunction(){
        console.log(`${this.name}이 새로운 기능.`);
    }
}


