# IntegerPartitions

`IntegerPartitions[n]` gives a list of all possible ways to partition the integer n into smaller integers.

`IntegerPartitions[n, k]` gives partitions into at most k integers.

`IntegerPartitions[n, {k}]` gives partitions into exactly k integers.

`IntegerPartitions[n, {kmin, kmax}]` gives partitions into between kmin and kmax integers.

`IntegerPartitions[n, kspec, {s1, s2, ...}]` gives partitions involving only the si.

`IntegerPartitions[n, kspec, sspec, m]` limits the result to the first m partitions.

## Examples

```wolfram
IntegerPartitions[5]
(* {{5}, {4, 1}, {3, 2}, {3, 1, 1}, {2, 2, 1}, {2, 1, 1, 1}, {1, 1, 1, 1, 1}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IntegerPartitions.html) for more details.*