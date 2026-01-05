# LinearProgramming

```
LinearProgramming[c,m,b] finds a vector x that minimizes the quantity c.x subject to the constraints m.x≥b and x≥0. 

LinearProgramming[c,m,{{b1,s1},{b2,s2},…}] finds a vector x that minimizes c.x subject to x≥0 and linear constraints specified by the matrix m and the pairs {bi,si}. For each row mi of m, the corresponding constraint is mi.x≥bi if si==1, or mi.x==bi if si==0, or mi.x≤bi if si==-1. 

LinearProgramming[c,m,b,l] minimizes c.x subject to the constraints specified by m and b and x≥l. 

LinearProgramming[c,m,b,{l1,l2,…}] minimizes c.x subject to the constraints specified by m and b and xi≥li. 

LinearProgramming[c,m,b,{{l1,u1},{l2,u2},…}] minimizes c.x subject to the constraints specified by m and b and li≤xi≤ui. 

LinearProgramming[c,m,b,lu,dom] takes the elements of x to be in the domain dom, either Reals or Integers.

LinearProgramming[c,m,b,lu,{dom1,dom2,…}] takes xi to be in the domain domi.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*