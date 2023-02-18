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

function reverseArray(arr) {
  var revArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr.join("");
}

function addLinkedList(l1, l2, order) {
  var l1Arr = [], l2Arr = [];
  var num1 = 0, num2 = 0, sum = 0;
  //Pushing the linked list to array
  while (l1 != null) {
    l1Arr.push(l1.value);
    l1 = l1.next;
  }
  while (l2 != null) {
    l2Arr.push(l2.value);
    l2 = l2.next;
  }

  if (order == 'reverse') {
    num1 = parseInt(reverseArray(l1Arr));
    num2 = parseInt(reverseArray(l2Arr))
    sum = num1 + num2
    var list = sum.toString().split("");
    var lists;
    for (i = list.length-1; i >= 0; i--) {
        console.log(list[i])
        if (lists == null) {
            lists = newNode(list[i]);
            console.log(lists);
        } else {
            lists.next = newNode(list[i]);
            console.log(lists);
        }
    }
    console.log(lists);
  } else if (order == 'forward'){
        
  }
  

  return console.log('The sum of two linked lists is: ' + sum);
}

// Creating a linked list-1
let list1 = newNode(7);
list1.next = newNode(1);
list1.next.next = newNode(6);

// Creating a linked list-2
let list2 = newNode(5);
list2.next = newNode(9);
list2.next.next = newNode(2);

addLinkedList(list1, list2, 'reverse');
