# AnglePath

```
AnglePath[{θ1,θ2,θ3,…}] gives the list of 2D coordinates corresponding to a path that starts at {0,0}, then takes a series of steps of unit length at successive relative angles θi. 

AnglePath[{{r1,θ1},{r2,θ2},{r3,θ3},…}] takes successive steps of lengths ri. 

AnglePath[θ0,{step1,step2,…}] starts at angle θ0 with respect to the x axis.

AnglePath[{x,y},{step1,step2,…}] starts at the point {x,y} with initial angle 0 with respect to the x axis.

AnglePath[{{x,y},θ0},{step1,step2,…}] starts at {x,y} with initial angle θ0 with respect to the x axis.

AnglePath[{{x,y},{dx,dy}},{step1,step2,…}] takes the first step to go from {x,y} to {x+dx,y+dy}.

AnglePath[init,steps,form] returns at each step the data of the form specified by form.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*