# FoldWhileList

```
FoldWhileList[f,x,{a1,a2,…},test] returns {x,f[x,a1],f[f[x,a1],a2],…}, repeatedly applying f with subsequent values ai until applying test to the result does not yield True.

FoldWhileList[f,list,test] is equivalent to FoldWhileList[f,First[list],Rest[list],test].

FoldWhileList[f,x,{a1,a2,…},test,m] supplies the most recent m results as arguments for test at each step.

FoldWhileList[f,x,{a1,a2,…},test,All] supplies all results so far as arguments for test at each step.

FoldWhileList[f,x,{a1,a2,…},test,m,n] returns n additional results by applying f an extra n times after test fails.

FoldWhileList[f,x,{a1,a2,…},test,m,-n] returns n fewer results.

FoldWhileList[f,test] represents an operator form of FoldWhileList that can be applied to expressions.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*