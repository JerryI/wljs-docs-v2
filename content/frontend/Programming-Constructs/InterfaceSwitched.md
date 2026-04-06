---
title: InterfaceSwitched
---

`InterfaceSwitched[<|size1 -> expr1, size2 -> expr2, ...|>]` is a construct that behaves as if it were expri when it is in an interface environment with width sizei.

- `InterfaceSwitched["param", <|key1 -> expr1, key2 -> expr2, ...|>]` behaves as if it were expri when the value of the interface parameter param corresponds to keyi.

## Examples

Responsive content based on width:
```wolfram
InterfaceSwitched[<|"Small" -> "Mobile view", "Large" -> "Desktop view"|>]
```

Switch on parameter:
```wolfram
InterfaceSwitched["Theme", <|"Light" -> lightStyle, "Dark" -> darkStyle|>]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InterfaceSwitched.html) for more details.