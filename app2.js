let exploreArrakis = prompt('Would you like to explore Arrakis?');
console.log(exploreArrakis);

if(exploreArrakis == 'yes'){
    let url = "images/Arrakeen_Palace.webp";
    document.write('<img id="arrakeen_palace" src="' + url + '">');
}