function calculateAge() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    if (!day || !month || !year) {
        alert("Please fill in all the fields.");
        return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 0) {
        document.getElementById("result").innerHTML = "Invalid date of birth.";
    } else {
        document.getElementById("result").innerHTML = `Your age is ${age} years.`;
    }
}
