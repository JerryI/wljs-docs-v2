# ItoProcess

```
ItoProcess[{a,b},x,t] represents an Ito process x(t), where x(t)a(t,x(t))t+b(t,x(t)).w(t).

ItoProcess[{a,b,c},x,t] represents an Ito process y(t)c(t,x(t)), where x(t)a(t,x(t))t+b(t,x(t)).w(t) .

ItoProcess[…,{x,x0},{t,t0}] uses initial condition x(t0)x0.

ItoProcess[…,…,…,Σ] uses a Wiener process w(t), with covariance Σ.

ItoProcess[proc] converts proc to a standard Ito process whenever possible. 

ItoProcess[sdeqns,expr,x,t,wdproc] represents an Ito process specified by a stochastic differential equation sdeqns, output expression expr, with state x and time t, driven by w following the process dproc. 
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*