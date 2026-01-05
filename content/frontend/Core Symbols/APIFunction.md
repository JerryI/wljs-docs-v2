# APIFunction

```
APIFunction[{name1->type1,name2->type2,…},fun] represents an API with parameters namei that evaluates the function fun whenever it is called. The function fun is applied to <|name1->val1,name2->val2,…|>, where the vali are the settings for the parameters, interpreted as being of types typei.

APIFunction[{name1->type1->default1,…},fun] takes the value of the parameter namei to be defaulti if it is not specified when the API is called.

APIFunction[params,fun,fmt] specifies that the result from applying fun should be returned in format fmt.

APIFunction[params,fun,{fmt,rform}] specifies that the result should be returned as a response of the form rform.

APIFunction[params,fun,{fmt,rform,failfmt}] specifies that in the event of failure, the result should be returned in format failfmt.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*