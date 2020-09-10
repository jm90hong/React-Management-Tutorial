const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req,res)=>{
    const customers=[{
        'id':1,
        'image':'https://placeimg.com/64/64/any',
        'name':'홍정민',
        'birthday':'900404',
        'gender':'남',
        'job':'대학생'
      },
      {
        'id':2,
        'image':'https://placeimg.com/64/64/any',
        'name':'홍지원',
        'birthday':'930404',
        'gender':'여',
        'job':'대학생'
      }
    ]
    
    res.send(customers);
});


app.listen(port, ()=> console.log(`Listening on port ${port}`));