var q = require('./MPQ.js');

function printGraph(graph){
  str = "  ";
  ln = "  ";
  for (var l in graph){
    str += " "+l;
    ln += "__";
  }
  console.log('\x1b[53m', str ,'\x1b[0m');
  console.log('\x1b[32m', ln ,'\x1b[0m');
  for (l in graph){
    str = l +' \x1b[32m|\x1b[0m';
    for (var x in graph[l]){
      str += graph[l][x] >= 0 ? " "+graph[l][x] :" -";
    }
    console.log(str);
  }
}

function Dijkstra(graph, virt){
  var u = [], ret = [];
  // fill out unvisited and return arrays,
  // there are other ways to do this with less code but this is the mose efficient
  for (var i = 0; i < graph.length; i++){
    u.push(i);
    ret.push([Infinity, null]);
  }
  // fill out root index of result array
  ret[virt][0] = 0;

  // while we have unvisited vertexes and
  while (u.length > 1){
    // distance from root of current virtex
    var DFR = ret[virt][0];
    // next virtex to check
    var min = [Infinity, null];
    // for each edge of current virtex
    for (var n = 0; n < graph[virt].length; n++){
      // edge weight
      var edge = graph[virt][n];
      // if there is an edge
      if (edge > 0){
        // distance from root of neighbor vertex
        var curDFR = ret[n][0];
        // if new distance is less than previous calculated distance
        if (DFR + edge < curDFR){
          // update neighbor distance
          ret[n] = [DFR + edge, virt];
          // if it't closer then the previous min, update min
          if (DFR + edge < min[0]) min = [DFR + edge, n];
        }
      }
    }

    // remove current virt from unvisited
    var index = u.indexOf(virt);
    u.splice(index, 1);

    // update current virtex
    virt = min[1];
    // if there are no neighbors, get clotest unvisited vertex from root
    if (!virt) {
      for (var v = 0; v < u.length; v++){
        if (u[v][0] < min[0]) min = u[v];
      }
    }
    // if there is still no vert, your done
    if (!virt) break;
  }
  return ret;
}

function DijkstraII(graph, virt){
  var mpq = new q.MPQ(), ret = [];
  // fill out unvisited and return arrays,
  // there are other ways to do this with less code but this is the mose efficient
  for (var i = 0; i < graph.length; i++){
    u.push(i);
    ret.push([Infinity, null]);
  }
  // fill out root index of result array
  ret[virt][0] = 0;

  // while we have unvisited vertexes and
  while (virt || virt === 0){
    // distance from root of current virtex
    var DFR = ret[virt][0];
    // next virtex to check
    var min = [Infinity, null];
    // for each edge of current virtex
    for (var n = 0; n < graph[virt].length; n++){
      // edge weight
      var edge = graph[virt][n];
      // if there is an edge
      if (edge > 0){
        // distance from root of neighbor vertex
        var curDFR = ret[n][0];
        // if new distance is less than previous calculated distance
        if (DFR + edge < curDFR){
          // update neighbor distance
          ret[n] = [DFR + edge, virt];
          // if it't closer then the previous min, update min
          if (DFR + edge < min[0]) min = [DFR + edge, n];
        }
      }
    }

    // update current virtex
    virt = MPQ.dequeue().index;
  }
  return ret;
}

adjMatrix = [ // 0  1  2  3  4  5
        /* 0 */[ 0, 6,-1, 1,-1,-1],
        /* 1 */[-1, 0, 5, 2, 2,-1],
        /* 2 */[-1, 5, 0,-1, 5,-1],
        /* 3 */[-1, 2,-1, 0,-1,-1],
        /* 4 */[-1, 2, 5, 1, 0,-1],
        /* 5 */[-1,-1,-1,-1,-1, 1],
        ];
printGraph(adjMatrix);
// console.log("root = 5");
console.log(Dijkstra(adjMatrix, 0));
console.log(DijkstraII(adjMatrix, 0));


var MPQ = new q.MPQ();
