const server = io()
let nickname = "muar"
document.querySelector(".form button").addEventListener("click", sendMessage)

function sendMessage(){
    let input = document.querySelector(".form input").value 
    document.querySelector(".form input").value = ""
    server.emit("message", JSON.stringify({
        user: nickname,
        message: input
    }))
}

server.on("update", (data)=>{
    let chat = JSON.parse(data)
    console.log(chat)
    let main = document.querySelector("main")
    main.innerHTML = ""
    chat.forEach((message)=>{
        main.innerHTML += `<div class="message">${message.user}: ${message.message}</div>`
    })
})


alertify.success("Alertify is work!")

document.querySelector("header button").addEventListener("click", ()=>{
    alertify.prompt("Введіть свій нікнейм", (e , val)=>{
        if(e) nickname = val
    })
})