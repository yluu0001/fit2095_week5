//express package
let express=require('express');

//body parser package
let bodyParser=require('body-parser');

//embeded javascript package
let ejs=require('ejs');
let app=express();

//empty db for tasks
let db=[];

//use ejs
app.engine('html', require('ejs').renderFile);
app.set('view engine','html');

app.use(bodyParser.urlencoded({
    extended:false
}));

//use static assets
app.use(express.static("views"));
app.use(express.static("img"));
app.use(express.static("css"));


app.get('/', function(req,res){
    console.log("Homepage Request");
    res.sendFile(__dirname + "/views" + "/index.html");
});

app.get('/addNewtask', function(req,res){
    console.log("Add New Task Request");
    res.sendFile(__dirname + "/views" + "/addNewtask.html");
});

app.get('/showTask', function(req,res){
    console.log("Show Table Request");
    res.render("showTask", {
        tasks: db
    });
});

app.post('/newTask', function(req,res){
    console.log(req.body);
    db.push(req.body);
    
    res.render("showTask", {
        tasks: db
    });
});


app.listen(8080);