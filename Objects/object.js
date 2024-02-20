// 1. Object Literals
const newSymbol=Symbol('key1') //This is a symbol
const mobileModel={
    //key: value
    brand:'Samsung',
    model: 's24 Ultra',
    processor: 'Sanpdragon Gen 3',
    camera: ['200px', '12px', '12px'],
    isZoomCamera: true,
    'selfie camera MP': 12,     // this is not acceptable for dot notation
    [newSymbol]: 'MyKey',       // this is not acceptable for dot notation,
    brandModel: function(){     //using method as a value
        return `Mobile brand is ${this.brand} and model is ${this.model}`;
    },
    bettery:{      //This is another object(nested object)
        mAh: 5000,
    }, 

};
console.log(mobileModel);
console.log(mobileModel.brand); // dot notation
console.log(mobileModel['brand']); // bracket notation (key is always a string)
console.log(mobileModel['selfie camera MP']);
console.log(mobileModel[newSymbol]);
console.log(mobileModel.hasOwnProperty('camera')); //check property exist or not
mobileModel.model='s25 Ultra'; // update property value
console.log(mobileModel.model);
Object.freeze(mobileModel); // freeze korle object er property ke update kora jabena
mobileModel.brand='Nokia';
console.log(mobileModel.brand); //Update hobena coz object is freeze
console.log(Object.keys(mobileModel)); // show all key from object
console.log(Object.values(mobileModel)); // show all key from object
console.log(mobileModel.brandModel());
console.log(mobileModel.bettery.mAh);    // nested object value


//combining multiple object
const obj1={
    a:1,
    b:2,
    c:3,
};
const obj2={
    p:1,
    q:2,
    r:3,
};

const obj3={
    x:1,
    y:2,
    z:3,
};

/// const objFinal= Object.assign(obj1, obj2, obj3); This is not memory efficient
// const objFinal= Object.assign(target, source);
const objFinal= Object.assign({},obj1, obj2, obj3);
console.log(objFinal);
const objFinalSpread= {...obj1, ...obj2, ...obj3} //using spread operator , This memory efficient and modern practice
console.log(objFinalSpread);



// 2.Constructor Object

function Person(first, last){ //Constructor name always capital and constructor e always object thekei always argument value send korte hoy
    this.firstName= first,
    this.lastName = last
}

const person1 = new Person('Rahat', 'Ahmed');  // object
person1.age=26;
console.log(person1);
const person2 = new Person('Rifat', 'Ahmed'); 
console.log(person2);


