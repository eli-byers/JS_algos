var q = require('../MPQ.js');

function printGraph(graph){
  str = "  ";
  ln = "  ";
  for (var l in graph){0-p
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
  if (virt >= graph.length || virt < 0) return null;
  var mpq = new q.MPQ(), ret = [];
  // fill out unvisited queue and return array
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
    // cur = Current virtex
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
        /* 0 */[ 0,-1,-1,15,-1,70,45],
        /* 1 */[-1, 0,10,-1,10,-1,-1],
        /* 2 */[-1,10, 0,80,-1,-1,-1],
        /* 3 */[15,-1,80, 0,20,-1,-1],
        /* 4 */[-1,10,-1,20, 0,-1,-1],
        /* 5 */[70,-1,-1,-1,-1, 0, 5],
        /* 6 */[45,-1,-1,-1,-1, 5, 0],
        ];

printGraph(adjMatrix);
console.log(Dijkstra(adjMatrix, 2));