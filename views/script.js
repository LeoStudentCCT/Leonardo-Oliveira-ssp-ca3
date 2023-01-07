window.onload = populateSelect();

function populateSelect() {
    $.getJSON("bookcollection.json", function (json) {
        let ddlbooklist = document.getElementById('booklist');
        ddlbooklist.innerHTML = "<option selected disabled>Choose your book type</option>"

        for (let i = 0; i < json.booktype.length; i++) {
            ddlbooklist.innerHTML = ddlbooklist.innerHTML + '<option value="' + json.booktype[i].type + '">' + json.booktype[i].type + '</option>';
        }
    });
}

function populateTypeBook() {
    $.getJSON("bookcollection.json", function (json) {
        let ddlbooklist = document.getElementById('booklist').selectedIndex - 1;

        if (ddlbooklist == -1)
            return;

        let ddloptionbooklist = document.getElementById('optionbooklist');

        for (let i = ddloptionbooklist.options.length; i >= 0; i--) {
            ddloptionbooklist.remove(i);
        }

        for (let i = 0; i < json.booktype[ddlbooklist].book.length; i++) {
            ddloptionbooklist.innerHTML = ddloptionbooklist.innerHTML + '<option value="' + json.booktype[ddlbooklist].book[i].price + '">' + json.booktype[ddlbooklist].book[i].listing + '</option>';
        }
    });
}

function addSelected() {
    let ddloptionbooklist = document.getElementById('optionbooklist');
    let index = ddloptionbooklist.selectedIndex;

    var amount = document.getElementById('txtAmount').value;
    var listing = ddloptionbooklist[index].text;
    var price = ddloptionbooklist[index].value;
    let total = price*amount;

    let table = document.getElementById("tdisplay");
    let row = table.insertRow(-1); 

    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);

    c1.innerText = listing;
    c2.innerText = price;
    c3.innerText = amount;  
    c4.innerText = total;
}

function deleteRow(ele) {
    var table = document.getElementById('tdisplay');
    var rowCount = table.rows.length;
    if (rowCount <= 1) {
        alert("There's nothing to delete!");
        return;
    }
    if (ele) {
        ele.parentNode.parentNode.remove();
    } else {
        table.deleteRow(rowCount - 1);
    }
}

