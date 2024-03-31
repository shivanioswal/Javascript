/* You are creating a website for your college. Create a class user with 2 properties, name and email. It also has a method called
viewData() that allows user to view website data. */

let DATA="Secret Information";
class user 
{
   constructor(name,email)
    {
        this.name=name;
        this.email=email;
    }

    viewData()
    {
        console.log("Data =",DATA);
    }
}

let student1=new user("shivani","shivanimoswal@gmail.com");
