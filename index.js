const express=require('express');

const app= express();

app.get('/',(req,res)=>{
res.json({
    Message:"Olá"
});
});
const PORT=3000
app.listen(process.env.PORT||PORT,()=>{
    console.log('Aplicação rodando na porta:'+PORT)
})