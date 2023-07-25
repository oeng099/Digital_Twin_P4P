import fetch from "node-fetch"
import fs from "fs"


var encodedParams = new URLSearchParams();
encodedParams.set('hl', 'en-us');
encodedParams.set('r', '0');
encodedParams.set('c', 'mp3');
encodedParams.set('f', '8khz_8bit_mono');
encodedParams.set('b64', 'true');

const url = 'https://voicerss-text-to-speech.p.rapidapi.com/?key=051f46d8a8ec480799095c7061cfda8f';
var options = {
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '0cee23f231msh8057971037a3636p1b4604jsn69b6fc0d5f9b',
    'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com'
  },
  body: encodedParams
};


async function result(text){

    try {
        encodedParams.set('src', text);
        const response = await fetch(url, options);
        const result = await response.text();
        var data = result;
        var newData = data.replace(/^data:audio\/\w+;base64,/, "");
        var buf = Buffer.from(newData, 'base64');
        fs.writeFile('output.mp3', buf,(err) => err && console.error(err));
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

export {result}