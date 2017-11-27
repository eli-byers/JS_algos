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
  visited[v] = [0,v];
  var queue = new q.Queue();  
  while(v !== null){
    for (var i = 0; i < graph[v].length; i++){
      var val = graph[v][i]
      if (visited[val] === undefined){
        visited[val] = [visited[v][0]+1,v];
        queue.enqueue(val);
      }
    } 
    v = queue.dequeue();
  }
  return visited;
}

// ------------------ DFS ---------------------


function DepthFirstSearch(graph, v){
  var ret = [];
  ret[v] = [0, null];
  var stack = [];
  while(v || v === 0){
    var cur = graph[v].head;
    while(cur){
      if (!ret[cur.value]){
        ret[cur.value] = [ret[v][0]+1, v];
        stack.push(cur.value);
      } else if (ret[cur.value][0] > ret[v][0]+1){
        ret[cur.value] = [ret[v][0]+1,v];
      }
      cur = cur.next;
    }
    v = stack.pop();
  }
  return ret;
}

graph = [
          new l.SLL([1,2,3], true),
          new l.SLL([0,4], true),
          new l.SLL([3], true),
          new l.SLL([0,2,5], true),
          new l.SLL([1,3], true),
          new l.SLL([3], true),
        ];
// printGraph(graph);
// console.log(DepthFirstSearch(graph, 0));


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
