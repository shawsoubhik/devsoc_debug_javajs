
let secretNumber = Math.trunc(20 * Math.random() + 1);
let highscore = 0;
let time = [0, 0] ;


document.querySelector(".m_again").addEventListener("Click", function () {
    time = [0,0];
    secretNumber =Math.trunc(20 * Math.random() + 1);
    document.querySelector('.m_score').textContent = '20';
    document.querySelector('.m_guess').value = '1';
    document.getElementById('timer').innerHTML = "0:0";
    document.querySelector('.m_check').style.backgroundColor = '#f1356d';
    

});

document.querySelector('.m_check').addEventListener('Click', () => {

    let guess = document.querySelector('.m_guess').value;
  
    let timer =  setInterval(() => {
        time[1] ++ ;
        if (time[1] % 60 == 0) {
            time[0] ++ ;
                    } 
     document.getElementById("timer").innerHTML = ` ${time[0]} : ${time[1]} `
       
    }, 1000 );
     
    this.style.backgroundColor = 'black';

    if (!guess) {
        document.querySelector(".m_message").textContent = "Not a Valid input";
    }
    else if (guess == secretNumber) {
        document.querySelector(".m_message").textContent = "You guessed it Right";
        document.querySelector('.m_number').style.width = '30rem'
        document.querySelector("body").style.backgroundcolor = 'green';
        document.querySelector('.m_number').textContent = secretNumber;
        if (highscore < document.querySelector('.m_score').textContent) highscore = document.querySelector('.m_score').textContent;
        
        document.querySelector('.m_highscore').textContent = highscore;
    }
    else if (guess > secretNumber) {
        document.querySelector(".m_message").textContent = "Too high";
        document.querySelector('.m_score').textContent--;
       

    }


    else {
        document.querySelector(".m_message").textContent = "Too low ";
        document.querySelector('.m_score').textContent--;
    }

    if (document.querySelector('.m_score').textContent <= 0) {
        document.querySelector(".m_message").textContent = "You lost the Game";
        clearInterval(timer);
        document.getElementById('timer').innerHTML = '';
        document.getElementById('#hiddenresult').textContent = secretNumber;
        this.style.backgroundColor = '#f1356d';
    }

});
