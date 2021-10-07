function getUserName() {
    let userName = prompt('Please enter your name:');
    console.log(userName);
    return userName;
}


function addUserNameToDoc(name) {
    document.write('<h2> Welcome ' + name + '</h2>');
}


function exploreArrakis() {
    let explore = prompt('Would you like to explore Arrakis?');
    console.log(exploreArrakis);
    if(explore == 'yes') {
        let url = "images/Arrakeen_Palace.webp";
        document.write('<img id="arrakeen_palace" src="' + url + '">');
    }
}


function exploreCaladan() {
    let explore = prompt('Would you like to explore Caladan?');
    console.log(exploreCaladan);
    if(explore == 'yes') {
        let url = "images/caladan_shoreline.jpg";
        document.write('<img id="caladan_shoreline" src="' + url + '">')
    }
}

