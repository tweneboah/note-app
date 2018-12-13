# take-note-app
Take note and never forget. Is coming soon

## DAY 1 8/12/2018
```javascript
const notes = ["Learning Objects", "Will learn Modules", "Programming day"];

notes.forEach(function (item, index) {

    console.log(`${index} -> ${item}`);
})

let count = 30
for (let i = 0; i < notes.length; i++) {
        console.log(notes[i]); 
}

//PART 2

const notes = [{
    title: "MongoDB",
    body: "Learn MongoDB"
}, {
    title: "React Js",
    body: "Learn React JS"
}, {
    title: "Node JS",
    body: "Learn Node JS"
}];


//Searching through array
//use indexOf= This return the index of the item if it exist and it return -1 if it does not exist

console.log(notes.indexOf(notes.title));
console.log(notes.length);
```
