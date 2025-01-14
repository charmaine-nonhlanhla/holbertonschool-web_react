var studentsList = [];
var labels = ['firstName', 'location'];
var student1 = {
    firstName: "Peter",
    lastName: "Molenew",
    age: 12,
    location: "Alabama",
};
var student2 = {
    firstName: "Jane",
    lastName: "Molenew",
    age: 10,
    location: "Alabama",
};
studentsList.push(student1, student2);
var table = document.createElement('table');
var tbody = document.createElement('tbody');
var thead = document.createElement('thead');
document.body.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);
for (var i = 0; i < labels.length; i++) {
    var th = document.createElement('th');
    th.appendChild(document.createTextNode("".concat(labels[i])));
    thead.appendChild(th);
}
for (var i = 0; i < studentsList.length; i++) {
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    var values = [studentsList[i].firstName, studentsList[i].location];
    for (var j = 0; j < values.length; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode("".concat(values[j])));
        tr.appendChild(td);
    }
}
