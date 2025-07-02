const form = document.getElementById('poll-form');
const resultsDiv = document.getElementById('results');
const resultList = document.getElementById('result-list');

let votes = {
  JavaScript: 0,
  Python: 0,
  "C++": 0,
  Java: 0
};

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const selectedOption = formData.get('option');

  if (selectedOption) {
    votes[selectedOption]++;
    showResults();
  }
});

function showResults() {
  resultList.innerHTML = '';
  for (let option in votes) {
    const li = document.createElement('li');
    li.textContent = `${option}: ${votes[option]} vote(s)`;
    resultList.appendChild(li);
  }
  resultsDiv.classList.remove('hidden');
}
