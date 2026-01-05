# StartWebSession

`StartWebSession[]` starts a web session and returns a web session object.

`StartWebSession["browser"]` starts a web session using the specified browser.

## Examples

Start a default web session:

```wolfram
session = StartWebSession[]
(* WebSessionObject[...] *)
```

Start a web session with a specific browser:

```wolfram
session = StartWebSession["Chrome"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StartWebSession.html) for more details.*