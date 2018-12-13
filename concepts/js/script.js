//Add new element

// const notes = ["Learn Js", "Learn React", "Dinner", "Shopping", "Chinese"];


const notes = [{
        title: "MongoDB",
        body: "Learn MongoDB"
    },
    {
        title: "React Js",
        body: "Learn React JS"
    },
    {
        title: "Node JS",
        body: "Learn Node JS"
    }
]




const myNote = function (notes) {
    notes.forEach(function (note) {
        return note.body;
    })
}

const emm = myNote(notes)
console.log(emm)



const newParagraph = document.createElement("p");
newParagraph.innerHTML = "This is my new elements";
document.querySelector("body").appendChild(newParagraph);