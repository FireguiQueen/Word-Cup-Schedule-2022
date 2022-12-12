function CreatSchedule(){
    return`
        <div class="card"> 
        <h2> 11/24 <span class="DayOfTheWeek">thursday</span></h2>
            <ul> 
                <li>
                    <img src="./assets/icons/brazil.svg" alt="Brazil's flag icon" />  
                    <strong> 06:30 </strong> 
                    <img src="./assets/icons/serbia.svg" alt="Seria's flag icon" /> 
                </li>
            </ul> 
        </div>
    `
}



var calendar = document.querySelector('#cartoes')

calendar.innerHTML = `
<main id="cards"> 
    ${CreatSchedule()}
    ${CreatSchedule()}
</main> 
`