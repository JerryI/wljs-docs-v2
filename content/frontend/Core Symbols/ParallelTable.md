# ParallelTable

```
ParallelTable[expr,{imax}] generates in parallel a list of imax copies of expr.

ParallelTable[expr,{i,imax}] generates in parallel a list of the values of expr when i runs from 1 to imax. 

ParallelTable[expr,{i,imin,imax}] starts with i=imin. 

ParallelTable[expr,{i,imin,imax,di}] uses steps di. 

ParallelTable[expr,{i,{i1,i2,…}}] uses the successive values i1, i2, ….

ParallelTable[expr,{i,imin,imax},{j,jmin,jmax},…] gives a nested list. The list associated with i is outermost.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*