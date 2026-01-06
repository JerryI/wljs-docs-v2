# PermissionsKeys

`PermissionsKeys[]` gives a list of all valid permissions keys created by the currently authenticated user.

Permissions keys are used to control access to cloud-deployed resources and APIs.

## Examples

```wolfram
PermissionsKeys[]
```

```wolfram
(* Create a new permissions key *)
CreatePermissionsKey["read"]
```

```wolfram
(* List all active keys *)
Dataset[PermissionsKeys[]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PermissionsKeys.html) for more details.*