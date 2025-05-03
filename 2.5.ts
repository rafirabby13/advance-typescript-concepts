{
  const createArray = <T>(param: T): T[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  type User = {
    id: number;
    name: string;
  };

  const resGenericObj = createArrayWithGeneric<User>({ id: 45, name: "bad" });


  const addCourseToStudnt =<T>(student: T)=>{
    const course = 'next Level Web Development'
    return {
        ...student,
        course
    }


}
const student1 = addCourseToStudnt({name: 'Mr. X', email: 'a@gmail.com', devLanguage: "js"})




}
