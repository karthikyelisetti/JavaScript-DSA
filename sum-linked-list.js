class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function newNode(value) {
  let temp = new Node(value);
  return temp;
}

class LinkedList {
  constructor(value) {
    this.head = { value: value, next: null };
    this.tail = this.head;
    this.length = 1;
  }

  print = () => {
    let arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr.join(" -> ");
  };

  append = (value) => {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  };
}

function reverseArray(arr, order) {
  var revArr = [];
  if (order == "reverse") {
    for (var i = arr.length - 1; i >= 0; i--) {
      revArr.push(arr[i]);
    }
  } else {
    for (var i = 0; i < arr.length; i++) {
      revArr.push(arr[i]);
    }
  }
  return revArr.join("");
}

function addLinkedList(l1, l2, order) {
  var l1Arr = [],
    l2Arr = [];
  var num1 = 0,
    num2 = 0,
    sum = 0;
  //Pushing the linked list to array
  while (l1 != null) {
    l1Arr.push(l1.value);
    l1 = l1.next;
  }
  while (l2 != null) {
    l2Arr.push(l2.value);
    l2 = l2.next;
  }

  num1 = parseInt(reverseArray(l1Arr, order));
  num2 = parseInt(reverseArray(l2Arr, order));
  sum = num1 + num2;
  var list = sum.toString().split("");
  var lists;

  if (order == "reverse") {
    for (i = list.length - 1; i >= 0; i--) {
      if (lists == null) {
        lists = new LinkedList(list[i]);
      } else {
        lists.append(list[i]);
      }
    }
  } else if (order == "forward") {
    for (i = 0; i < list.length; i++) {
      if (lists == null) {
        lists = new LinkedList(list[i]);
      } else {
        lists.append(list[i]);
      }
    }
  }
  console.log(lists.print());
  console.log("The sum of two linked lists is: " + sum);
}

// list1 = new LinkedList(7);
// list1.append(1).append(6);
// console.log('List-1: '+ list1.print());

// list2 = new LinkedList(2);
// list2.append(9).append(5);
// console.log('List-2: '+ list2.print());

// Creating a linked list-1
let list1 = newNode(6);
list1.next = newNode(1);
list1.next.next = newNode(7);

// Creating a linked list-2
let list2 = newNode(2);
list2.next = newNode(9);
list2.next.next = newNode(5);

// reverse order pass the value reverse as 3rd parameter
// forward order pass the value forward as 3rd parameter
addLinkedList(list1, list2, "forward");
