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

add (123, 6)
