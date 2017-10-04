var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('records', ['records']);
var bodyParser = require('body-parser');
// image upload start
var multer = require('multer');

app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// image upload end


app.use(express.static(__dirname + "/app"));
app.use(bodyParser.json());

app.get('/records', function (req, res) {
	// console.log("i recevied")
	db.records.find(function (err, docs){
		// console.log(docs);
		res.json(docs);
	});

});

app.post('/records', function (req, res){
	console.log(req.body);
	db.records.insert(req.body, function(err, doc){
		res.json(doc);
	})
});

app.delete('/records/:id', function (req, res){
	var id = req.params.id;
	console.log(id);
	db.records.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	})
});

app.get('/records/:id', function (req, res){
	var id = req.params.id;
	console.log(id);
	db.records.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	})
});

app.put('/records/:id', function(req, res){
	var id = req.params.id;
	console.log(req.body.name);
	db.records.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name: req.body.name, email: req.body.email, phone: req.body.phone}},
		new: true}, function (err, doc) {
			res.json(doc);
	});
});

// image upload start
// var tempFileName;
var storage = multer.diskStorage({ //multers disk storage settings
	destination: function (req, file, cb) {
	    cb(null, './app/uploads/');
	    db.records.insert({filename:tempFileName}, function(err, doc){
			//res.json(doc);
		})
	},
	filename: function (req, file, cb) {
	    var datetimestamp = Date.now();
	    tempFileName = file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]
	    cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
		console.log(tempFileName)
	}
});

var upload = multer({ //multer settings
    storage: storage
}).single('file');

	/** API path that will upload the files */
app.post('/upload', function(req, res) {
	upload(req,res,function(err){
	    if(err){
	         res.json({error_code:1,err_desc:err});
	         return;
	    }
	     res.json({error_code:0,err_desc:null,imagePath:tempFileName});
	     
	});

});
// image upload end

app.listen(3000);
console.log("server running 3000");