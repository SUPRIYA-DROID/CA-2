const express =require('express')
const app =express()
port =3000
const users =[
    {Discription:"FSWD"},
    {Titlecard:"CA2"},
    {Duedate:10-3-25},
]
app.use(express.json())
app.get('/Title',(req,res)=>{
    if(!req.query.user){
          return res.json({"message":"title card should not be empty"})
    }
    const user =users.find(u=>u.Discription===req.query.user)
    if(user){
        return  res.json({"message":"due date should not be empty","data":user})
    }
    else{
        return  res.json({"message":"Due date should be a valid future date"})
     } 
})
app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
})