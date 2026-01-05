# SequenceFoldList

```
SequenceFoldList[f,{x1,…,xn},{a1,a2,…}] gives {x1,…,xn,f[x1,…,xn,a1],f[x2,…,xn,f[x1,…,xn,a1],a2],…}.

SequenceFoldList[f,{x1,…,xn},{a1,a2,…},k] applies f to k arguments at each step, with the first n coming from the xi or previous results, and the last k-n coming from the ai. 
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*