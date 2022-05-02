const phone=document.getElementById('phone')

const form=document.getElementById("form")
const errorElement=document.getElementById('error')

form.addEventListener('submit',(e)=>{
    let messages=[]
    if(phone.value===''||phone.value==null){
        messages.push("Name is required")
    }

    if(messages.length>0){
        e.preventDefault()
        errorElement.innerText=messages.join(',')
    }
})