{



type GenericArray<T> = Array<T>



// const rollNumber : number[] = [4,5,56]
const rollNumber : GenericArray<number> = [4,5,56]

// const mentors: string[] = ['a','d','g']
const mentors: GenericArray<string> = ['a','d','g']

const boolArray: GenericArray<boolean> = [true,false, true];

const user : GenericArray<{name: string, age: number}> = [
    {
        name: "mahir",
        age: 394
    },
    {
        name: "jhankar",
        age: 548
    }
]




//generic tuple 


type User ={
name: string;
age: number
}



type GenericTuple<Z, Y> = [Z, Y]

const manus: GenericTuple<string, string> = ['Mr X', 'Mr. Y']


const UsarWithId: GenericTuple<number, {name: string, email: string}> = [123, {name: 'jh', email: 'a@gmail.com'}]






}
