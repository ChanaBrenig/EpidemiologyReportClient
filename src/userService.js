import { Patient } from "./classes";


fetch(`http://localhost:12395/api/User/${patient.id}` , {
    method: "POST",
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(report),
})
    .then(response => {
        if (response.ok) {
            alert("report added successfully");
        }
        else
            response.json().then(error => {
                    alert(JSON.stringify(error.errors))
            })
    });