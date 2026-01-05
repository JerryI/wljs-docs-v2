# JoinAcross

```
JoinAcross[{a1,a2,…},{b1,b2,…},key] gives a list of associations obtained by joining those pairs of associations ai and bj in which the values associated with key are the same. 

JoinAcross[{a1,a2,…},{b1,b2,…},{key1,key2,…}] joins pairs of associations only when the values associated with all keys keyi are the same.

JoinAcross[{a1,a2,…},{b1,b2,…},keya->keyb] joins pairs of associations ai, bj in which the values associated with keya in the ai are the same as those associated with keyb in the bj.

JoinAcross[{a1,a2,…},{b1,b2,…},{keya1->keyb1,…}] joins pairs of associations in which pairs of corresponding values agree.

JoinAcross[alist,blist,keyspec,"joinspec"] uses joinspec to determine when to allow associations that contain missing elements to be generated.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*