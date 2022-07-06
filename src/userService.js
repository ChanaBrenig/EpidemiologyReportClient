import { Patient } from "./classes";

export const PostLocation=(patientId,report)=>{
fetch(`http://localhost:44317/api/User/${patientId}` , {
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
}