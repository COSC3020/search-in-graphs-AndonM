function depthFirstSearch(graph, startNode, targetNode) {
    const visited = new Set();
    const path = [];
    function dfs(node) {
      if (node === targetNode) {
        path.push(node);
        return true;
      }
      visited.add(node);
      path.push(node);
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor) && dfs(neighbor)) {
          return true;
        }
      }
      path.pop();
      return false;
    }
    if (dfs(startNode)) {
      return path;
    } else {
      return [];
    }
}
