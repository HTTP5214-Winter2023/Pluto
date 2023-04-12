const sportsApp = {}

sportsApp.init = function () {
  // sportsApp.getStandings();
  sportsApp.getTeamStats();
};

sportsApp.getTeamStats = function () {
  fetch('https://api.sportsdata.io/v3/nba/scores/json/teams?key=61215cbc49214cf8bd01128960a45b2c')
    // const standingStats = await fetch('https://api.sportsdata.io/v3/nba/scores/json/Standings/2023?key=61215cbc49214cf8bd01128960a45b2c');
    // const data1 = await teamStats.json();
    // const data2 = await standingStats.json()
    // console.log(data1, data2)
    //sportsApp.showTeamStats(data1, data2);

  // } catch(error) {
  //   console.error(error)
  // }
    .then(function (response) {
      return response.json();
    })
    .then(function (results) {
      console.log('teamStats', results)
      sportsApp.showTeamStats(results);
      sportsApp.searchTeam(results);
      // sportsApp.showTeams(results);
      // sportsApp.showGames(results);
      // sportsApp.resetSport(results);
    });
};

sportsApp.showTeamStats = function(teamList, conferenceList) {
  let sportsCard = document.querySelector(".sports-cards")
  for (let i = 0; i < teamList.length; i++) {
         let cardImage = document.createElement("div");
         let cardInfo = document.createElement("div");
         let cardStats = document.createElement("div");
         let card = document.createElement("div");
         card.appendChild(cardImage);
         card.appendChild(cardInfo);
         card.appendChild(cardStats);
         sportsCard.appendChild(card);
         cardImage.className = "card-image";
         cardInfo.className = "card-text";
         cardStats.className = "card-stats";
         card.className = "card";

          let img = document.createElement("img");
          img.src = `${teamList[i].WikipediaLogoUrl}`;
          cardImage.appendChild(img);
            
          if (teamList[i].Conference == "Eastern") {
          cardImage.classList.add("Eastern");
          } else if(teamList[i].Conference == "Western") {
            cardImage.classList.add("Western")
          }

          let textTeam = document.createElement("h2");
          textTeam.innerHTML = `${teamList[i].City} ${teamList[i].Name}`;
          cardInfo.appendChild(textTeam);


          let ConferenceContainer = document.createElement("div");
          ConferenceContainer.className = "stat";
          cardStats.appendChild(ConferenceContainer);
          let conferenceValue = document.createElement("div");
          conferenceValue.className = "value";
          conferenceValue.innerHTML = `${teamList[i].Conference}`;
          ConferenceContainer.appendChild(conferenceValue);
          let conferenceText = document.createElement("div");
          conferenceText.className = "value-text";
          conferenceText.innerHTML = "conference";
          ConferenceContainer.appendChild(conferenceText);

          let divisionContainer = document.createElement("div");
          divisionContainer.className = "stat";
          cardStats.appendChild(divisionContainer);
          let divisionValue = document.createElement("div");
          divisionValue.className = "value";
          divisionValue.innerHTML = `${teamList[i].Division}`;
          divisionContainer.appendChild(divisionValue);
          let divisionText = document.createElement("div");
          divisionText.className = "value-text";
          divisionText.innerHTML = "division";
          divisionContainer.appendChild(divisionText);
  // for(let i = 0; i < teamList.length; i++) {
  //   let cardImage = document.createElement("div");
  //   let card = document.createElement("div");
  //   card.appendChild(cardImage);
  //   sportsCard.appendChild(card);
  //   cardImage.className = "card-image";
  //   card.className = "card";

  //   let img = document.createElement("img");
  //   img.src = `${teamList[i].WikipediaLogoUrl}`;
  //   cardImage.appendChild(img);

  //    for(let j = 0; j < conferenceList.length; j++) {
  
  //   let cardInfo = document.createElement("div");
  //   let cardStats = document.createElement("div");
  //   card.appendChild(cardInfo);
  //   card.appendChild(cardStats);
  //   cardInfo.className = "card-text";
  //   cardStats.className = "card-stats";
    
  //   let textTeam = document.createElement("h2");
  //   textTeam.innerHTML = `${conferenceList[j].City} ${conferenceList[j].Name}`;
  //   cardInfo.appendChild(textTeam);
  // }
}
  // for(let j = 0; j < conferenceList.length; j++) {
  //   let cardInfo = document.createElement("div");
  //   let cardStats = document.createElement("div");
  //   let card = document.createElement("div");
  //   card.appendChild(cardInfo);
  //   card.appendChild(cardStats);
  //   sportsCard.appendChild(card);
  //   cardInfo.className = "card-text";
  //   cardStats.className = "card-stats";
  //   card.className = "card";

  //         let textTeam = document.createElement("h2");
  //         textTeam.innerHTML = `${conferenceList[j].City} ${conferenceList[j].Name}`;
  //         cardInfo.appendChild(textTeam);

          // let ConferenceContainer = document.createElement("div");
          // ConferenceContainer.className = "stat";
          // cardStats.appendChild(ConferenceContainer);
          // let conferenceValue = document.createElement("div");
          // conferenceValue.className = "value";
          // conferenceValue.innerHTML = `${conferenceList[j].Conference}`;
          // ConferenceContainer.appendChild(conferenceValue);
          // let conferenceText = document.createElement("div");
          // conferenceText.className = "value-text";
          // conferenceText.innerHTML = "conference";
          // ConferenceContainer.appendChild(conferenceText);

          // let divisionContainer = document.createElement("div");
          // divisionContainer.className = "stat";
          // cardStats.appendChild(divisionContainer);
          // let divisionValue = document.createElement("div");
          // divisionValue.className = "value";
          // divisionValue.innerHTML = `${conferenceList[j].Division}`;
          // divisionContainer.appendChild(divisionValue);
          // let divisionText = document.createElement("div");
          // divisionText.className = "value-text";
          // divisionText.innerHTML = "division";
          // divisionContainer.appendChild(divisionText);

          // let rankContainer = document.createElement("div");
          // rankContainer.className = "stat";
          // cardStats.appendChild(rankContainer);
          // let rankValue = document.createElement("div");
          // rankValue.className = "value";
          // rankValue.innerHTML = `${conferenceList[j].ConferenceRank}`;
          // rankContainer.appendChild(rankValue);
          // let rankText = document.createElement("div");
          // rankText.className = "value-text";
          // rankText.innerHTML = "conference rank";
          // rankContainer.appendChild(rankText);

  console.log(teamList, conferenceList);
    // for (let i = 0; i < teamList.length; i++) {
    //      let cardImage = document.createElement("div");
    //      let cardInfo = document.createElement("div");
    //      let cardStats = document.createElement("div");
    //      let card = document.createElement("div");
    //      card.appendChild(cardImage);
    //      card.appendChild(cardInfo);
    //      card.appendChild(cardStats);
    //      sportsCard.appendChild(card);
    //      cardImage.className = "card-image";
    //      cardInfo.className = "card-text";
    //      cardStats.className = "card-stats";
    //      card.className = "card";

    //       let img = document.createElement("img");
    //       img.src = `${teamList[i].WikipediaLogoUrl}`;
    //       cardImage.appendChild(img);

    //       let textTeam = document.createElement("h2");
    //       textTeam.innerHTML = `${teamList[i].City} ${teamList[i].Name}`;
    //       cardInfo.appendChild(textTeam);


    //       let ConferenceContainer = document.createElement("div");
    //       ConferenceContainer.className = "stat";
    //       cardStats.appendChild(ConferenceContainer);
    //       let conferenceValue = document.createElement("div");
    //       conferenceValue.className = "value";
    //       conferenceValue.innerHTML = `${teamList[i].Conference}`;
    //       ConferenceContainer.appendChild(conferenceValue);
    //       let conferenceText = document.createElement("div");
    //       conferenceText.className = "value-text";
    //       conferenceText.innerHTML = "conference";
    //       ConferenceContainer.appendChild(conferenceText);

    //       let divisionContainer = document.createElement("div");
    //       divisionContainer.className = "stat";
    //       cardStats.appendChild(divisionContainer);
    //       let divisionValue = document.createElement("div");
    //       divisionValue.className = "value";
    //       divisionValue.innerHTML = `${teamList[i].Division}`;
    //       divisionContainer.appendChild(divisionValue);
    //       let divisionText = document.createElement("div");
    //       divisionText.className = "value-text";
    //       divisionText.innerHTML = "division";
    //       divisionContainer.appendChild(divisionText);

    //       let rankContainer = document.createElement("div");
    //       rankContainer.className = "stat";
    //       cardStats.appendChild(rankContainer);
    //       let rankValue = document.createElement("div");
    //       rankValue.className = "value";
    //       rankValue.innerHTML = `${teamList[i].ConferenceRank}`;
    //       rankContainer.appendChild(rankValue);
    //       let rankText = document.createElement("div");
    //       rankText.className = "value-text";
    //       rankText.innerHTML = "conference rank";
    //       rankContainer.appendChild(rankText);
    // } 
}

  let searchBtn = document.querySelector(".submit");
  let resetBtn = document.querySelector(".clear")

  sportsApp.searchTeam = function(search) {
    console.log(search);
    searchBtn.addEventListener("click", function () {
      let clearPage = document.querySelector(".sports-cards");
      clearPage.innerHTML = "";
      searchBtn.style.display = "none";
      resetBtn.style.display = "block"

      let inputVal = document.getElementById("team").value;
      let filter = search.filter(function (sport) {
        return sport.City == inputVal || sport.Name == inputVal;
      });

      sportsApp.showTeamStats(filter);
    });
  }

    sportsApp.resetSport = function() {
        let clearPage = document.querySelector(".sports-cards");
        resetBtn.style.display = 'none';
        searchBtn.style.display = 'block';
      }

    resetBtn.addEventListener("click", function(){
      sportsApp.resetSport();
    })

  sportsApp.init();
