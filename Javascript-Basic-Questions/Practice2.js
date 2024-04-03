/* Create a const object called "Profile" to store information as shown in the picture */

const Profile = {
    AccountName: "ShivaniOswal",
    isFollow: false,
    isMessage: false,
    posts: 105,
    followers: 200,
    following: 180,
    tag: "@ShivaniOswal",
    bio: "Aspiring MERN Stack developer"
};

console.log(Profile);
console.log(typeof Profile["AccountName"]);