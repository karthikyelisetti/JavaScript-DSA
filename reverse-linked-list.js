class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// Reversing the linked list
function reverse(node) {
  var prevNode = null;
  var currentNode = node;
  var nextNode = null;
  while (currentNode != null) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  node = prevNode;
  return node;
}

// Printing the list
function printList(node) {
  var arr = [];
  while (node != null) {
    arr.push(node.value);
    node = node.next;
  }
  return arr.join(" -> ");
}

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

console.log("Given linked list: " + printList(head));
head = reverse(head);
console.log("Reversed linked list: " + printList(head));