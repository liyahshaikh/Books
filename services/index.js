const uuid4=require('uuid');
const fs=require('fs');
//Readfile
const readFile=(
    callback,
    filepath='./books.json',
    encoding="utf8"
) => {
    fs.readFile(filepath,encoding,(err,data) =>{
        if (err){
            return err;
        }
        callback(JSON.parse(data));
    });
};
//WriteFile
const writeFile=(
    filedata,
    callback,
    filepath="./books.json",
    encoding="utf8"
) => {
    fs.writeFile(filepath,filedata, encoding, err =>{
        if (err){
            return err;
    }
    callback();
}
    );
};
