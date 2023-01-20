/**
 Linked List (Singly linked list , Doubly linked list)
 array [1,5,7,8,10]
 */

class Person {
    constructor(leg, arm) {
        this.leg = leg
        this.arm = arm

    }
    //properties
    leg = 2
    arm = 2
    //method
    walk() {
        console.log('is walking......');
    }
}

const bijoy = new Person(2, 2)
console.log(bijoy.walk())

const specialPerson = new Person(3, 2)
console.log(specialPerson);

//---------------------------------------------------//


class Node {
    constructor(value) {
        this.value = value;
        this.next = null

    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1

    }

    //adding mode at the end of the linked list
    //time complexity o(1)
    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++
    }

    //adding node at the beginning
    //time complexity o(1)
    unshift(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head // next declear kore then head change korte hobe 
            this.head = newNode

        }

        this.length++
    }

    //remove from the beginning
    shift() {
        if (!this.head) {
            return null;
        }
        const temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--

        if (this.length === 0) {
            this.tail = null
        }

        return temp;

    }


    // remove at the end of the list
    //time complexity O(n)
    pop() {
        /**
                       t
         10 --> 15 --> 8 --> null
                 p

         t
         10 --> null
         p

         */

        if (!this.head) {
            return null;
        }
        let temp = this.head
        let pre = this.head
        while (temp.next) {
            pre = temp
            temp = temp.next

        }
        this.tail = pre
        this.tail.next = null
        this.length--

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return temp;

    }

    //find item at specific index
    //time complexity O(n)
    get(index) {
        //check validation of  index
        if (index < 0 || index > length) return null;
        let temp = this.head
        for (var i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp;

    }



}

const linkedList = new LinkedList(10)
linkedList.push(11)
linkedList.unshift(9)
console.log(linkedList);