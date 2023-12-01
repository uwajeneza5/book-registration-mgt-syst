const {addBook,update,remove,findById,display} = require('../controller/bookcontroller');

var added={
    title:"eat that frogs",
    author:"toyata",
    year:2022
};

addBook(added);

update(3,'year',2054);
remove(4);
findById(1);
display();
