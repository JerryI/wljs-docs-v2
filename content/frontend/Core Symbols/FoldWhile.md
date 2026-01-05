# FoldWhile

`FoldWhile[f,x,{a1,a2,…},test]` returns the first expression f[… f[f[x,a1],a2]…,ak] to which applying test does not yield True.

`FoldWhile[f,list,test]` is equivalent to FoldWhile[f,First[list],Rest[list],test].

`FoldWhile[f,x,{a1,a2,…},test,m]` supplies the most recent m results as arguments for test at each step.

`FoldWhile[f,x,{a1,a2,…},test,All]` supplies all results so far as arguments for test at each step.

`FoldWhile[f,x,{a1,a2,…},test,m,n]` returns the result after applying f an extra n times after test fails.

`FoldWhile[f,x,{a1,a2,…},test,m,-n]` returns the result found when f had been applied n fewer times.

`FoldWhile[f,test]` represents an operator form of FoldWhile that can be applied to expressions.

## Examples

Fold while result is less than 100:

```wolfram
FoldWhile[Times, 1, Range[10], # < 100 &]
(* 120 *)
```

Fold while sum is less than 10:

```wolfram
FoldWhile[Plus, 0, {1, 2, 3, 4, 5}, # < 10 &]
(* 10 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FoldWhile.html) for more details.*