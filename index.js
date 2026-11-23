// express 모듈 
const express = require('express');
// path 모듈
const path = require('path');
const app = express();
const PORT = Number(process.env.PORT) || 3000;
app. get('/',(req,res) => {
    res.status(200);
    res.send('mywebboard');
});
app.set('view engine', 'ejs');
app.set('views', path.join(__dirnames, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


 app.use(express.json()); 
 app.use(express.urlencoded({extended:true}));

app.use('/users', require('./routes/userRoutes'));


app.listen(PORT,'0.0.0.0',()=> {
    console.log('Server is running on port:${PORT}');
});

