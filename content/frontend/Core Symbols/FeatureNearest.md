# FeatureNearest

```
FeatureNearest[{elem1,elem2,…},x] gives the list of elemi to which x is nearest in a computed feature space.

FeatureNearest[{elem1->v1,elem2->v2,…},x] gives the vi corresponding to the elemi to which x is nearest.

FeatureNearest[{elem1,elem2,…}->{v1,v2,…},x] gives the same result.

FeatureNearest[{elem1,elem2,…}->prop,x] gives the property prop for the elemi to which x is nearest.

FeatureNearest[data,{x1,x2,…}] effectively gives {FeatureNearest[data,x1],FeatureNearest[data,x2],…}.

FeatureNearest[data,x,n] gives the n nearest elemi to x.

FeatureNearest[data] generates a NearestFunction[…] that can be applied repeatedly to different x.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*