// function number(arr){
// let value = 0
// for(let i =0; i<arr.length; i++){
//     if(typeof arr[i] == 'number'){
//         value += arr[i]
//     }
// }
// return value

//     return arr.filter(item => typeof item == 'number').reduce((a,b) => a+b)
// }
// console.log(number(['12', 12, '1', '2', 6]))

// function toCapitalize(arr){
//      let result = []

//      for(let i = 0; i<arr.length; i++){
//         result.push(arr[i][0].toUpperCase()+arr[i].slice(1).toLowerCase())
//      }

//      return result
// }
// console.log(["sodiqjon", 'OZODBEK', 'sunnaTILLO'])


// let obj = {a: 'salom', b:'assalomu alaykum'}
// let info={
//         name:'ozodbek',
//         surname:'Yoqubov',
//         age:19,
//         isMale: true
// }

// console.log(info.name)
// console.log(info['name'])

// for(let i in info){
//     // console.log(i)
//     console.log(info[i])
// }

// let arr =[
//     {
//         name:'ozodbek',
//         age:19,
//         isMale: true
//     },
//     {
//         name:'ozodbek',
//         age:40,
//         isMale: true
//     },
//     {
//         name:'ozodbek',
//         age:30,
//         isMale: true
//     }
// ]
//     let n= []

// for(let i =0; i<arr.length; i++){
//     if(arr[i].age >19){
//         n.push(arr[i].name)
//     }
// }
// console.log(n)

function myFunc(text, value){
    let n = []
    text = text.split(" ")
    
    for(let i=0; i<text.length; i++){
      if(text[i].includes(value)){
        n.push(text[i].split("").reverse('').join(""))
      }
      else{
        n.push(text[i])
      }
    }
    return n.join(" ")
}
console.log(myFunc('word searches are super fun', 's'))