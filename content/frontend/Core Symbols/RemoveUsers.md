# RemoveUsers

`RemoveUsers[group, {user1, ...}]` removes the users useri from the permissions group group.

## Examples

```wolfram
RemoveUsers["MyGroup", {"user1@example.com"}]
```

```wolfram
RemoveUsers[PermissionsGroup["Editors"], {"john@wolfram.com", "jane@wolfram.com"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RemoveUsers.html) for more details.*