# LinkClose

`LinkClose[link]` closes an open WSTP connection.

## Examples

Open and close a link:

```wolfram
link = LinkLaunch["math"];
LinkClose[link]
```

Close all open links:

```wolfram
LinkClose /@ Links[]
```

Check if a link is still open after closing:

```wolfram
link = LinkLaunch["math"];
LinkClose[link];
LinkConnectedQ[link]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LinkClose.html) for more details.*