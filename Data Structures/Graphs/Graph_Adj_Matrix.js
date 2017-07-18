var q = require('../MPQ.js');

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
  if (virt >= graph.length) return null;
  var mpq = new q.MPQ(), ret = [];
  // fill out unvisited and return arrays,
  // there are other ways to do this with less code but this is efficient
  for (var vrt = 0; vrt < graph.length; vrt++){
    if (vrt !== virt) mpq.enqueue(vrt, Infinity);
    ret.push([Infinity, null]);
  }
  // fill out root index of result array
  ret[virt] = [0, virt];
  
  // while we have unvisited vertexes and
  while (virt !== null){
    // distance from root of current virtex
    // DFR = Distance From Root
    var DFR = ret[virt][0];
    // cur = Current Node
    var cur = graph[virt];
    // for each possible edge of current virtex
    for (var n = 0; n < cur.length; n++){
      // edge weight
      var edge = cur[n];
      // if there is an edge
      if (edge > 0){
        // neighbors distance from root old/new
        var curDFR = ret[n][0];
        var newDFR = DFR + edge;
        // if new distance is less than previous calculated 
        // distance, update neighbor distance
        if (newDFR < curDFR){
          ret[n] = [newDFR, virt];
          mpq.update(virt, newDFR);
        }
      }
    }
    // get next closest virtex
    virt = mpq.dequeue();
    if (virt) virt = virt.value;
  }
  return ret;
}

adjMatrix = [ // 0  1  2  3  4  5
        /* 0 */[ 0, 4, 3,-1,-1,-1],
        /* 1 */[-1, 0, 2, 5, 1,-1],
        /* 2 */[-1,-1, 0, 2,-1,-1],
        /* 3 */[-1,-1,-1, 0, 1, 4],
        /* 4 */[-1,-1,-1,-1, 0,-1],
        /* 5 */[-1,-1,-1,-1,-1, 0],
        ];

printGraph(adjMatrix);
console.log(Dijkstra(adjMatrix, 1));