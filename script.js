alert("Enter a number between 2 and 10");

function function1(){
    var bnumb = parseInt(document.getElementById("bnum").value);
    var Enumb = parseInt(document.getElementById("Enum").value);

    if (bnumb < 2 || Enumb < 2 || bnumb > 10 || Enumb > 10) {
        alert("Please enter numbers between 2 and 10");
        return;
    }

    var tbl = " ";

    tbl = tbl + "<table>";
    for (var i = 1; i <= bnumb; i++) {
        tbl = tbl + "<tr>";
        for (var j = 1; j <= Enumb; j++) {
            tbl = tbl + "<td>" + (i * j) + "</td>";
        }
        tbl = tbl + "</tr>";
    }
    tbl = tbl + "</table>";

    document.getElementById("table").innerHTML = tbl;
}

