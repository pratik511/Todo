var data = JSON.parse(localStorage.getItem("todolist")) || [];

console.log("data", data);

function addItem() {
    var Text = document.getElementById("input").value;
    if (Text != "") {
        var textObj = {
            id: Math.random(),
            input: Text,
            status: false
        };
        console.log("textObj", textObj);
        data.push(textObj);
        prepareTableCell(textObj.input);
        localStorage.setItem("todolist", JSON.stringify(data));
    }
}

function ChangeHandler(id) {
    console.log("Id=check=uncheck", id);
    data.map(item => {
        if (item.id === id) {
            if (item.status === true) {
                item.status = false
            } else {
                item.status = true
            }
        }
    })
    // console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",data);
    prepareTableCell();
}
function prepareTableCell() {
    let table = `<table border="1" cellpadding="2" cellspacing="2">`;
    data.map(item => {
        if (item.status === true) {
            table += `<tr>
                                        <td><input type="checkbox" id="status" name="status" value="checked" checked="true" onchange="ChangeHandler(${item.id})"></td>
                                        <td align="center" style="text-decoration:line-through; margin: 2px 0; padding="10px 1000px" "><ul><li><b>${item.input}</b></li><ul></td>
                                        <td><button value="" class="fa fa-edit" onclick="editRow(${item.id})"> </button></td> 
                                        <td><button value="" class="fa fa-trash-o" onclick="deleteRow(${item.id})"> </button></td> 
                                    </tr>`
        } else {
            table += `<tr>
                                        <td><input type="checkbox" id="status" name="status" value="unchecked" onchange="ChangeHandler(${item.id})"></td>  
                                        <td align="center"><li>${item.input}</li></td>
                                        <td><button value="" class="fa fa-edit" onclick="editRow(${item.id})"> </button></td> 
                                        <td><button value="" class="fa fa-trash-o" onclick="deleteRow(${item.id})"> </button></td> 
                                      </tr>`
        }
    })
    table += `</table>`
    // console.log("table",table);
    localStorage.setItem("todolist", JSON.stringify(data));
    document.getElementById("tablerows").innerHTML = table;
    document.getElementById("resetButton").style.visibility = "hidden";
}

function active() {
    var activearr = data.filter((item) => !item.status);
    let activearrtbl = `<table border="1" cellpadding="2" cellspacing="2">`;
    activearr.map(item => {
        activearrtbl += `<tr>
                                        <td><input type="checkbox" id="status" name="status" value="unchecked" onchange="ChangeHandleractive(${item.id})"></td>
                                        <td align="center" ><li><b>${item.input}</b></li></td>
                                        <td><button value="" class="fa fa-trash-o" onclick="dltActv(${item.id})"> </button></td>
                      </tr>`
    })
    activearrtbl += `</activearrtbl>`

    console.log("active", activearr);
    document.getElementById("tablerows").innerHTML = activearrtbl;
    document.getElementById("resetButton").style.visibility = "hidden";
}

function ChangeHandleractive(id) {
    console.log("Id=check=uncheck", id);
    data.map(item => {
        if (item.id === id) {
            if (item.status === true) {
                item.status = false
            } else {
                item.status = true
            }
        }
    })
    active();
}


function completed() {
    var completedarr = data.filter((item) => item.status);
    let completedarrtbl = `<table border="1" cellpadding="2" cellspacing="2">`;
    completedarr.map(item => {
        completedarrtbl += `<tr>
                                    <td><input type="checkbox" id="status" name="status" value="checked" checked="true" onchange="ChangeHandlercompleted(${item.id})"></td>
                                    <td align="center" ><ul><li><b>${item.input}</b></li><ul></td>
                                    <td><button value="" class="fa fa-trash-o" onclick="dltCmplt(${item.id})"> </button></td> 
                  </tr>`
    })
    completedarrtbl += `</completedarrtbl>`
    console.log("completed", completedarr);
    document.getElementById("tablerows").innerHTML = completedarrtbl;
    document.getElementById("resetButton").style.visibility = "visible";
}

function ChangeHandlercompleted(id) {
    console.log("Id=check=uncheck", id);
    data.map(item => {
        if (item.id === id) {
            if (item.status === true) {
                item.status = false
            } else {
                item.status = true
            }
        }
    })
    completed();
}

function editRow(id) {
    // console.log(id);
    var edit = data.map(item => {
        if (item.id === id) {
            addItem(item.value);
    }
});
console.log(edit);
    data1 = edit;
    localStorage.setItem("todolist", JSON.stringify(data1))
    prepareTableCell();
}

function deleteRow(id) {
    var newarray = data.filter((item) => item.id != id);
    data = newarray;
    localStorage.setItem("todolist", JSON.stringify(data))
    prepareTableCell();
}

function resetAll() {
    window.localStorage.clear();
    location.reload();
}

function validation() {
    var text = document.myForm.input.value;
    if (text == "") {
        alert("not work");

        return false;
    }
}

function dltActv(id) {
    let newArray = data.filter((item) => item.id !== id);
    console.log(newArray);
    data = newArray
    localStorage.setItem("todolist", JSON.stringify(data))
    active();
}

function dltCmplt(id) {
    console.log("Delte Completed");
    let newArray2 = data.filter((item) => item.id !== id);
    console.log(newArray2);
    data = newArray2
    localStorage.setItem("todolist", JSON.stringify(data))
    completed();
}
