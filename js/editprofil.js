window.onload = function () {
    var storedFirstName = localStorage.getItem("firstName");
    var storedLastName = localStorage.getItem("lastName");
    var storedPhoneNumber = localStorage.getItem("phoneNumber");
    var storedStudent = localStorage.getItem("student");
    var storedLocation = localStorage.getItem("location");
    if (storedFirstName) {
        document.getElementById("firstName").textContent = storedFirstName;
    }
    if (storedLastName) {
        document.getElementById("lastName").textContent = storedLastName;
    }
    if (storedPhoneNumber) {
        document.getElementById("phoneNumber").textContent = storedPhoneNumber;
    }
    if (storedStudent) {
        document.getElementById("student").textContent = storedStudent;
    }
    if (storedLocation) {
        document.getElementById("location").textContent = storedLocation;
    }
};

document.getElementById("saveChanges").onclick = function () {
    var firstName = document.getElementById("editFirstName").value;
    var lastName = document.getElementById("editLastName").value;
    var phoneNumber = document.getElementById("editPhoneNumber").value;
    var student = document.getElementById("editStudent").value;
    var location = document.getElementById("editLocation").value;
    
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("student", student);
    localStorage.setItem("location", location);

    window.location.reload();
};