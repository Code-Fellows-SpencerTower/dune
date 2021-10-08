// function getUserName() {
//     let userName = prompt('Please enter your name:');
//     console.log(userName);
//     return userName;
// }


// function addUserNameToDoc(name) {
//     document.write('<h2> Welcome ' + name + '</h2>');
// }

// function exploreArrakis() {
//     let explore = prompt('Would you like to explore Arrakis?');
//     console.log(exploreArrakis);
//     if(explore == 'yes') {
//         let url = "images/Arrakeen_Palace.webp";
//         document.write('<img id="arrakeen_palace" src="' + url + '">');
//     }

// function exploreCaladan() {
//     let explore = prompt('Would you like to explore Caladan?');
//     console.log(exploreCaladan);
//     if(explore == 'yes') {
//         let url = "images/caladan_shoreline.jpg";
//         document.write('<img id="caladan_shoreline" src="' + url + '">')
//     }
// }

// function exploreArrakis(){
//     const answers = ['yes', 'no']
//     let explore = prompt('Would you like to explore Arrakis?');

//     while (!(explore in answers)){
//         explore = prompt('Please resopnd yes or no:');
//     }
// }

// while (explore != 'yes' || explore != 'no'){
//    explore = prompt('Please resopnd yes or no:');


function joinHouse(){
    let houseChoice = prompt('Would you like to join House Atreides or House Harkonnen?');

    while (houseChoice != 'Atreides' && houseChoice != 'Harkonnen'){
        houseChoice = prompt('Please enter Atreides or Harkonnen');
    }

    let numberChoice = prompt('Pick a number between 1 and 10:');

    while (numberChoice < 1 || numberChoice > 10){
        numberChoice = prompt('Please try again: Enter a number between 1 and 10.');
    }
    if(numberChoice >= 1 && numberChoice <= 10 && houseChoice == 'Atreides'){
        for(let i = 1; i <= numberChoice; i++){
            let url = "images/house_atreides_logo.jpg";
            document.write('<img class="logos" src="' + url + '">');
            }
    } else if(numberChoice >= 1 && numberChoice <= 10 && houseChoice == 'Harkonnen'){
        for(let i = 1; i <= numberChoice; i++){
            let url = "images/house_harkonnen_logo.jpg";
            document.write('<img class="logos" src="' + url + '">');
            }
    }
}