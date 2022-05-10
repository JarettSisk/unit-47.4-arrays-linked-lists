/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    // create the new node.
    let newNode = new Node(val);
    // check if tail already exists, if so:
    if(this.tail) {
      // add the new node as the next val to current tail
      this.tail.next = newNode;
      // set this.tail to = new node
      this.tail = newNode
      this.length++
    }
    // if no tail exists:
    else {
      // set this.head and this.tail to be new node.
      this.head = newNode;
      this.tail = newNode;
      this.length++
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    // create the new node
    let newNode = new Node(val);
    // if this.head exists
    if(this.head) {
      // set newNode next to be the head
      newNode.next = this.head;

      // set the head to be newNode
      this.head = newNode;
      this.length++
    }
    // else if no head
    else {
      this.head = newNode;
      this.tail = newNode;
      this.length++
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    // if more then one item exist
    if(this.head.next) {
      // original tail
      let tail = this.tail;

      // (pre) => (temp)
      let pre = this.head;
      let temp = this.head.next;
      while(temp.next) {
        pre = pre.next;
        temp = temp.next;
      }

      this.length--;
      pre.next = null;
      this.tail = pre;
      return tail.val;
    }
    // if only one item left
    else if (this.head) {
      // original tail
      let tail = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;
      return tail.val;
    }
    // if no items
    else {
      return null;
    }

  }

  /** shift(): return & remove first item. */

  shift() {
    // if more than one item exists
    if(this.head.next) {
      // original head
      let head = this.head;
      this.head = this.head.next;
      this.length--;
      return head.val;
    }
    // if only one item
    else if (this.head) {
      let head = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return head.val;
    }
    else {
      return null;
    }

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentItem = this.head;
    if (idx >= 0 && idx <= this.length - 1) {
      for(let i = 0; i <= this.length - 1; i++) {
        if(i === idx) {
          return currentItem.val
        }
        currentItem = currentItem.next;
      }
    } else {
      return null;
    }

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    // if idx within current range
    if(idx >= 0 && idx <= this.length - 1) {
      let currentItem = this.head;
      for(let i = 0; i <= this.length - 1; i++) {
        if(i === idx) {
          currentItem.val = val;
        }
        currentItem = currentItem.next;
      }
    } 
    else {
      return null;
    }

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);
    // if multiple items exist and idx is in range
    if(this.length > 1 && idx >= 0 && idx <= this.length) {
      let prev = this.head;
      let next = this.head.next;

      for(let i = 0; i < this.length; i++) {
        // if idx is at start
        if(idx === 0) {
          console.error('insert at start');
          newNode.next = prev;
          this.head = newNode;
          this.length++;
          return;
        }
        // if idx is in between
        else if(idx > 0 && idx < this.length - 1 && i === idx - 1) {
          // console.log(idx)
          console.error('insert in middle');
          // console.error(`prev: ${prev.val} next: ${next.val}`);
          prev.next = newNode;
          newNode.next = next;
          this.length++;
          return;
        }
        // if at end
        else if (idx === this.length) {
          console.error('insert at end');
          this.tail.next = newNode;
          this.tail = newNode;
          this.length++;
          return;
        }
        // if next, then traverse
        if(prev.next !== null) {
          prev = prev.next;
          next = prev.next;
        }
      }
      
    }
    else if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } 
    else {
      return null;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
        // if idx within current range
        if(idx >= 0 && idx <= this.length - 1) {
          let prev = this.head;
          let next = this.head.next;
          for(let i = 0; i <= this.length - 1; i++) {
            // if at start and mutliple items
            if(idx === 0 && this.length > 1) {
              // set next be the new head
              this.head = next;
              this.length--;
              return prev.val;
            }
            // if at start and only 1 item
            else if(idx === 0 && this.length === 1) {
              // set next be the new head
              this.head = null;
              this.tail = null;
              this.length--;
              return prev.val;
            }
            // if in middle 
            if(idx > 0 && idx < this.length - 1 && i === idx) {
              prev.next = next.next;
              this.length--;
              return next.val;
            }
            // if at end 
            if(i === this.length - 1 && idx === this.length - 1) {
              prev.next = null;
              this.tail = prev;
              this.length--;
              return next.val;
            }
          }
        } 
        else {
          return null;
        }
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0) {
      return 0;
    }
    let currentItem = this.head;
    let sum = 0;
    // sum up all the values
    for(let i = 0; i < this.length; i++) {
      sum += currentItem.val;
      currentItem = currentItem.next;
    }

    return sum / this.length;
    
  }
}




module.exports = LinkedList;
