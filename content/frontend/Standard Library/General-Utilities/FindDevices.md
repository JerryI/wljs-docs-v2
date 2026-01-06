---
title: FindDevices
---

`FindDevices[]` searches for available devices on your computer system.

- `FindDevices[form]` gives a list of devices in classes whose names match the string pattern form.
- `FindDevices[{form1,form2,…}]` gives a list of devices in classes whose names match any of the formi.
- `FindDevices[forms,n]` returns at most n devices.

## Examples

```wolfram
(* Find all available devices *)
FindDevices[]

(* Find audio devices *)
FindDevices["Audio*"]

(* Find camera devices *)
FindDevices["Camera"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindDevices.html) for more details.*