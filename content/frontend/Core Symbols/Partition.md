# Partition

```
Partition[list,n] partitions list into nonoverlapping sublists of length n. 

Partition[list,n,d] generates sublists with offset d. 

Partition[list,{n1,n2,…}] partitions a nested list into blocks of size n1×n2×….

Partition[list,{n1,n2,…},{d1,d2,…}] uses offset di at level i in list. 

Partition[list,n,d,{kL,kR}] specifies that the first element of list should appear at position kL in the first sublist, and the last element of list should appear at or after position kR in the last sublist. If additional elements are needed, Partition fills them in by treating list as cyclic. 

Partition[list,n,d,{kL,kR},x] pads if necessary by repeating the element x. 

Partition[list,n,d,{kL,kR},{x1,x2,…}] pads if necessary by cyclically repeating the elements xi. 

Partition[list,n,d,{kL,kR},{}] uses no padding, and so can yield sublists of different lengths. 

Partition[list,nlist,dlist,{klistL,klistR},padlist] specifies alignments and padding in a nested list. 
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*