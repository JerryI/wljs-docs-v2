# StratonovichProcess

```
StratonovichProcess[{a,b},x,t] represents a Stratonovich process x(t), where x(t)a(t,x(t))t+b(t,x(t))◦ w(t) .

StratonovichProcess[{a,b,c},x,t] represents a Stratonovich process y(t)c(t,x(t)), where x(t)a(t,x(t))t+b(t,x(t))◦ w(t) .

StratonovichProcess[…,…,{x,x0},{t,t0}] represents a Stratonovich process with initial condition x(t0)x0.

StratonovichProcess[…,…,…,Σ] uses a Wiener process w(t), with covariance Σ.

StratonovichProcess[proc] converts proc to a standard Stratonovich process whenever possible.

StratonovichProcess[sdeqns,expr,x,t,wdproc] represents a Stratonovich process specified by a stochastic differential equation sdeqns, output expression expr, with state x and time t, driven by w following the process dproc. 
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*