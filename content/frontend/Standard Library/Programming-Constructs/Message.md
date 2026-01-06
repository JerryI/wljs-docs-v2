# Message

`Message[symbol::tag]` prints the message symbol::tag unless it has been switched off. `Message[symbol::tag, e1, ...]` inserts values into the message.

## Examples

Define and issue a message:

```wolfram
f::badarg = "The argument `1` is not valid.";
Message[f::badarg, 5]
(* f::badarg: The argument 5 is not valid. *)
```

Built-in message:

```wolfram
Message[General::argx, f, 3]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Message.html) for more details.*