// Add an event listener for the form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting

    // Correct answers for each question
    const correctAnswers = {
        ques1: 'Ottawa',
        ques2: 'Mars',
        ques3: 'Neil Armstrong',
        ques4: 'Pacific ocean',
        ques5: 'Nile'
    };

    let score = 0;

    // Check each question
    for (let i = 1; i <= 5; i++) {
        // Get the selected answer for each question
        const selectedOption = document.querySelector(`input[name="ques${i}"]:checked`);
        
        // If the answer is correct, increment the score
        if (selectedOption && selectedOption.value === correctAnswers[`ques${i}`]) {
            score++;
        }
    }

    // Display the score
    alert(`You scored ${score} out of 5.`);
});
