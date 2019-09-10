# binary-search-tree
Binary search tree implementation using recursion for insertion, search, and traversal.

## output
Starting with root value 4, then inserting values 2, 1, 5, 3

```
 new BST: 4
 insert: 2 <= 4 Go LEFT
 insert: 4.left is 2
 new BST: 2
 insert: 1 <= 4 Go LEFT
 insert: 4.left subtree
 insert: 1 <= 2 Go LEFT
 insert: 2.left is 1
 new BST: 1
 insert: 5 > 4 Go RIGHT
 insert: 4.right is 5
 new BST: 5
 insert: 3 <= 4 Go LEFT
 insert: 4.left subtree
 insert: 3 > 2 Go RIGHT
 insert: 2.right is 3
 new BST: 3
 search: 5 > 4 Go RIGHT
 search: 4.right subtree
 search: Found value 5
 in-order: 1 [leaf]
 in-order: 2
 in-order: 3 [leaf]
 in-order: 4
 in-order: 5 [leaf]
 pre-order: 4
 pre-order: 2
 pre-order: 1 [leaf]
 pre-order: 3 [leaf]
 pre-order: 5 [leaf]
 post-order: 1 [leaf]
 post-order: 3 [leaf]
 post-order: 2
 post-order: 5 [leaf]
 post-order: 4
```
