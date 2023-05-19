var listColor = ['white', 'blue', 'pink', 'orange', 'purple'];
var listHex = ['#FFFFFF', '#0000FF', '#FFC0CB', '#FFA500', '#800080'];
var hex = 'white';
function converToHex(hex) {
    switch (hex) {
        case 'white':
            console.log(listHex[0]);
            break;
        case 'blue':
            console.log(listHex[1]);
            break;
        case 'pink':
            console.log(listHex[2]);
            break;
        case 'orange':
            console.log(listHex[3]);
            break;
        case 'purple':
            console.log(listHex[4]);
            break;
        default:
            console.log("N\u00E3o temos a cor ".concat(hex));
    }
}
// console.log(converToHex('pink'))
