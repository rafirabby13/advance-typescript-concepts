{
  //interface

  interface User {
    name: string;
    age: number;
  }
  type UserWithRole = User & { role: string };

  const user1: UserWithRole = {
    name: "mihaz",
    age: 45,
    role: "manager",
  };


  interface  UserWithRole2 extends User{
    role: string;
    address?: string;
  }




  const user2: UserWithRole2 = {
    name: "mihaz",
    age: 45,
    role: "manager",
  };


 /// js --> array ---> object


 type Roll= number[]

interface Rolll2{
    [index: number] : number
}
 const rollNumber : Rolll2 = [2,34,34354,456]


 type Add = (num1: number, num2: number)=> number;

 interface Add2{
    (num1: number, num2: number): number
 }

 const add:Add2=(num1, num2)=>{
    return num1+num2
 }


 console.log(add(4,5))



}
