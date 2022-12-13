let atraso = -0.2

function CreatSchedule(date, day, games){
    atraso += 0.2;
    return`
        <div class="card" style="animation-delay: ${atraso}s"> 
        <h2> ${date} <span class="DayOfTheWeek">${day}</span></h2>
            <ul> 
                ${games}
            </ul> 
        </div>
    `
}

function CreatGames(team1, time, team2){
    return`
        <li>
            <img src="./assets/icons/${team1}.svg" alt="${team1}'s flag icon" />  
            <strong> ${time} </strong> 
            <img src="./assets/icons/${team2}.svg" alt="${team2}'s flag icon" /> 
        </li>
    `
}


var calendar = document.querySelector('#cartoes')

calendar.innerHTML = 
CreatSchedule('11/12', 'segunda', CreatGames('brazil', '15:20', 'uruguai') + CreatGames('switzerland', '12:20', 'portugal')) +
CreatSchedule('11/12', 'segunda', CreatGames('brazil', '15:20', 'uruguai')) + 
CreatSchedule('11/12', 'segunda', CreatGames('brazil', '15:20', 'uruguai')) + 
CreatSchedule('11/12', 'segunda', CreatGames('brazil', '15:20', 'uruguai'))

// CreatSchedule('11/11', 'monday', CreatGames('cameroon', '16:30', 'uruguai')) +
// CreatSchedule('11/11', 'monday', CreatGames('brazil', '16:30', 'switzerland') + CreatGames('brazil', '16:30', 'switzerland'))



function ChangeColor(){ 
    var ide = document.getElementsByTagName('main')[0];
    ide.setAttribute('class', 'blue');
}