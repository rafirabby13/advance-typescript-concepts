{
  const addCourseToStudnt = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudnt({
    id:33,
    name: "Mr. X",
    email: "a@gmail.com",
    devLanguage: "js",
  });
}
