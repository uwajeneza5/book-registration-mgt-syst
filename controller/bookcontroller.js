const{booksDatabase}= require ('../database/db');
const newbooks= (id,key) => {
      const booksDatabase= find (ele.id===newbooksv.id);
    booksDatabase.push(newbooks.length+1);
    console.log("\nAdded");
    console.log(booksDatabase);
};
const update = (id,key,value) => {
    const {exists} = booksDatabase.findIndex((book) => book.id === newbooks.id);
    booksDatabase[exists] = newbooks;
    console.log("\nUpdated");
    console.log(booksDatabase);
    if(!exists){
        console.log(notfound);
    }
    else{
        console.log(updated);
    }
    
};
const dispayall= (newbooks) => {
    console.log(booksDatabase);
};
const remove = (id) => {
    const exists = booksDatabase.filter((book) => book.id === newbooks.id);
    console.log("\nRemoved");
    console.log(booksDatabase);
};


module.exports = {add ,};
