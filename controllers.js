const fs=require("fs");
require('dotenv/config');
const {MongoClient,ObjectId}=require("mongodb");
const csv=require("csv-parser")
const client=new MongoClient(process.env.P247_URI);
const model=client.db("model");
const collection=model.collection("properties");

const rows=[]
async function updateDataUtil(id,updates) {
	const { _id, ...obj} = updates;
	// const collection = model.collection(collection);
	let res=await collection.updateOne({_id: ObjectId(id)},{
		$set: obj
	});
}

// async function addDataUtil(data,collection) {
// 	const collection = model.collection(collection);
// 	let res=await collection.insertOne({data});
// }

// async function deleteDataUtil(id,collection) {
// 	const collection = model.collection(collection);
// 	let res=await collection.deleteOne({_id: ObjectId(id)});
// }

async function test(filename) {

	fs.createReadStream(`./uploads/${filename}`).pipe(csv()).on("data",async function(row) {
		rows.push(row)
	}).on("end",async function() {
			for(let i=0;i<rows.length;i++) {
				// await updateDataUtil(rows[i]._id, rows[i]);
			}
	}).on("error",(error) => console.error(error))
}

exports.addData=function(req,res) {
	const collection=req.body.object;

}
exports.updateData=function(req,res) {
	// const collection=req.body.object;
	test(req.file.filename);
	res.json({"success": "data updated"})
}
exports.deleteData=function(req,res) {
	const collection=req.body.object;

}

exports.getActions=function(req,res) {
	// if(req.body.application === "P247")
	// {
	// client=new MongoClient(process.env.P247_URI);
	// model=client.db("model");
	// }
	const actions=["ADD","UPDATE","DELETE"];
	res.send({actions});
}

exports.getObjects=function(req,res) {
	let objects=[];
	if(req.body.application==="P247") {
		objects=[
			'searches',
			'tags',
			'maps',
			'leads',
			'authority',
			'flat-authority',
			'fieldPermissions',
			'properties',
			'masterManagement',
			'aparmtentsAuthority',
			'sectorMaps',
			'flat-leads',
			'users',
			'flats',
			'leads2'
		]
	}

	res.send({objects});
}

exports.downloadSample=function(req,res) {
	const file=fs.createReadStream("./samples/sample1.csv");
	res.pipe(file);
}

