import * as mqtt from "mqtt"

const protocol = 'mqtt';
const host = 'broker.emqx.io'
const port = '1883'
const clientID = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `${protocol}://${host}:${port}`

const topic = '/nodejs/mqtt'

const client = mqtt.connect(connectUrl, {
    clientID,
    clean: true,
    connectTimeout: 4000,
    username: 'emqx',
    password: 'public',
    reconnectPeriod: 1000,
})

client.on('connect', () => {
    console.log("Connected")
    client.subscribe([topic],() => {
        console.log(`Subscribe to topic '${topic}'`)
        client.publish(topic, 'nodejs mqtt test',{ qos: 0, retain: false}, (error) => {
        if (error) {
            console.error(error)
        }
        })
    })
})

client.on('message', (topic, payload) =>{
    console.log('Received Message:', topic, payload.toString())
})

client.end(false, {}, () => {
    console.log('client disconnected')
})