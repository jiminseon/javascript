const KEY = "SAMPLE"

let johnProfile = {
    name: "John",

    sayHi: function() {
        console.log(this.name, ": 친구야 반갑다!");
    },

    sayHi: () => {
        console.log(this.name, "반갑습니다."); // this.name이 할당 안됨 why? 안먹을 수 있다 정도만 알고 있기 
    },
    
    [KEY]: "sampleValue", //[KEY] === SAMPLE
};

johnProfile.sayHi();
console.log(johnProfile["sayHi"]);
console.log(johnProfile.SAMPLE);
console.log(johnProfile["SAMPLE"]);
