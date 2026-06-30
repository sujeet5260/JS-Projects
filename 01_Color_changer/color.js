// ================= My First Code =============================


// const button = document.querySelectorAll('.button')
// const body = document.querySelector('body');



// button.forEach(function(button){
//     console.log(button)
//     button.addEventListener('click', function(e){
//         console.log(e);
//         console.log(e.target);
        
//         if(e.target.id === 'grey'){
//             body.style.backgroundColor = e.target.id
//         }
//         if(e.target.id === "white"){
//             body.style.backgroundColor = e.target.id
//         }
//         if(e.target.id === 'blue'){
//             body.style.backgroundColor = e.target.id
//         }
//         if(e.target.id === 'yellow'){
//             body.style.backgroundColor = e.target.id
//         }
//     })
// })



// =================== My Sec Code ===========================


// const button = document.querySelectorAll('.button');
// const body = document.querySelector('body')

// // console.log(button)

// button.forEach(function(button){

//     //  console.log(button);
//      button.addEventListener('click', function(e){

//         // console.log(e.target.id);
//         if(e.target.id === 'grey'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === 'white'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id ==='blue'){
//             body.style.backgroundColor = e.target.id
//         }
//         if(e.target.id ==='yellow'){
//             body.style.backgroundColor = e.target.id
//         }
        
//      })
// })





// =================== My 3rd  Code ===========================


// const button = document.querySelectorAll('.button');
//  const body = document.querySelector('body')


// //  console.log(button);

// button.forEach(function(button){

//     // console.log(button);

//     button.addEventListener('click', function(e){

//         // console.log(e.target);
//         if(e.target.id === 'grey'){
//             body.style.backgroundColor = e.target.id
//             console.log(e.target.id);
            
//         }
//         if(e.target.id === 'white'){
//             body.style.backgroundColor = e.target.id
//             console.log(e.target.id);
//         }
//         if(e.target.id === 'blue'){
//             body.style.backgroundColor = e.target.id
//             console.log(e.target.id);
//         }
//         if(e.target.id === 'yellow'){
//             body.style.backgroundColor = e.target.id
//             console.log(e.target.id);
//         }
                   
//     })
    
// })
 



// =================== My 4th  Code ===========================


const button = document.querySelectorAll('.button')
const body = document.querySelector('body');


button.forEach(function(button){
    // console.log(button);

    button.addEventListener('click',function(e){
        console.log(e.target.id);

        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }else{

        }
        
    });
    
})

























































//   Original code 


// console.log("hitesh")
// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'white') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }
    
//   });
// });

