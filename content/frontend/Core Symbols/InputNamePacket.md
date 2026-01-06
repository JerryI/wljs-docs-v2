# InputNamePacket

`InputNamePacket[string]` is a WSTP packet that contains in string the name to be assigned to the next input.

## Examples

```wolfram
InputNamePacket["In[1]:= "]
```

```wolfram
LinkRead[link] (* May return InputNamePacket[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InputNamePacket.html) for more details.*