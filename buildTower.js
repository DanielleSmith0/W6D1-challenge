//We need the loop to stop running after a certain number. Add a variable to keep track and be the condition for a while loop.
//It needs to retunr on a new line each time.
const towerBuilder = (number) => {
    let loopCounter = 1 
    let blockTower = ['*'];
    while (loopCounter < number) {
        let blockTowerStr = " " + JSON.stringify(blockTower.length) + "*"
        blockTower.push(blockTowerStr)
        loopCounter += 1
    }
    return blockTower
}

console.log(towerBuilder(4))

//Didn't work. I received numbers instead of more * and did not give the indexes their own lines.

//Answer walkthrough:
function makeTower(n) {

    //make an empty array that will be my return
    //when it is filled
    let answer = []

    //for each row, come up with a formula
    for (let i = 0; i < n; i++) {

        //for how many spaces,
        // spaces on one side = ((((n - 1) * 2) + 1) - (i * 2) + 1) / 2
//NOTE to students: the following formula can likely be dramatically simplified...
        //let spaceLength = (((((n - 1) * 2) + 1) - (i * 2) + 1) / 2) - 1
        //simplified:
        let spaceLength = n - i - 1 

        let spaceString = ''
        for (let k = 0; k < spaceLength; k++) {
            spaceString += ' '
        }

        //how many stars,
        // the amount of starts is (i * 2) + 1
        let starLength = (i * 2) + 1
        let starString = ''
        for (let k = 0; k < starLength; k++) {
            starString += '*'
        }

        //and how many spaces there are
        //this is the same as the first amount of spaces
        //do nothing: we already have this variable

        //then concatentate them
        //and push them to my answer array
        answer.push(spaceString + starString + spaceString)
    }

    //return answer array
    return answer
}

console.log(makeTower(6))
