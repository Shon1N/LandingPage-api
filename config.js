const express = require("express");
const app = express();
const port = 3000;

const server = app.listen(port, function(error){
    if(error){
        console.log('Something went wrong', error);
    }else{
        console.log('Server is listening on port', port)
    }
})

export{
    server,        
}