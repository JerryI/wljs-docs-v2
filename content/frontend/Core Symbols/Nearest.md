# Nearest

```
Nearest[{elem1,elem2,…},x] gives the list of elemi to which x is nearest. 

Nearest[{elem1->v1,elem2->v2,…},x] gives the vi corresponding to the elemi to which x is nearest. 

Nearest[{elem1,elem2,…}->{v1,v2,…},x] gives the same result. 

Nearest[{elem1,elem2,…}->prop,x] gives the property prop for the elemi to which x is nearest.

Nearest[data,{x1,x2,…}] effectively gives {Nearest[data,x1],Nearest[data,x2],…}.

Nearest[data,x,n] gives the n nearest elemi to x. 

Nearest[data,x,{n,r}] gives the n or fewer nearest elemi to x that are within radius r of x.

Nearest[data] generates a NearestFunction[…] that can be applied repeatedly to different x. 
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*