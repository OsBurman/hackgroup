class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}
	addEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({ node: vertex2, weight });
		this.adjacencyList[vertex2].push({ node: vertex1, weight });
	}

	//Dijkstras Algo- find the shortest path from poitn A to E
	//every tiem we visit a new node, we pick the node with the smallest known distance to the first visit
	//once we've moved to teh node we're going to visit, we look at each of its neighbors
	//for each nieghbor, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
	//if the new total distance to a node is less than the previous total, we store teh new shorter distance for that note

	//Actual algo
	//create an object (called distances) and set each key to be every vertex in teh adjacnecny list with a valueof Infinity, except for the starting vertex which should have a value of 0
	//after setting a value in the distance object, add each vertex with a priortiy of Infinty to the priroity queue, except for teh starting vertex
	//create another object called previous- set each key to be every vertex in teh adjacency list with a value of null
	//start looping as long as there is anything in the priority queue
	//-dequeue a vertex from teh priority queue
	// - if that vertex is the same as the ending ending vertex- we are done
	//otherwise loop through each value in teh adjacency list at that vertex
	//-calculcate the distance to taht vertex from teh starting index
	//if the distance is less than what is currently stored in our distances object
	//update the distances object with the new lower distance
	//update the prevous object to contain that vertex
	//enqueue the vertex with the total distance from the starting node
	Dijkstra(start, finish) {
		const nodes = new PriorityQueue();
		const distances = {};
		const previous = {};
		let smallest;
		let path = []; //to return at end

		//build initial state
		for (let vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		}
		//as long as tehre is something to visit
		while (nodes.values.length) {
			smallest = nodes.dequeue().val;
			if (smallest === finish) {
				//WE ARE DONE- BUILD PATH TO RETURN
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}
			if (smallest || distances[smallest] !== Infinty) {
				for (let neighbor in this.adjacencyList[smallest]) {
					let nextNode = this.adjacencyList[smallest][neighbor];
					//calculate new distance to the neighboring node
					let candidate = distances[smallest] + nextNode.weight;
					let nextNeighbor = nextNode.node;
					if (candidate < distances[nextNeighbor]) {
						//updating new smallest distance to neighbor
						distances[nextNeighbor] = candidate;
						//udating previous - how we got to neighbor
						previous[nextNeighbor] = smallest;
						//enqueue in priorty queue with new priority
						nodes.enqueue(nextNeighbor, candidate);
					}
				}
			}
		} return path.concat(smallest).reverse()
	}
}

class PriorityQueue {
	constructor() {
		this.values = [];
	}
	enqueue(val, priority) {
		this.values.push({ val, priority });
		this.sort();
	}
	dequeue() {
		return this.values.shift();
	}
	sort() {
		this.values.sort((a, b) => a.priority - b.priority);
	}
}

let graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph);

console.log(graph.Dijkstra('A', 'E'));
