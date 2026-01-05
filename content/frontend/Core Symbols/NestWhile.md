# NestWhile

```
NestWhile[f,expr,test] starts with expr, then repeatedly applies f until applying test to the result no longer yields True. 

NestWhile[f,expr,test,m] supplies the most recent m results as arguments for test at each step. 

NestWhile[f,expr,test,All] supplies all results so far as arguments for test at each step. 

NestWhile[f,expr,test,m,max] applies f at most max times. 

NestWhile[f,expr,test,m,max,n] applies f an extra n times. 

NestWhile[f,expr,test,m,max,-n] returns the result found when f had been applied n fewer times. 
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*