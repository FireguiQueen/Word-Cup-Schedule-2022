function CreatSchedule(date, day, team1, time, team2){
    return`
        <div class="card"> 
        <h2> ${date} <span class="DayOfTheWeek">${day}</span></h2>
            <ul> 
                <li>
                    <img src="./assets/icons/${team1}.svg" alt="${team1}'s flag icon" />  
                    <strong> 06:30 </strong> 
                    <img src="./assets/icons/${team2}.svg" alt="${team2}'s flag icon" /> 
                </li>
            </ul> 
        </div>
    `
}



var calendar = document.querySelector('#cartoes')

// DATE | DAY | TEAM 1 | TIME | TEAM 2 
calendar.innerHTML = `
<main id="cards"> 

    ${CreatSchedule('11/11', 'segunda', 'brazil', '11:30', 'serbia')}
    ${CreatSchedule('11/11', 'segunda', 'brazil', '11:30', 'serbia')}
</main> 
`