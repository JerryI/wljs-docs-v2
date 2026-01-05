# Enclose

```
Enclose[expr] attempts to evaluate expr and return the result, but stops if it catches an error and returns a failure object. 

Enclose[expr,f] applies f to any failure object generated.

Enclose[expr,"prop"] gives the property prop of any failure object generated. 

Enclose[expr,handler,form] only catches errors with explicitly specified tags matching form. 
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*