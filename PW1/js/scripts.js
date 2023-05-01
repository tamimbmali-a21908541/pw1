//A aplicação tem um botão darkmode que configura o layout do site através dum script

let holdingcontanier = document.querySelector('.holdingcontanier');
let dayNight = document.querySelector('.dayNight');
dayNight.onclick = function () {
    holdingcontanier.classList.toggle('night')
}

  

const expression = document.querySelector('.expression');
const btnCalculate = document.querySelector('.btn-calculate');
const btnClear = document.querySelector('.btn-clear');
const result = document.querySelector('.result');

btnCalculate.addEventListener('click', () => {
  try {
    const value = eval(expression.value);
    result.textContent = `Result: ${value}`;
  } catch (error) {
    result.textContent = 'Invalid expression';
  }
});

btnClear.addEventListener('click', () => {
  expression.value = '';
  result.textContent = '';
});



document.getElementById("inspiration-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const userSentence = document.getElementById("inspired-sentence").value;
    const displaySentence = document.getElementById("user-sentence");
  
    displaySentence.textContent = userSentence;
    displaySentence.classList.remove("hidden");
  });


  document.getElementById("inspiration-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const userSentence = document.getElementById("inspired-sentence").value;
    const displaySentence = document.getElementById("user-sentence");
  
    displaySentence.textContent = userSentence;
    displaySentence.classList.remove("hidden");
  });

  // Display the current date
  const currentDate = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const formattedDate = `${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
  document.getElementById("current-date").textContent = formattedDate;



  document.getElementById("name-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const userName = document.getElementById("user-name").value;
    const nameSpans = document.getElementsByClassName("user-name");
  
    for (let i = 0; i < nameSpans.length; i++) {
      nameSpans[i].textContent = userName;
    }
  });
  
  
