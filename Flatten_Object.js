//Ques: Flatten the given object as follows :-

// input : {
//   user_name: "Shubhendu",
//   job: {
//      role : "coder",
//      income : 50000,
//   }
// }

// output: {
//   user_name : "Shubhendu",
//   job_role : "coder",
//   job_income : 50000,
// }

const user = {
   user_name: "Shubhendu",
   job: {
      role : "coder",
      income : 50000,
   }
}

const flatten_obj = (user) => {
    let res = {};
    for(let i in user){
        if( typeof(user[i]) ==='object' && !Array.isArray(user[i]){
            const obj = flatten_obj(user[i]);
            for(let j in obj){
                res[i+"_"+j]= obj[j];
            }
        }
        else{
            res[i]=user[i];
        }
    }
    return res;
}

const flat = flatten_obj(user);
console.log(flat);
