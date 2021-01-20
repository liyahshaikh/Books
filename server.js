const express =require("express");
const PORT=4000;
const host='localhost';
const app=express();
const fs=require('fs');
app.use(express.static('books.json'));
app.get('/', function(req, res){
    res.sendFile('/Users/aliyahshaikh/COFM/site.html');

});
var books_create_get=function(req, res){
    res.header('Content-Type', 'application/json');
    res.sendFile('/Users/aliyahshaikh/COFM/books.json');
}
var books_create_post=function(req, res){
    var bookName=req.query.name;
    var authorName=req.query.author;
    var book={
        name: bookName,
        author: authorName
    };
    saveBook(book, function(err) {
        if (err) {
          res.status(404).send('User not saved');
          return;
        }
    
        res.send('User saved');
      });

}
    function saveBook(book, callback) {
      fs.writeFile('./books.json', JSON.stringify(book), callback);
    }


app.get('/books', books_create_get);
app.post('/', books_create_post);


app.listen(PORT,host, (err) => {
    if (err) { console.log(err); }
    
    console.log(`Server is listening on host http://${host}:${PORT}`);
}); 
