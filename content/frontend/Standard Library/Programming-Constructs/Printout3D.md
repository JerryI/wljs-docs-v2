# Printout3D

`Printout3D[model]` prints out the 3D model using a 3D print previewer.

- `Printout3D[model, service]` prints out the 3D model using the specified 3D printing service.
- `Printout3D[model, "file.ext"]` saves a print-ready form of the model to a file in the format indicated by the file extension ext.

## Examples

Preview a 3D model for printing:

```wolfram
Printout3D[Sphere[]]
```

Export to STL file for 3D printing:

```wolfram
Printout3D[Cylinder[], "model.stl"]
```

Create a printable polyhedron:

```wolfram
Printout3D[PolyhedronData["Dodecahedron", "Polyhedron"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Printout3D.html) for more details.*