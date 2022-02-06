//graph is a set of nodes and connections
//a vertex is a node-  an edge is a connection between the nodes
//undirected graph- no direction associaited with edge - Facebook friends can all be connected to each other
//directed graph connected with arrows. direction assigned to the edge- Instagram you can see people, they cant necessarily see you
//unweighted graph- each connection has no value associated it
//weight graph has a connection associated with it



class Graph {
  constructor(){
    this.adjacencyList = {}
  }

  //write a method addVertex which accepts the name of a vertex
//it should add a key to the adjacency list with the name of the vertex and sets its value to be an empty
  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  //find in the adjacency list the key of vertex1 and push vertex2 to the array
  //find the key of vertex2 and push vertex1 to the array
  addEdge(vertex1, vertex2){
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }
    // reassign the key of vertex1 to be an array that does not contain vertex2
    // function should not reassing the key of vertex2 to be an array that doesn't contain vertex1
    removeEdge(vertex1, vertex2){
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v!== vertex2)
    }

    //accept a vertex to remove - loop as long as there are any other vertices in the adjacency list for that vertex
    //inside of the loop, call removeEdge with teh vertex we are removing and any values in teh adjacencyList for that vertex
    //delete the key in the adjacency list
    removeVertex(vertex){
      while(this.adjacencyList[vertex].length){
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex)
      }
      delete this.adjacentVertex[vertex]
        
      }

      // Depth First Graph Traversal
      //if vertex is empty return (base case)
      //add vertex to results list
      //mark vertex as visited {a: true, b: true, c: true}
      //for each neigbor in the vertex's neighbors: if the neighbor is not visited, recursivly call DFS on neighbor
      //
      //DFR recursive
      //accept a starting node- create a list to store the end result, to be returned at the very list
      //create an object to store visited vertices
      //create an helper funciton which accpets a vertix
      //helper fucntoin should return early if the vertex is empty
      //helper function should place the vertex it accepts inot the visited object and push that vertix into the result array
      //loop over all the values in teh adjacencyList for that vertex
      //if any of those values have not been visited, recurisvley invoke the helper function of that vertex
      //Invoke the helper fucntion with the starting vertex

      depthFirstRecursive(start){
        const result = [];
        let visited = {};
        const adjacencyList = this.adjacencyList;

        //helper function- its immediately invoked
        (function dfs(vertex){
          if(!vertex) return null;
          visited[vertex] = true;
          result.push(vertex);
          adjacencyList[vertex].forEach(neighbor => {
            if(!visited[neighbor]){
              return dfs(neighbor)
            }
          })

        })(start);
        return result

      }

      //create a stack to keep track of vertices(use a list/array)
      //create  list to the end result, to be returend at the very end
      //create an object to store visited vertices
      //add teh starting vertex to the stack, and mark it visited
      //while the stack has something in it- pop the next vertex from the stack-
      //if that vertex hasbnt been visited yet- mark it as visited, add to teh result list, and push all its neighbors into the stack
      depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
          currentVertex = stack.pop();
          result.push(currentVertex);
          
          this.adjacencyList[currentVertex].forEach(neighbor => {
            if(!visited[neighbor]){
              visited[neighbor] = true;
              stack.push(neighbor)
            }
          })
        }
        return result
      }

      //aceepts a starting vertex
      //cretea a queue(array) - put starting vertex into it
      //create an array to store nodes visited
      //crete an object to store nodes visited
      //mark the starting vertex as visited
      //loop as long as there is anything in the queue
      //remove the first vertex from teh queue and push it into the array that stores nodes visited
      //loop over each vertex in teh adjacency list for the vertex you are visiting
      //if it isn't in the object, mark it as visited and enqueue that vertex
      //return the array of visited nodes
      //
      breadthFirst(start){
      const queue = [start];
      const result = [];
      const visited = {};
      let currentVertex;
      visited[start] = true;

      while(queue.length){
        currentVertex = queue.shift();
        result.push(currentVertex);

        this.adjacencyList[currentVertex].forEach(neighbor => {
          if(!visited[neighbor]){
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        });
      }
      return result;
    }
    }





let g = new Graph();
// g.addVertex('Tokyo');
// g.addVertex('Denver')
// g.addVertex('Wisconin')
// g.addVertex('Alaska')
// console.log(g)
// g.addEdge('Tokyo', 'Denver' )
// console.log(g)
// console.log(g.removeEdge('Denver', 'Tokyo'))
// console.log(g)

g.addVertex('A');
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge("A", 'B')
g.addEdge("A", 'C')
g.addEdge("B", 'D')
g.addEdge("C", 'E')
g.addEdge("D", 'E')
g.addEdge("D", 'F')
g.addEdge("E", 'F')

console.log(g)

console.log(g.depthFirstRecursive('A'));
console.log(g.depthFirstIterative('A'))
console.log(g.breadthFirst('A'))

