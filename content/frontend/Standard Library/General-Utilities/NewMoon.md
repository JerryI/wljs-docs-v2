---
title: NewMoon
---

`NewMoon[]` gives the date of the next new moon.

- `NewMoon[date]` gives the date of the first new moon after the given date.

## Examples

Get the next new moon:

```wolfram
NewMoon[]
```

New moon after a specific date:

```wolfram
NewMoon[DateObject[{2024, 1, 1}]]
```

List upcoming new moons:

```wolfram
NestList[NewMoon, Now, 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NewMoon.html) for more details.*