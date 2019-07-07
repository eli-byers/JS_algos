
// grid numbers


// quadrant populate order

// [ 1 , 6 , 5 ,
//   9 , 2 , 7 ,
//   4 , 8 , 3 ]

// quadrents to check per population
// 0 , 0 , 0 , 2 , 2 , 3 , 3 , 4 , 4

// A point in the grid
function Coordinate(x, y){
    this.x = x
    this.y = y
}

// A 3x3 grid (nested array) containing Coordinates
function Quadrant(x,y){
    this.points = [
        [new Coordinate(x-1,y-1), new Coordinate(x,y-1), new Coordinate(x+1,y-1)],
        [new Coordinate(x-1,y),   new Coordinate(x,y),   new Coordinate(x+1,y)],
        [new Coordinate(x-1,y+1), new Coordinate(x,y+1), new Coordinate(x+1,y+1)],
    ]
}

function Sudoku() {
    // number of times a quadrant can fail to populate before repopulating previous quadrant
    this.maxFails = 50
    // 9x9 nested array of 0s
    this.grid = Array(9).fill(``).map(x => Array(9).fill(0))
    // the order of quadrent population
    this.populateOrder = [
        // diagonal - no collisions
        new Quadrant(1,1), new Quadrant(4,4), new Quadrant(7,7), 
        // other corners - 2 collisions
        new Quadrant(1,7), new Quadrant(7,1), 
        // first two sides - 3 collisions
        new Quadrant(4,1), new Quadrant(7,4), 
        // last two sides - 4 collisions
        new Quadrant(4,7), new Quadrant(1,4)
    ]
    this.populateGrid()
    this.displayGrid()
}

Sudoku.prototype.displayGrid = function () {
    console.log(this.grid)
}

Sudoku.prototype.oneToNine = function () {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle()
}

Sudoku.prototype.populateGrid = function () {
    let grid = this.grid
    let populateOrder = this.populateOrder

    // number of times each quadrant has failed
    let failCounts = Array(9).fill(0)

    let curQuadIdx = 0
    while (curQuadIdx < populateOrder.length) {
        let quadrant = populateOrder[curQuadIdx]
        
        // go back up a level if over maxFail
        if (failCounts[curQuadIdx] > this.maxFails){
            failCounts[curQuadIdx] = 0

            // don't go too far back
            if (curQuadIdx == 0){
                continue
            }

            // 
            failCounts[curQuadIdx-1]++
            curQuadIdx -= 1
            this.clearQuadrent(quadrant)
            continue
        }
        
        // first three diaganal quadrents are safe
        if (curQuadIdx <= 2){
            this.forceFillQuadrent(quadrant)
        }

        // rest need to be checked
        else {

            // count current quadrant fails
            let valid = this.checkFillQuadrent(quadrant)
            while (!valid && failCounts[curQuadIdx] < this.maxFails){
                failCounts[curQuadIdx]++
                valid = this.checkFillQuadrent(quadrant)
            }

            // if over fail count reset count, and retry previous
            if (!valid){
                failCounts[curQuadIdx] = 0
                failCounts[curQuadIdx-1]++
                curQuadIdx -= 1
                this.clearQuadrent(quadrant)
                continue
            }
        }

        // valid solution found
        curQuadIdx += 1     
    }
    return true
}

// fill a quadrent with 0s
Sudoku.prototype.clearQuadrent = function (quadrant) {
    let grid = this.grid
    for (var y = 0; y < 3; y++){
        let row = quadrant.points[y]
        for (var x = 0; x < 3; x++){
            let cordinate = row[x]
            grid[cordinate.y][cordinate.x] = 0
        }
    }
}

// fill a quadrent without checking row and col values
Sudoku.prototype.forceFillQuadrent = function (quadrant) {
    let grid = this.grid
    let numArr = this.oneToNine()
    for (var y = 0; y < 3; y++){
        let row = quadrant.points[y]
        for (var x = 0; x < 3; x++){
            let cordinate = row[x]
            grid[cordinate.y][cordinate.x] = numArr.pop()
        }
    }
}

// fill a quadrent and check row and col values
Sudoku.prototype.checkFillQuadrent = function (quadrant) {
    let grid = this.grid
    
    // make used arrays for cols
    let usedInCols = []
    for (var i = 0; i < 3; i++){
        let col = quadrant.points[0][i].x
        usedInCols.push(this.usedInCol(col))
    }
    
    // make used arrays for rows
    let usedInRows = []
    for (var i = 0; i < 3; i++){
        let col = quadrant.points[i][0].y
        usedInRows.push(this.usedInRow(col))
    }
    
    // populate quadrant
    let numArr = this.oneToNine()
    let save = []    

    // for every row in quadrant
    for (var y = 0; y < 3; y++){
        let usedInRow = usedInRows[y]
        let row = quadrant.points[y]

        // for every col in row
        for (var x = 0; x < 3; x++){
            let usedInCol = usedInCols[x]
            let cordinate = row[x]

            // keep poping numbers until valid
            while(numArr.length > 0){
                let num = numArr.pop()

                // if used, save for later
                if ( usedInRow.includes(num) || usedInCol.includes(num) ){
                    save.push(num)
                
                    // if there are no more nums, there is no valid solution
                    if (numArr.length == 0){
                        return false
                    }
                } 

                // if not used, insert and go to next coordinate
                else {
                    grid[cordinate.y][cordinate.x] = num
                    break
                }

            }

            // put saved nums back into num pool
            numArr = numArr.concat(save)
            save = []
        }
    }

    return true
}

// returns array of values in given grid column
Sudoku.prototype.usedInCol = function (colIdx) {
    let grid = this.grid
    let used = []
    for (var i = 0; i <= 8; i++){
        let num = grid[i][colIdx]
        if (num > 0){
            used.push(num)
        }
    }
    return used
}

// returns array of values in given grid row
Sudoku.prototype.usedInRow = function (rowIdx) {
    let grid = this.grid
    let used = []
    for (var i = 0; i <= 8; i++){
        let num = grid[rowIdx][i]
        if (num > 0){
            used.push(num)
        }
    }
    return used
}

Array.prototype.removeVals = function (vals) {
    remove = {}
    for (var i = 0; i < vals.length; i++) {
        remove[vals[i]] = true
    }

    f = -1
    l = 0
    while (l < this.length) {
        if (!remove[this[l]]) {
            f++
            this.swap(f, l)
        }
        l++
    }
    this.length = ++f
    return this
}

Array.prototype.shuffle = function () {
    for (var i = this.length - 1; i > 0; i--) {
        let randIndx = Math.floor(Math.random() * (i + 1))
        this.swap(i, randIndx)
    }
    return this
}

Array.prototype.swap = function (n1, n2) {
    if (n1 != n2) {
        [this[n1], this[n2]] = [this[n2], this[n1]]
    }
    return this
}

// all values become keys with values of true
Array.prototype.toDict = function () {
    let dict = {}
    for (var i = 0; i < this.length; i++){
        dict[this[i]] = true
    }
    return dict
}

s = new Sudoku()