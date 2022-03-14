const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');
// const { response } = require('express');
const port = 5001;


app.use(cors())
app.use(express.json())

app.post('/translate', async (req , res) => {
    // console.log( req.body.conversation);
    // const trnslatedName = req.body.conversation

    try {

        const response = fetch("https://deep-translate1.p.rapidapi.com/language/translate/v2", {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "x-rapidapi-host": "deep-translate1.p.rapidapi.com",
                "x-rapidapi-key": "bf8f2686e6mshe2f6d7d85b850a9p12c79fjsnfa71f86408d3"
            },
            "body": {
                "q": "how are you",
                "source": "en",
                "target": "bn"
            }
        }).then( response  =>  response.json())
        console.log(response);
        res.json(response);
       
        
    } catch (error) {
        console.log(error);
    }


})

// curl -X GET "https://libretranslate.com/languages" -H  "accept: application/json"


app.get('/language', async (req, res)=> {

    try {

        const response = await fetch(`https://libretranslate.com/languages`,{
            "method": "GET",
            "headers": {
                "accept": "application/json"
            }
        }).then(response=> response.json())
        // res.send(response);
    res.send(response)
        
    } catch (error) {
        console.log(error);
        
    }

})



// res.send(respon)

// .catch(err => {
// 	console.error(err);
// });
   

// })






app.listen(port , ()=> {
    console.log("server runnig ", port);
})