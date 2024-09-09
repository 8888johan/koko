function calculateTotal() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const steps = document.getElementById('steps').value;
    const calories = document.getElementById('calories').value;
    const duration = document.getElementById('duration').value;

    if (!name || !age || !weight || !steps || !calories || !duration) {
        document.getElementById('summary-text').innerText = "Please fill all the fields.";
        return;
    }

    const summaryText = `Name: ${name}, Age: ${age}, Weight: ${weight}kg\n
                         Steps Taken: ${steps}\n
                         Calories Burned: ${calories}kcal\n
                         Exercise Duration: ${duration} minutes`;
    
    document.getElementById('summary-text').innerText = summaryText;
}
