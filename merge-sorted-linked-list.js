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

function mergeLinkedList(l1, l2) {
  var arr = [];
  var mergeArr = [];
  //Pushing the linked list to array
  while (l1 != null) {
    arr.push(l1.value);
    l1 = l1.next;
  }
  while (l2 != null) {
    arr.push(l2.value);
    l2 = l2.next;
  }

  //Sorting the array
  arr.sort(function (a, b) {
    return a - b;
  });
  let result = newNode(-1);
  let mergeList = result;
  for (let i = 0; i < arr.length; i++) {
    result.next = newNode(arr[i]);
    result = result.next;
  }

  mergeList = mergeList.next;
  console.log("Merged Linked List: ");

  // pushing the merged list to the array
  while (mergeList != null) {
    mergeArr.push(mergeList.value);
    mergeList = mergeList.next;
  }
  return console.log(mergeArr.join(" -> "));
}

// Creating a linked list-1
let list1 = newNode(2);
list1.next = newNode(1);
list1.next.next = newNode(4);

// Creating a linked list-2
let list2 = newNode(3);
list2.next = newNode(5);
list2.next.next = newNode(6);

mergeLinkedList(list1, list2);