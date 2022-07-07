let locations = [];
let table = document.getElementById('locationsTable');

let onload = () => {

    fetch("https://localhost:44317/api/Locations", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    })
        .then(response => {
            if (response.ok) {
                console.log("get reports list successfully");
                return response;
            }
        }).then(response => response.json())
        .then(data => {
            sortLocations(data);
            drawLocations(data);
        })
        .then(error => {
            console.log(error);
        });

}



let sortLocations = (locations) => {
    locations.sort(function (a, b) {
        return ((new Date(b.startDate).getTime() - new Date(a.startDate).getTime()))
    });
}

let drawLocations = (location) => {
    cleanTable();
    location.forEach(element => {
        domTable(element)
    });
}

let cleanTable = () => {
    while (table.childElementCount > 0) {
        table.removeChild(table.lastChild);
    }
}

let formatDate = (startDate, endDate) => {
    return (startDate.getFullYear() + '.' +
        startDate.getMonth() + '.' +
        startDate.getDate() + '  ' + startDate.getHours() + ':' + startDate.getMinutes() + ' - ' +
        endDate.getHours() + ':' + endDate.getMinutes());
}


let domTable = (location) => {

    const tr = document.createElement('tr');
    const td0 = document.createElement('td');
    td0.innerHTML = '-';
    td0.id = "firstColumn";
    const td1 = document.createElement('td');
    td1.innerHTML = formatDate(new Date(location.startDate), new Date(location.endDate));

    const td3 = document.createElement('td');
    td3.innerHTML = location.city;
    const td4 = document.createElement('td');
    td4.id = "lastColumn";
    td4.innerHTML = location.location;

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td3);
    tr.appendChild(td4);

    table.appendChild(tr);

}

let filterByCity = () => {
    const city = document.getElementById('cityInput').value;
    if (city == '') {
      onload();
    } else {
        fetch(`https://localhost:44317/api/Locations/city?city=${city}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        })
            .then(response => {
                if (response.ok) {
                    console.log("get reports list by city successfully");
                    return response;
                }
            }).then(response => response.json())
            .then(data => {
                sortLocations(data);
                drawLocations(data);
            })
            .then(error => {
                console.log(error);
            });
    
    }
}



document.getElementById('cityInput').addEventListener(
    'change', filterByCity
);

window.onpageshow = onload();

