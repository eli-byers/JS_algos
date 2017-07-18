var l = require("../SLL.js");
var q = require("../SLQ.js");

function printGraph(graph){
  for (l in graph){
    graph[l].print();
  }
}

// ------------------ BFS ---------------------

// array of SLLs as graph
function BredthFirstSearch(graph, v){
  var visited = [];
  visited[v] = 0;
  var queue = new q.Queue();  
  while(v !== null){
    var cur = graph[v].head;    
    while(cur){
      if (visited[cur.value] === undefined){
        visited[cur.value] = visited[v]+1;
        queue.enqueue(cur.value);
      }
      cur = cur.next;
    }
    v = queue.dequeue();
  }
  return visited;
}

// nested array as graph
function BredthFirstSearchII(graph, v){
  var visited = [];
  visited.length = graph.length;
  visited[v] = 0;
  var queue = new q.Queue();  
  while(v !== null){
    for (var i = 0; i < graph[v].length; i++){
      var val = graph[v][i]
      if (visited[val] === undefined){
        visited[val] = visited[v]+1;
        queue.enqueue(val);
      }
    } 
    v = queue.dequeue();
  }
  return visited;
}

// ------------------ DFS ---------------------

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

// graph = [
//           new l.SLL([1,2,3], true),
//           new l.SLL([0,4], true),
//           new l.SLL([3], true),
//           new l.SLL([0,2,5], true),
//           new l.SLL([1,3], true),
//           new l.SLL([3], true),
//         ];
// printGraph(graph);
// console.log(DepthFirstSearch(graph, 2));


graphII = [
          [1,2,3],
          [0,4],
          [3],
          [0,2,5],
          [1,3],
          [3],
        ];
console.log(BredthFirstSearchII(graphII, 0));

// printGraph(graph);
