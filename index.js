const express=require('express');

const app= express();

const cors=require('cors');
app.use(cors());
app.get('/',(req,res)=>{
res.json({
    Message:"Olá"});
});
app.get('/produtos',(req, res)=>{
    res.json([{nome:"celular"},{nome:"tv"},{nome:"sofá"}])
});
const PORT=3000
app.listen(process.env.PORT||PORT,()=>{
    console.log('Aplicação rodando na porta:'+PORT)
})