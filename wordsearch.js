const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    let newMatrix = [];
    let tempArray = [];
    const yLength = letters.length;
    const xLength = letters[0].length;
    
    for (let x = 0; x < xLength; x++){
        for (let y = 0; y < yLength; y++){
        tempArray.push(letters[y][x]);
        }
        newMatrix.push(tempArray);
        tempArray = [];
    } 

    const verticalJoin = newMatrix.map(lx => lx.join(''))
    //console.log(verticalJoin)

    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }

    

    let tempBackArray = [];
    let backwardArray = [];
    
    //console.log(xLength, yLength);
    for(let y = 0; y <= yLength - 1; y++ ){
        //console.log(`this is y: ${letters[y]}`)
        for (let x = xLength -1; x >= 0; x--){
            //console.log(`this is x: ${x}`)
            tempBackArray.push(letters[y][x]);
        }
        backwardArray.push(tempBackArray);
        tempBackArray = [];
    } //console.log(backwardArray);

    const backwardJoin = backwardArray.map(lb => lb.join(''))
    
    for (l of backwardJoin) {
        if (l.includes(word)) return true
    }


    return false;

}


// wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'PAW')


module.exports = wordSearch