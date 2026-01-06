# Disk

`Disk[{x, y}, r]` represents a filled disk of radius `r` centered at `{x, y}`. `Disk[{x, y}]` gives a unit disk.

## Examples

Draw filled disks:

```wolfram
Graphics[{
  LightBlue, Disk[{0, 0}, 1],
  Red, Disk[{0.5, 0.5}, 0.2]
}]

(* Pie sector *)
Graphics[Disk[{0, 0}, 1, {0, Pi/3}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Disk.html) for more details.*