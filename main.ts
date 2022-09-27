const a : number = 7

interface MyInterface {
    x: number;
    y: number;
    z?: number;
}

const int: MyInterface = {
    x: 5 ,
    y: 9
}
const int2 : MyInterface = {
    x: 8,
    y: 14
}



// everething good with type

// functions

type AddFunc = (x: number, y: number) => number ;

const add: AddFunc = ( x: number, y: number ) => x + y ;

const add2 = (nums: {a: number, b:number }) => nums.a + nums.b;

// everething good with type

//unions

let maybeNum: number | string | boolean | AddFunc = 5;

maybeNum = "hello";
maybeNum = false;

interface Dog {
    bark:string;
}

interface Cat {
    purr:string;
}

type DogCat = Dog & Cat | string | boolean | AddFunc;

let dogCat: DogCat = {
    bark: "bark!",
    purr: "purr!"

}

if (typeof dogCat === "string") {
    console.log("you are a string")
}

// casting

add (dogCat as any, dogCat as any)




