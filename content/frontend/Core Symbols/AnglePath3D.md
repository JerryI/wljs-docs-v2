# AnglePath3D

```
AnglePath3D[{{α1,β1,γ1},{α2,β2,γ2},…}] gives the list of 3D coordinates of a path of an object that starts at {0,0,0}, then takes a series of steps of unit length, each in the direction of the x axis obtained after successive rotation of the object by the Euler angles αi, βi, γi.

AnglePath3D[{{α1,β1},{α2,β2},…}] assumes the Euler angles γi to be 0.

AnglePath3D[{mat1,mat2,…}] takes the successive rotations to be specified by the 3D rotation matrices mati. 

AnglePath3D[{{r1,rot1},{r2,rot2},…}] takes successive steps of length ri with Euler angles or rotation matrices specified by roti.

AnglePath3D[{x0,y0,z0},steps] starts at the point {x0,y0,z0}.

AnglePath3D[{rot0},steps] starts in the x axis direction specified by rotating the object according to Euler angles or rotation matrix rot0.

AnglePath3D[{{x0,y0,z0},rot0},steps] starts at point {x0,y0,z0} with the x axis direction specified by rot0.

AnglePath3D[init,steps,form] returns at each step the data of the form specified by form.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*