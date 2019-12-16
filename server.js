const Server = require('./class/Server.js');
const config = require('./config')
const util = require('./util')

const test_server = new Server(config.PORT, config.IP);

test_server.start(()=> console.log(`[TEST SERVER] started at ${test_server.info}`));
test_server.connection = client => console.log(`[TEST SERVER] <<<< ${client.info} is connected and create TCP established`);
test_server.response = (client, data) => {
    data = data.toString()
    console.log(data)
    // setTimeout(()=>{
    //     throw "some error!";;
    // }, 1000) 
};
