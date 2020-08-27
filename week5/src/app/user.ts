export class User{
    username:string;
    birthday:string;
    age:number;
    email:string;
    pass:string;
    valid:boolean;
    constructor(username:string='',birthday:string='',age:number=0,email:string='',pass:string='',valid=false){
        this.username = username;
        this.birthday = birthday;
        this.age = age;
        this.email = email;
        this.pass = pass;
        this.valid = valid;
    }
}