const mono = require("./algorithms/Mono");


const algorithm = process.argv[2].toLowerCase();
const operation = process.argv[3].toLowerCase();
const data = process.argv[4];

switch(algorithm){
    case "mono":{
        if(operation === "enc"){
            mono.encode(data);
        }else{
            mono.decode(data);
        }
    }
    break;
}


