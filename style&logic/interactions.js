function CreatSchedule(date, day, games){
    return`
        <div class="card"> 
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
            <strong> 06:30 </strong> 
            <img src="./assets/icons/${team2}.svg" alt="${team2}'s flag icon" /> 
        </li>
    `
}



var calendar = document.querySelector('#cartoes')

// DATE | DAY | TEAM 1 | TIME | TEAM 2 
calendar.innerHTML = `
<main id="cards"> 

    ${CreatSchedule('11/11', 'monday', CreatGames('cameroon', '12:20', 'uruguai'))}
    ${CreatSchedule('11/11', 'monday', CreatGames('brazil', '16:30', 'switzerland') + CreatGames('brazil', '16:30', 'switzerland'))}
</main> 
`