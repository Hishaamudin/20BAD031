const express =require('express');
const axios = require('axios')
const app =express();
const port =5000;
app.post('/train/get',function(req,res){
    const option={
        "companyName": "Train Central",
        "ownerName": "hishaamudin",
        "ownerEmail": "hizzuhishaam2002@gmail.com",
        "rollNo": "20BAD031",
        "clientID": "6cf2dfc8-0b74-4e72-a86f-85a0e3d1195f",
        "clientSecret": "iXejXjTJPhMQsmGz"
    }
    axios.post(
        'http://104.211.219.98/train/auth',
        option).then((response)=>{
            console.log(response.data.access_token);
            axios.get('http://104.211.219.98/train/trains',{
                headers: {
                  'Authorization': `Bearer ${response.data.access_token}` 
                }}).then((output)=>{
                    console.log(output);
                })
        })
        .catch((err)=>{
            console.log(err);
        });
      
    });



app.listen(port,()=>{
   console.log(`Server running on port:${port}`);
});
