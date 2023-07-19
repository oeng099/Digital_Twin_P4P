import * as tapo from "tp-link-tapo-connect"

const email = "wwon866@aucklanduni.ac.nz"
const password = "part4project" 
var listOfDeviceTokens = []

async function listDevices(){
    try {
        const cloudToken = await tapo.cloudLogin(email, password);
        const devices = await tapo.listDevicesByType(cloudToken, 'SMART.TAPOPLUG');
        for (let index = 0; index < devices.length; index++) {
            var deviceToken = await tapo.loginDevice(email,password,devices[index])
            listOfDeviceTokens.push(deviceToken);
        }
        const getDeviceInfoResponse = await tapo.getDeviceInfo(listOfDeviceTokens[0]);
        console.log(devices);
        console.log(getDeviceInfoResponse)
        console.log(await tapo.getEnergyUsage(listOfDeviceTokens[0]))
    } catch (error) {
        console.log(error)
    }
}

export {listDevices}
