/*

Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.


Write a function that takes the graph, as well as two of the individuals in our dataset, as its inputs and returns true if and only if they share at least one ancestor.

Sample input and output:
hasCommonAncestor(parentChildPairs, 3, 8) => false
hasCommonAncestor(parentChildPairs, 5, 8) => true
hasCommonAncestor(parentChildPairs, 6, 8) => true
hasCommonAncestor(parentChildPairs, 1, 3) => false

 */


function findNodesWithZeroAndOneParents(parentChildPairs) {
  // has no parrents
  let noPar = [];
  // has only one parrent
  let onePar = [];


  let map = {};
  for (let pair of parentChildPairs){
    let parrentIdx = pair[0];
    let childIdx = pair[1];


    if (map[parrentIdx] == undefined){
      map[parrentIdx] = [];
    }

    if (map[childIdx] == undefined){
      map[childIdx] = [childIdx];
    } else {
      map[childIdx].push(childIdx);
    }
  }

  for (let key of Object.keys(map)){
    if (map[key].length == 0){
      noPar.push(parseInt(key));
    }
    if (map[key].length == 1){
      onePar.push(parseInt(key));
    }
  }

  return [noPar, onePar];
}

var parentChildPairs = [
  [1, 3], [2, 3], [3, 6], [11, 1], [11, 2],
  [5, 6], [5, 7], [4, 5], [4, 8], [8, 10]
];

//       11
//       / \
//      1   2   4
//       \ /   / \
//        3   5   8
//         \ / \   \
//          6   7   10

// let ret = findNodesWithZeroAndOneParents(parentChildPairs);
//console.log(ret);

// mat
//   1  2  3  4  5  6  7  8  9 10 11
// 1                               t
// 2                               t
// 3 t  t
// 4
// 5          t
// 6       t     t
// 7             t
// 8          t
// 9
// 10                     t
// 11

function hasCommonAncestor(parentChildPairs, indOne, indTwo){
  let mat = [];
  let max = parentChildPairs[0][0];
  // get max node
  for (var pair of parentChildPairs){
    if (pair[0] > max) max = pair[0];
    if (pair[1] > max) max = pair[1];
  }
  // build matrix
  for (var i = 0; i < max+1; i++){
    let row = [];
      for (var j = 0; j < max+1; j++){
        row.push(0);
      }
    mat.push(row);
  }
  // populate matrix
  for (var pair of parentChildPairs){
    let col = pair[0];
    let row = pair[1];
    mat[row][col] = 1;
  }
  // get anc
  let ansOne = populateAncestors(indOne, mat);
  let ansTwo = populateAncestors(indTwo, mat);
  let short, long;
  if (Object.keys(ansOne).length > Object.keys(ansTwo).length ){
    short = ansTwo;
    long = ansOne;
  } else {
     long = ansTwo;
     short = ansOne;
  }
  // find common ancestor
  return Object.keys(short).filter(k => k in long).length > 0;
}

function populateAncestors(startIdx, mat, ans){
  if (ans === undefined) ans = {};
  let curRow = mat[startIdx];
  console.log(startIdx , '-',curRow);

  for (var i in curRow){
    let el = curRow[i];
    if (el){
      console.log(i);

      ans[i] = 1;
      populateAncestors(i, mat, ans);
    }
  }
  return ans;
}

console.log(hasCommonAncestor(parentChildPairs, 3, 6));

