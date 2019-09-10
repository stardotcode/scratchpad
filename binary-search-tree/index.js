/** Class representing a binary search tree (BST) */
class BST {
  /**
   * Create a binary search tree.
   * @constructor
   * @param {number} value
   */
  constructor(value) {
    const label = 'new BST';
    this.value = value;
    this.left = null;
    this.right = null;
    logFn(label, '<b>'+value+'</b>');
  }

  /**
   * Insert a number in the BST with recursion.
   * @param {number} value - The number to insert.
   */
  insert(value) {
    const label = 'insert';

    if (value <= this.value) {
      logFn(label, '<b>' + value + '</b> <= ' + this.value + ' Go LEFT');
      if (!this.left) {
        logFn(label, this.value + '.left is ' + value);
        this.left = new BST(value);
      } else {
        logFn(label, this.value + '.left subtree');
        this.left.insert(value);
      }
    } else if (value > this.value) {
      logFn(label, '<b>' + value + '</b> > ' + this.value + ' Go RIGHT');
      if (!this.right) {
        logFn(label, this.value + '.right is ' + value);
        this.right = new BST(value);
      } else {
        logFn(label, this.value + '.right subtree');
        this.right.insert(value);
      }
    }
  }

  /**
   * Search for number in the BST with recursion.
   * @param {number} value - The number to search for.
   */
  search(value) {
    const label = 'search';

    if (this.value === value) {
      logFn(label, 'Found value ' + this.value);
      return true;
    }

    if (value <= this.value) {
      logFn(label, '<b>' + value + '</b> <= ' + this.value + ' Go LEFT');
      if (!this.left) {
        logFn(label, this.value + '.left is empty');
        return false;
      } else {
        logFn(label, this.value + '.left subtree');
        return this.left.search(value);
      }
    } else if (value > this.value) {
      logFn(label, '<b>' + value + '</b> > ' + this.value + ' Go RIGHT');
      if (!this.right) {
        logFn(label, this.value + '.right is empty');
        return false;
      } else {
        logFn(label, this.value + '.right subtree');
        return this.right.search(value);
      }
    }
  }

  /**
   * Depth-first traversal with recursion.
   * @param {string} order - 'in-order' 'pre-order' 'post-order'
   */
  traverse(order) {
    if (!this.left && !this.right) {
      logFn(order, this.value + ' [leaf]');
      return;
    }

    if (PRE_ORDER === order) {
      logFn(order, this.value);
    }

    if (this.left) {
      this.left.traverse(order);
    }

    if (IN_ORDER === order) {
      logFn(order, this.value);
    }

    if (this.right) {
      this.right.traverse(order);
    }

    if (POST_ORDER === order) {
      logFn(order, this.value);
    }
  }
};

/**
 * Concatenates 'label' + 'text' to global variable 'result'.
 * @param {string} label
 * @param {string} text
 */
const logFn = (label, text) => {
  html += '<span class="label"> ' + label + ':</span> ' + text + '<br/>';
}

// start here
const IN_ORDER = 'in-order', PRE_ORDER = 'pre-order', POST_ORDER = 'post-order';
let html = '';
const tree = new BST(4);

tree.insert(2);
tree.insert(1);
tree.insert(5);
tree.insert(3);

tree.search(5);

tree.traverse(IN_ORDER);
tree.traverse(PRE_ORDER);
tree.traverse(POST_ORDER);

document.getElementById('app').innerHTML = html;
