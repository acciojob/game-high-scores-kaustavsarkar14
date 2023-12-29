// complete the JS code

const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");



const tableData = []

// Save score to Local Storage
function saveScore() {
  // complete the code here
  showScores();
} 

// Show scores in div
function showScores() {
  // complete the code
	console.log("scores")
	scores.innerHTML = ''
	const table = document.createElement('table')
	table.innerHTML = "
			<thead>
				<tr>
					<th>Name</th>
					<th>Score</th>
				</tr>
			</thead>
	"
	scores.appendChild(table)
}
