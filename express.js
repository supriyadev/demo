const Joi=require('joi');
const express=require('express');
const app=express();
//const port= 4000;
const port= process.env.PORT || 4000;
app.use(express.json()); //midele ware

// creating middle ware 
// app.use(function(req,res,next){
//     console.log('loging');
//    next();
// });
console.log(`envirnonment ${process.env.NODE_ENV}`);
app.get('env');
// app.get();
// app.post();
// app.put();
// app.delete(); http methods 

// array  obje
const custInfo=[
    {
        id:1,
        name:'supriya'
    },    
    {
        id:2,
        name:'dev'
    },
    {
        id:3,
        name:'ved'
    }

]; 
// get root 
app.get('/',(req,res)=>{
    res.send('hello world ');
});

// get the path
app.get('/api/demo',(req,res)=>{
    res.send(custInfo);
});

// get the id" req.params.id"
// app.get('/api/custmore/:id',(req,res)=>{
//  res.send(req.params.id);
// });

// multiple parameter 
// app.get('/api/custmore/:year/:month',(req,res)=>{
//     res.send(req.params);
// });

// query string  to get addtional informatiopn 
// http://localhost:4000/api/custmore/2018/2?sortBy=name

// app.get('/api/custmore/:year/:month',(req,res)=>{
// res.send(req.query)
// });

// array find in parameter  
app.get('/api/customer/:id',(req,res)=>{
    const custer =custInfo.find(c=>c.id===parseInt(req.params.id));
    if(!custer) res.status(404).send('This is is not exist');
    res.send(custer);

});

//post joi package is udes for validation
app.post('/api/customer',(req,res)=>{
    
    const schema = Joi.object({
        name: Joi.string().min(4).required()
        });
        
        const result = schema.validate(req.body);
        // console.log(result);
    console.log(result);
    if(result.error)
    {
        res.status(404).send(result.error);
        return;
    }
    const cust={
        id:custInfo.length +1,
        name:req.body.name
    };
    custInfo.push(cust);
    res.send(cust);

});

//put for updating 
app.put('/api/customer/:id',(req,res)=>{
    const custer =custInfo.find(c=>c.id===parseInt(req.params.id));
    if(!custer) res.status(404).send('This is is not exist');
    // res.send(custer);

    const schema = Joi.object({
        name: Joi.string().min(4).required()
        });
        
        const result = schema.validate(req.body);
        // console.log(result);
    console.log(result);
    if(result.error)
    {
        res.status(404).send(result.error);
        return;
    }


    custer.name=req.body.name;
    res.send(custer);

});

app.delete('/api/cutomer/:id',(req,res)=>{
    const deleteuser=custInfo.find(c=>c.id===parseInt(req.params.id));
    if(!deleteuser) res.status(404).send('plz check ');
    const index =custInfo.indexOf(deleteuser);
    custInfo.slice(index,1);
    res.send(deleteuser);

});
app.listen(port,()=>console.log(`localhost:${port}`));
