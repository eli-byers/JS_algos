var l = require("../SLL.js");
var q = require("../SLQ.js");

function printGraph(graph){
  for (l in graph){
    console.log(l +": " + graph[l].string());
  }
}

function BredthFirstSearch(graph, v){
  var bfs = [];
  bfs[v] = [0, null];
  var queue = new q.Queue();
  while(v || v === 0){
    var cur = graph[v].head;
    while(cur){
      if (!bfs[cur.value]){
        bfs[cur.value] = [bfs[v][0]+1, v];
        queue.enqueue(cur.value);
      }
      cur = cur.next;
    }
    v = queue.dequeue();
  }
  return bfs;
}

function DepthFirstSearch(graph, v){
  var bfs = [];
  bfs[v] = [0, null];
  var stack = [];
  while(v || v === 0){
    var cur = graph[v].head;
    while(cur){
      if (!bfs[cur.value]){
        bfs[cur.value] = [bfs[v][0]+1, v];
        stack.push(cur.value);
      } else if (bfs[cur.value][0] > bfs[v][0]+1){
        bfs[cur.value] = [bfs[v][0]+1,v];
      }
      cur = cur.next;
    }
    v = stack.pop();
  }
  return bfs;
}

graph = [
          new l.SLL([2,5]),
          new l.SLL([2,3,4,5]),
          new l.SLL([0,1,3]),
          new l.SLL([1,2]),
          new l.SLL([1,3]),
          new l.SLL([0,1,6]),
          new l.SLL([5]),
        ];

printGraph(graph);
console.log("root = 2");
console.log(BredthFirstSearch(graph, 2));
console.log(DepthFirstSearch(graph, 2));
