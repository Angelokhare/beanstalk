const express= require("express")
const app= express()

app.route("/").get((request, response)=>{
response.send("hello universe")
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log("i am listenning")
})