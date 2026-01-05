# IconRules

`IconRules` is an option for CloudObject and related objects that specifies icons to use in different environments to represent an object.

## Examples

Set a custom icon for a cloud object:

```wolfram
CloudPut[data, IconRules -> {"Thumbnail" -> myImage}]
```

Specify icons for different contexts:

```wolfram
CloudDeploy[obj, IconRules -> {"Web" -> icon1, "Mobile" -> icon2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IconRules.html) for more details.*