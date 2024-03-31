/* Create a new classs called ADMIN which inherits from the user. Add a new method called editData to ADMIN that allows it to edit 
website data */
let Data="Secret Information";

class user
{
    constructor(name,email)
    {
        this.name=name;
        this.email=email;
    }
    viewData()
    {
        console.log("Data:=",Data);
    }
}

class admin extends user
{
    constructor(name,email)
    {
        super(name,email);
    }
    editData()
    {
        console.log("You can now edit the website data");
    }
}

let user1=new admin("shivani","shivanimoswal@gmail.com");