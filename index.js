const express=require("express");
const app=express();
const multer = require("multer");
require("dotenv/config");
app.use(express.json());

const controllers = require("./controllers");

const fileStorageEngine = multer.diskStorage({
	destination: (req, file, cb) => {
			cb(null, './uploads')
	},
	filename: (req, file, cb) => {
			cb(null, file.originalname);
	},
});

const upload = multer({ storage: fileStorageEngine });


app.post("/add-data" , controllers.addData);
app.put("/update-data", upload.single('file'), controllers.updateData);
app.delete("/delete-data", controllers.deleteData);

app.listen(3000||process.env.PORT,err => {
	if(err)
		throw err
	console.log('Server started!')
})
