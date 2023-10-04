//import express from "express"
import {spawn} from "child_process"

//const app = express();
const port = 3500;

const mac = ["58:2D:34:38:8C:56"]
//app.get('/', (req,res) => {
	var dataToSend
	const python = spawn ('python',['LYWSD03MMC.py','--atc']);
	
	python.stdout.on('data', function(data) {
		console.log('pipe data from python script ...');
		dataToSend = data.toString();
		console.log("-----------------------------------");
		//console.log(dataToSend);
		console.log(/\n/+"Manipulation starts here -------------------------")
		const array = dataToSend.split("BLE packet - lywsdcgq")
		//const array2 = array[2].split(/\n/)
		//console.log(array)
		//console.log("-----New Array-----")
		//console.log(array2)
		//console.log("-----picked array-----")
		for (let i = 0; i < mac.length; i++){
	
			for (let j = 0; j <array.length; j++){
				if(array[j].includes(mac[i])){
					if(array[j].includes("Temperature:  0") || array[j].includes("Humidity:  0")){
						continue
					}
					else{
					console.log("Valid dataset found for "+mac[i]+"-------")
					console.log(array[j]);
					const arrayEdited = array[j].split(/\n/)
					console.log("Edited array--------------")
					console.log(arrayEdited)
					console.log("relevant data figures------------")
					console.log(mac[i]);
					console.log(arrayEdited[1]);
					console.log(arrayEdited[2]);
					break
					}
				}
		}
	}
		//res.send(dataToSend)
		//python.kill('SIGTERM')
	});
	python.on('close', (code) => {
		console.log(`child process close all stdio with code ${code}`);
	});


//});

//app.listen(port,() => console.log(`Example app listening on port ${port}!`))
