//Ques: Flatten the given object as follows :-

// Input :-
// {
//   name: 'titan',
//   job: { 
//      role: 'coder', 
//      income: 50000 
//   },
//   hobby: [ 
//      'games', 
//      'travel' 
//   ],
//   place: [ 
//      { city: 'lucknow' }, 
//      { state: 'up' } 
//   ],
//   profile: { 
//      clients: [ 
//         'Joey_Wisozk', 
//         'Enrique12', 
//         'Tia.Fay18' 
//      ] 
//   }
// }

// Output :-
// {
//   name: 'titan',
//   job_role: 'coder',
//   job_income: 50000,
//   hobby_0: 'games',
//   hobby_1: 'travel',
//   place_0_city: 'lucknow',
//   place_1_state: 'up',
//   profile_clients_0: 'Joey_Wisozk',
//   profile_clients_1: 'Enrique12',
//   profile_clients_2: 'Tia.Fay18'
// }

const user={
    name:"titan",
    job: {
      role : "coder",
      income : 50000,
    },
    hobby : [
      "games" , "travel"
    ],
    place:[
        {city: "lucknow"},
        {state: "up"},
    ],
    profile:{
         "clients":[
            "Joey_Wisozk",
            "Enrique12",
            "Tia.Fay18"
         ]
    },
}
console.log(user);

const flatten_obj = (user) => {
    let res = {};
    for(let i in user){
        if( typeof(user[i]) ==='object' && !Array.isArray(user[i])){
            const obj = flatten_obj(user[i]);
            for(let j in obj){
                res[i+"_"+j] = obj[j];
            }
        }
        else if(typeof(user[i]) ==='object' && Array.isArray(user[i])){
            const obj = flatten_obj(user[i]);
            for(let j in obj){
                res[i+"_"+j] = obj[j];
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
