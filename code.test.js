const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js') + '');

function isPathValid(graph, path, startNode, targetNode) {
  if (path.length === 0) {
    return true;
  }
  if (path[0] !== startNode) {
    return false;
  }
  for (let i = 1; i < path.length; i++) {
    const currentNode = path[i];
    const previousNode = path[i - 1];
    if (!graph[previousNode].includes(currentNode)) {
      return false;
    }
  }
  if (path[path.length - 1] !== targetNode) {
    return false;
  }
  else {
  return true;
  }
}
const dfsProperty = jsc.forall(jsc.dict(jsc.array(jsc.elements('A', 'B', 'C', 'D', 'E', 'F', 'G')), { size: 2 }), jsc.elements('A', 'B', 'C', 'D', 'E', 'F', 'G'), jsc.elements('A', 'B', 'C', 'D', 'E', 'F', 'G'), function (graph, startNode, targetNode) {
  const result = depthFirstSearch(graph, startNode, targetNode);
  return isPathValid(graph, result, startNode, targetNode);
});

jsc.assert(dfsProperty, { tests: 1000 });
