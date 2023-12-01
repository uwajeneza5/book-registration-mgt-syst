const {booksDatabase} = require("../database/db")


//Adding  book

const addBook=(book)=>{
    book.id=booksDatabase.length+1;
    booksDatabase.push(book);
    console.log(booksDatabase);

}



//update  book

const update=(id,key,value)=>{
    
    var exists = booksDatabase.find(element => element.id === id);
    console.log(exists);

    if (!exists) {
        console.log("\n not Found\n");
        console.log(booksDatabase);
    }
    else{
        exists[key]=value;
        console.log("\n  updated\n");
        console.log(exists);
    }
}

//remove

const remove=(id)=>{
    console.log("\n2functions);
   var exists=booksDatabase.find(ele=>ele.id==id);
   if (!exists) {
    console.log(" not found");
   }
   else{
    var index=booksDatabase.indexOf(exists);
    booksDatabase.splice(index,1);
    console.log("Book  removed\n");
    console.log("Book display:\n");
    console.log(booksDatabase);
   }

};

//find abook 

const findById=(id)=>{
    let foundbook = {};
    foundbook = booksDatabase.find(ele=>ele.id===id);
    if (!foundbook) {
        console.log("\n  not Found\n");
    }
    else{
        console.log("\nFound :\n");
        console.log(foundbook);
    }
    
}

//Display Book

const display=()=>{
    console.log("\n  the Library\n")
    console.log(booksDatabase);
}
module.exports={
    addBook,
    update,
    remove,
    findById,
    display
}
