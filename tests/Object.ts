type credentials = {
    email: string;
    password: string;
    gender: string ;

};



const admin : credentials = {
    email:"test@test.com",
    password: "Test123 ",
    gender: "male",
};

 function defineUser (user: credentials):string{
    return `${ user.email} . ${ user.password}`;
 };


console.log(defineUser(admin));
