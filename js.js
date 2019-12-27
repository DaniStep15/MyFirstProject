var notesCounter = Math.random();    //id for each new note
var arr_List = [];  //notes place



var note = {
    id: notesCounter++,
    textarea: "",
    listDate: "",
    listTime: ""
}

window.onload = function () {
    get_Date();
    get_Time();

    if( localStorage.getItem('newNote') ){
            // let notes from local and save on Window
        var letLocal = JSON.parse(localStorage.getItem('newNote'));

        for (let i = 0; i < letLocal.length; i++) {
                document.querySelector("#note_place").appendChild(addListByObjNote(letLocal[i]));
        }
    }


}

function get_Date() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    document.getElementById("input-date").value = today;
}

function get_Time() {
    var today = new Date();
    var currentHours = ('0' + today.getHours()).substr(-2);
    var currentMins = ('0' + today.getMinutes()).substr(-2);
    var currentSecs = ('0' + today.getSeconds()).substr(-2);
    var time = currentHours + ":" + currentMins + ":" + currentSecs;

    document.getElementById("input-time").value = time;
}
// setInterval(get_Time, 1000);

function addList() {
    var objNew_Note = {
        id: notesCounter++,
        textarea: input_textarea = document.querySelector("#new_note").value,
        listDate: input_date = document.querySelector("#input-date").value,
        listTime: input_time = document.querySelector("#input-time").value,
    };


    // validDateText();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    if (document.getElementById('new_note').value == '' || document.querySelector("#input-date").value < today) {
        alert("Please Enter Text or check Date!");
        return false;
    } else {
        true;
    };

    // remove input val
    document.getElementById('new_note').value = '';

    document.querySelector("#note_place").appendChild(addListByObjNote(objNew_Note));
}



function addListByObjNote(NoteInfo) {

    var objNew_Note = {
        id: NoteInfo.id,
        textarea: NoteInfo.textarea,
        listDate: NoteInfo.listDate,
        listTime: NoteInfo.listTime
    }

    arr_List.push(objNew_Note);


    // let note to localStorage
    localStorage.setItem('newNote', JSON.stringify(arr_List));


    let div_note = document.createElement("div");
    div_note.classList.add("main-data");



    let delete_btn = document.createElement("div");
    delete_btn.classList.add("btn_del");
    delete_btn.addEventListener("click", function () {
        for (let x = 0; x < arr_List.length; x++) {
            if (arr_List[x].id == NoteInfo.id) {

                arr_List.splice(x, 1);
            }

        }
        div_note.remove();
        remLocalStor(); //remLocal

    });
    div_note.appendChild(delete_btn);

    let div_input_textarea = document.createElement("div");
    div_input_textarea.innerText = NoteInfo.textarea;
    div_input_textarea.classList.add("div_text");

    let div_date_time_row = document.createElement("div");
    div_date_time_row.classList.add("row11");
    let div_input_date = document.createElement("span");
    div_input_date.innerText = NoteInfo.listDate;
    let div_input_time = document.createElement("span");
    div_input_time.innerText = NoteInfo.listTime;
    div_input_time.classList.add("row2");
    div_date_time_row.appendChild(div_input_date);
    div_date_time_row.appendChild(div_input_time);
    div_note.appendChild(delete_btn);
    div_note.appendChild(div_input_textarea);
    div_note.appendChild(div_date_time_row);

    document.querySelector("#note_place").appendChild(div_note);
    return div_note;
}

function remLocalStor() {
    localStorage.removeItem('newNote');
    localStorage.newNote = JSON.stringify(arr_List);
}




















  // notes = JSON.parse(localStorage.newNote);
    // $.each(notes, function () {
    //     if (localStorage.newNote)
    //         addListByObjNote(this);
    // });