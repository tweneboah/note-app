const notes = [{
        title: "MongoDB",
        body: "Learn MongoDB"
    },
    {
        title: "Express",
        body: "Learn React JS"
    },
    {
        title: "React Js",
        body: "Learn React JS"
    },
    {
        title: "Node JS",
        body: "Learn Node JS"
    }
];


const filters = {
    searchText: ""
}

const renderNotes = function (notes, filters) {
    const filteredNote = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })


    document.querySelector("#notes").innerHTML = ""

    filteredNote.forEach(function (note) {
        const noteElement = document.createElement("p");
        noteElement.textContent = note.title;
        document.querySelector("#notes").appendChild(noteElement);

    })


}

renderNotes(notes, filters);



//EventListener 

document.querySelector("#search").addEventListener("input", function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})