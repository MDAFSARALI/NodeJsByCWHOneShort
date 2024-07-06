const http = require('http');

const port=process.env.PORT || 3000;

const server=http.createServer((req,res)=>{
    res.setHeader('content-Type','text/html')
    console.log(req.url)
    if (req.url=='/') {
        res.statusCode=200;
        res.end('<h1> This is learned from CWH</h1> <p> Hey How are you </p>');
    }
    else if (req.url=='/about') {
        res.statusCode=200;
        res.end('<h1>This is a about section which is being created with the help of CWH</h1> <p>Thanks for reading the content its awesome</p>');
    }
    else{
        console.log("Page Not Found...");
        res.statusCode=404;
        res.end('<h1>Page Not Found</h1>');
    }
})
server.listen(port ,()=>{
    console.log(`Server is listening on : ${port}`);
});
