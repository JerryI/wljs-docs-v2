# ExternalSessions

`ExternalSessions[]` gives the list of currently active external evaluator sessions.

`ExternalSessions[sys]` gives the list of sessions associated with the system sys.

## Examples

```wolfram
(* List all active external sessions *)
ExternalSessions[]

(* List only Python sessions *)
ExternalSessions["Python"]

(* Start a session and check active sessions *)
session = StartExternalSession["Python"];
ExternalSessions[]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExternalSessions.html) for more details.*