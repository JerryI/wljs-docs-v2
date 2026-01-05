# LinearFractionalOptimization

```
LinearFractionalOptimization[f,cons,vars] finds values of variables vars that minimize the linear fractional objective f subject to linear constraints cons.

LinearFractionalOptimization[{α,β,γ,δ},{a,b}] finds a vector x that minimizes the linear fractional function (α.x+β)/(γ.x+δ) subject to the linear inequality constraints a.x+b⪰0. 

LinearFractionalOptimization[{α,β,γ,δ},{a,b},{aeq,beq}] includes the linear equality constraints aeq.x+beq0.

LinearFractionalOptimization[{α,β,γ,δ},…,{dom1,dom2,…}] takes xi to be in the domain domi, where domi is Integers or Reals. 

LinearFractionalOptimization[…,"prop"] specifies what solution property "prop" should be returned.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*