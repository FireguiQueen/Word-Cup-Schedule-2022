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


var CreatSchedules = document.querySelector('#cartoes')
CreatSchedules.innerHTML = 
CreatSchedule('11/12', 'Monday', CreatGames('brazil', '15:20', 'uruguai') + CreatGames('switzerland', '12:20', 'portugal')) +
CreatSchedule('23/12', 'Tuesday', CreatGames('brazil', '15:20', 'uruguai')) + 
CreatSchedule('15/12', 'Friday', CreatGames('brazil', '15:20', 'uruguai')) + 
CreatSchedule('18/12', 'Saturday', CreatGames('brazil', '15:20', 'uruguai'))

// CreatSchedule('11/11', 'monday', CreatGames('cameroon', '16:30', 'uruguai')) +
// CreatSchedule('11/11', 'monday', CreatGames('brazil', '16:30', 'switzerland') + CreatGames('brazil', '16:30', 'switzerland'))



var page_color = document.getElementsByTagName('body')[0];

function ChangeColor(ButtonColor){ 
    page_color.style.animation = 'visibility 2s forwards';
    page_color.setAttribute('class', `${ButtonColor}`);
}
