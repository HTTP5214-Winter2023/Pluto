//default score
let score1 = getCookie('score1') || 0;
let score2 = getCookie('score2') || 0;

document.getElementById('score1').textContent = score1;
document.getElementById('score2').textContent = score2;
updateWinner();

//update score by users
function incrementScore(id) {
  if (id === 'score1') {
    score1++;
    document.getElementById('score1').textContent = score1;
    setCookie('score1', score1);
  } else {
    score2++;
    document.getElementById('score2').textContent = score2;
    setCookie('score2', score2);
  }
  updateWinner();
}

//shows outcome
function updateWinner() {
  if (score1 > score2) {
    document.getElementById('winner').textContent = 'White';
  } else if (score1 < score2) {
    document.getElementById('winner').textContent = 'Black';
  } else {
    document.getElementById('winner').textContent = 'Tie';
  }
}

// set cookies
function setCookie(name, value) {
  document.cookie = name + '=' + value + ';path=/';
}

// get cookies
function getCookie(name) {
  let cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring((name + '=').length, cookie.length);
    }
  }
  return null;
}

function resetPage() {
  // clear cookies
  document.cookie = "score1=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "score2=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  // reload page
  location.reload();
}
