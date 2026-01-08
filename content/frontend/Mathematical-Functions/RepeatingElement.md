---
title: RepeatingElement
---

`RepeatingElement[spec]` represents an arbitrarily repeated type of element in an interpreter, API or form specification.

- `RepeatingElement[spec, max]` represents an element that can appear at most max times.
- `RepeatingElement[spec, {min, max}]` represents an element that can appear between min and max times.
- `RepeatingElement[spec, {n, {min, max}}]` represents an element that initially appears n times in a form.
- `RepeatingElement[spec, {{i, n}, {min, max}}]` represents an element where i takes successive values.

## Examples

```wolfram
FormObject[{"names" -> RepeatingElement["String", 3]}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RepeatingElement.html) for more details.