---
title: StartExternalSession
---

`StartExternalSession["sys"]` starts an external session using the external evaluator sys, returning an external session object.

- `StartExternalSession[assoc]` starts the external evaluator specified by assoc.
- `StartExternalSession[{"sys", opts}]` uses the options opts for the external evaluator.
- `StartExternalSession[sys -> type]` specifies that output from the external evaluator should be converted to the specified type.
- `StartExternalSession[DatabaseReference[ref]]` uses the database specified by ref to start a database session.

## Examples

```wolfram
session = StartExternalSession["Python"]
```

```wolfram
StartExternalSession["NodeJS"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StartExternalSession.html) for more details.*