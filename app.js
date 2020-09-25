const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

//creeating a new app constant 
const app = express();

//required line to use bodyparser
app.use(bodyParser.urlencoded({extended:true}));

// setting public folder to be served on html load up
app.use(express.static("public"));



// serving the get request made by browser
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
})


app.post("/", function(req, res){
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };
    
    const jsonData = JSON.stringify(data);

    const url = "https://us2.api.mailchimp.com/3.0/lists/5db01d2e0f";

    const options = {
        method: "POST",
        auth: "anyname:yourapikey"

    }

    const request = https.request(url, options, function(response) {
        if(response.statusCode === 200){
            res.sendFile(__dirname + "/success.html");
        }else {
            res.sendFile(__dirname + "/failure.html");
        }
        response.on("data", function(data){
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();
    
    
});


app.post("/failure", function(req, res){
    res.redirect("/");
});

// setting the server to listen to port 3000
app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on port 3000");
});


//ApiKey
// b5bf2daabaa7a58ad9bf605fb0e9a614-us2

// Audience Id 
//5db01d2e0f
