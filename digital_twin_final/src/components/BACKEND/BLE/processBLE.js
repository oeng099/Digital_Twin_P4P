import {spawn} from "child_process"
import firestore from "./firebase/firebase.js"
import {addDoc, collection, serverTimestamp} from "firebase/firestore"
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
		console.log(/\n/+"Manipulation starts here -------------------------")
		const array = dataToSend.split("BLE packet - lywsdcgq")
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
                    var tempVal = parseFloat(arrayEdited[1].split(": ")[1]);
                    var humidVal = parseFloat(arrayEdited[2].split(": ")[1]);
                    console.log(tempVal +"---"+ humidVal+ "---" + mac[i])
                    const ref = collection(firestore,"users")
                    try{
                        let reading = {
                            created: serverTimestamp(),
                            temperature: tempVal,
                            humidity:  humidVal,
                        }
                        addDoc(ref, reading).then(docRef =>{
                            console.log("Added reading to "+mac[i])
                        })
                        break
                    }
                    catch(error){
                        console.log(error)
                        console.log("retrying")
                    }
					break
					}
				}
		}
	}

	});
	python.on('close', (code) => {
		console.log(`child process close all stdio with code ${code}`);
	});


//});

//app.listen(port,() => console.log(`Example app listening on port ${port}!`))
