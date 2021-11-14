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
//         document.write('<img id="caladan_shoreline" src="' + url + '">');
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


// ask user which house they want to join, then generate images of that house
// function joinHouse(){
//     let houseChoice = prompt('Would you like to join House Atreides or House Harkonnen?');

//     while (houseChoice != 'Atreides' && houseChoice != 'Harkonnen'){
//         houseChoice = prompt('Please enter Atreides or Harkonnen');
//     }

//     let numberChoice = prompt('Pick a number between 1 and 10:');

//     while (numberChoice < 1 || numberChoice > 10){
//         numberChoice = prompt('Please try again: Enter a number between 1 and 10.');
//     }
//     if(numberChoice >= 1 && numberChoice <= 10 && houseChoice == 'Atreides'){
//         for(let i = 1; i <= numberChoice; i++){
//             let url = "images/house_atreides_logo.jpg";
//             document.write('<img class="logos" src="' + url + '">');
//             }
//     } else if(numberChoice >= 1 && numberChoice <= 10 && houseChoice == 'Harkonnen'){
//         for(let i = 1; i <= numberChoice; i++){
//             let url = "images/house_harkonnen_logo.jpg";
//             document.write('<img class="logos" src="' + url + '">');
//             }
//     }
// }

// show images of planet on click

function showPlanetImages(){
    let url1 = "/images/Arrakeen_Palace.webp";
    let url2 = "/images/arrakis_desert.jpg";
    document.getElementById("arrakis_explore_div").innerHTML += '<img id="arrakeen_palace_img" class="arrakis_explore_images" src="' + url1 + '">' + '<img id="arrakis_desert_img" class="arrakis_explore_images" src="' + url2 + '">';
}

// // count number of clicks, remove images on second click
// function removeImages(){
//     let div = document.getElementById('arrakis_explore_div');
//     console.log(div);
//     let images = document.getElementsByClassName('');
//     console.log(images);
//     console.log(typeof(images));
//     images.remove();
// }

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    console.log(elements);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
        console.log(elements);
    }
}

// function countClicks(num){
//     console.log(num);
//     if (num > 0){
//         document.getElementById("arrakis_button").onclick= removeImages();
//     }
//     console.log(2);
// }

let imageDoc = './images';
for (let i = 0; i < imageDoc.length; i++){
    console.log(imageDoc);
}
