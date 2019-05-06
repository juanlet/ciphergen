class Mono {
    constructor(){
    }
    
     static encode(data){
      let encodedData = "";

      for (const c of data) {
        encodedData += Mono.map.get(c.toLowerCase());
      }
      console.log("Mono encoding", encodedData);
      return encodedData;
    }

     static decode(data){
        let decodedData = "";
       
        for(const c of data){
          decodedData += Mono.getKeyByValue(c.toUpperCase());
        }
        
        console.log("Mono decoding", decodedData);
        return decodedData; 
    }

     static getKeyByValue(val){
        for(const [k,v] of Mono.map.entries()){
            if(val === v){
                return k;
            }
        }

        throw new Error("Incorrect string, only letters allowed");
     } 
}

Mono.map = new Map();
Mono.map.set("a","J");
Mono.map.set("b","I");
Mono.map.set("c","B");
Mono.map.set("d","R");
Mono.map.set("e","K");
Mono.map.set("f","T");
Mono.map.set("g","C");
Mono.map.set("h","N");
Mono.map.set("i","O");
Mono.map.set("j","F");
Mono.map.set("k","Q");
Mono.map.set("l","Y");
Mono.map.set("m","G");
Mono.map.set("n","A");
Mono.map.set("o","U");
Mono.map.set("p","Z");
Mono.map.set("q","H");
Mono.map.set("r","S");
Mono.map.set("s","V");
Mono.map.set("t","W");
Mono.map.set("u","M");
Mono.map.set("v","X");
Mono.map.set("w","L");
Mono.map.set("x","D");
Mono.map.set("y","E");
Mono.map.set("z","P");

module.exports = Mono;