# Manipulate

```
Manipulate[expr,{u,umin,umax}] generates a version of expr with controls added to allow interactive manipulation of the value of u. 

Manipulate[expr,{u,umin,umax,du}] allows the value of u to vary between umin and umax in steps du. 

Manipulate[expr,{{u,uinit},umin,umax,…}] takes the initial value of u to be uinit. 

Manipulate[expr,{{u,uinit,ulbl},…}] labels the controls for u with ulbl. 

Manipulate[expr,{u,{u1,u2,…}}] allows u to take on discrete values u1,u2,…. 

Manipulate[expr,{u,…},{v,…},…] provides controls to manipulate each of the u,v,…. 

Manipulate[expr,cu->{u,…},cv->{v,…},…] links the controls to the specified controllers on an external device.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*