// function drag(e) {
//     e.dataTransfer.setData('text', e.target.id)
// }
// function allow(e) {
//     e.preventDefault()
// }
// function drop(e) {
//     e.preventDefault()
//     let data = e.dataTransfer.getData('text')
//     e.target.appendChild(document.getElementById('data'))
// }
// document.getElementById('drag1').addEventListener('dragstart', drag)
// let dropArea = document.querySelectorAll('div')
// console.log(dropArea);
// dropArea.forEach((id) => {
//     let Id = id.getAttribute('id')
//     let element = document.getElementById(Id)
//     element.addEventListener('drop', drop)
//     element.addEventListener('dragover', allow)
// })
const container=document.querySelector('.container')
const text=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const confirmPassword=document.getElementById('confirmPassword')
const submit=document.getElementById('submit')
const userForm=document.getElementById('userForm')

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    if (password.value===confirmPassword.value) {
        
   

   let ul=document.createElement('ul')
   let li1=document.createElement('li')
   let li2=document.createElement('li')
   let li3=document.createElement('li')
   let li4=document.createElement('li')

ul.classList.add('ull')


   li1.innerHTML=text.value
   li2.innerHTML=email.value
   li3.innerHTML=password.value
   li4.innerHTML=confirmPassword.value


   ul.append(li1,li2,li3,li4)
   container.append(ul) 

}
else{
 alert("Pasword eyni deil")}
 
 userForm.reset()

 
})
