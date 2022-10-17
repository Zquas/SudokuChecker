// 00,01,02, 03,04,05, 06,07,08
// 10,11,12, 13,14,15, 16,17,18
// 20,21,22, 23,24,25, 26,27,28

// 30,31,32, 33,34,35, 36,37,38
// 40,41,42, 43,44,45, 46,47,48
// 50,51,52, 53,54,55, 56,57,58

// 60,61,62, 63,64,65, 66,67,68
// 70,71,72, 73,74,75, 76,77,78
// 80,81,82, 83,84,85, 86,87,88
//==============================
let puzzle0 =   [[8,9,5,   7,4,2,   1,3,6 ],
                [ 2,7,1,   9,6,3,   4,8,5 ],
                [ 4,6,3,   5,8,1,   7,9,2 ],

                [ 9,3,4,   6,1,7,   2,5,8 ],
                [ 5,1,7,   2,3,8,   9,6,4 ],
                [ 6,8,2,   4,5,9,   3,7,1 ],

                [ 1,5,9,   8,7,4,   6,2,3 ],
                [ 7,4,6,   3,2,5,   8,1,9 ],
                [ 3,2,8,   1,9,6,   5,4,7 ]];

let puzzle1 =  [[ 8,9,5,   7,4,2,   1,3,6 ],
                [ 2,7,1,   9,6,3,   4,8,5 ],
                [ 4,6,3,   5,8,1,   7,9,2 ],

                [ 9,3,4,   6,1,7,   2,5,8 ],
                [ 5,1,7,   2,3,8,   9,6,4 ],
                [ 6,8,2,   4,5,9,   3,7,1 ],

                [ 1,5,9,   8,7,4,   6,2,3 ],
                [ 7,4,6,   3,2,5,   8,1,9 ],
                [ 3,2,8,   1,9,6,   5,4,7 ]];


let puzzle2 =   [[ 8,9,5, 7,4,2, 1,3,6 ],
                [ 8,7,1, 9,6,3, 4,8,5 ],
                [ 4,6,3, 5,8,1, 7,9,2 ],

                [ 9,3,4, 6,1,7, 2,5,8 ],
                [ 5,1,7, 2,3,8, 9,6,4 ],
                [ 6,8,2, 4,5,9, 3,7,1 ], 

                [ 1,5,9, 8,7,4, 6,2,3 ],
                [ 7,4,6, 3,2,5, 8,1,9 ],
                [ 3,2,8, 1,9,6, 5,4,7 ]];

function getRow(puzzle, row){
    let rowCopy = [];
    for(let i=0; i<puzzle.length; i++){
        rowCopy.push(puzzle[row][i]);
    }
    return rowCopy;
}

function getColumn(puzzle, col){
    let colCopy = [];
        for(let i=0; i<puzzle.length; i++){
            colCopy.push(puzzle[i][col]);
        }
    return colCopy;
    }

function getSection(puzzle, x, y){
    let subGrid = [];
    if(x<=2 && x>=0){
        if(y<=2 && y>=0){
            for(i=0; i<= 2; i++){
                for(j=0; j<= 2; j++){
                   subGrid.push(puzzle[j][i]);
                }
            }
            return subGrid;
        }
        else if(y<=5 && y>=3){
            for(i=3; i<=5; i++){
                for(j=3; j<=5; j++){
                   subGrid.push(puzzle[j][i]);
                }
            }
            return subGrid;
        }
        else if(y<=8 && y>=6){
            for(i=6; i<=8; i++){
                for(j=6; j<=8; j++){
                    subGrid.push(puzzle[j][i]);
                }
            }
            return subGrid;
        }
    }
    else if(x<=5 && x>=3){
        if(y<=2 && y>=0){
            for(i=0; i<=2; i++){
                for(j=3; j<=5; j++){
                    subGrid.push(puzzle[j][i]);
                }
            }
            return subGrid;
        }
        else if(y<=5 && y>=3){
            for(i=3; i<=5; i++){
                for(j=3; j<=5; j++){
                    subGrid.push(puzzle[j][i]);
                }
            }
            return subGrid;
        }
        else if(y<=8 && y>=6){
            for(i=6; i<=8; i++){
                for(j=3; j<=5; j++){
                    subGrid.push(puzzle[j][i]);
                }
            }
            return subGrid;
        }
    }
    else if(x<=8 && x>=6){
        if(y<=2 && y>=0){
            for(i=0; i<=2; i++){
                for(j=6; j<=8; j++){
                    subGrid.push(puzzle[j][i]);
                }
            }
            return subGrid;
        }
        else if(y<=5 && y>=3){
            for(i=3; i<=5; i++){
                for(j=6; j<=8; j++){
                    subGrid.push(puzzle[j][i]);
                }
            }
            return subGrid;
        }
        else if(y<=8 && y>=6){
            for(i=6; i<=8; i++){
                for(j=6; j<=8; j++){
                    subGrid.push(puzzle[j][i]);
                }
            }
            return subGrid;
        }
    }
}

// function noRepeats(grid){
//     let currentCopy = [];
//     for (let i = 0; i < grid.length; i++) {
//         let value = grid[i];
//         if (currentCopy.indexOf(value) !== -1) {
//             return false;
//         }
//         else {
//             currentCopy.push(value);
//         }
//     }
//     return true;
// }

function includes1to9(grid){
    for (let i=0; i<9; i++){
        if(!grid.includes(i+1)){
            return false;
        }
    }
    return true;
}

function sudokuIsValid(puzzle){
    let arr = [[0, 0], [0, 3], [0, 6], [3, 0], [3, 3], [3, 6], [6, 0], [6, 3], [6, 6]];
    for(i=0; i<9; i++){
        let currentRow = getRow(puzzle, i);
        let currentCol = getColumn(puzzle, i);
        let currentGrid = getSection(puzzle, arr[i][0], arr[i][1]);
        if(includes1to9(currentRow) && includes1to9(currentCol) && includes1to9(currentGrid)){
            continue;
        }
        else{
            document.write("sudokuIsNotValid");
            return false;
        }
    }
    document.write("sudokuIsValid");
}

function isSame(puzzle1, puzzle2){
    for(i=0; i<9; i++){
        let currentRow1 = getRow(puzzle1, i);
        let currentCol1 = getColumn(puzzle1, i);
        let currentRow2 = getRow(puzzle2, i);
        let currentCol2 = getColumn(puzzle2, i);
        if(currentRow1 != currentRow2 || currentCol1 != currentCol2){
            return false;
        }
    }
    return true;
}

sudokuIsValid(puzzle0);