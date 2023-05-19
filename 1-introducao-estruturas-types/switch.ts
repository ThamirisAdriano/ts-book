let listColor: string[] = ['white', 'blue', 'pink', 'orange','purple'];
let listHex: string[] = ['#FFFFFF', '#0000FF', '#FFC0CB', '#FFA500', '#800080']
let hex = 'white'
function converToHex(hex:string): void {
    switch(hex){
        case 'white':
            console.log(listHex[0])
            break;
        case 'blue':
            console.log(listHex[1])
            break;
         case 'pink':
            console.log(listHex[2])
            break;
        case 'orange':
            console.log(listHex[3])
            break;
        case 'purple':
            console.log(listHex[4])
            break;
        default:
            console.log(`Não temos a cor ${hex}`)
       
    }
}
console.log(converToHex('purple'))