
export const Userdata = (user)=>{
 const user1 = {
    user : "user1",
    age : "21"
 }
 const user2 = {
    user : "user1",
    age : "21"
 }

return new Promise ((resolve,reject)=>{
      setTimeout(()=>{
          switch(user){
            case "user1" :
                resolve(user1);
                break;
            case "user2" :
                resolve(user2);
                break;
            default :
                reject("user not found")
          }
          
      },3000)
})
    


}