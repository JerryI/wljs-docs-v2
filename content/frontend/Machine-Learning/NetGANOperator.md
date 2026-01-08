---
title: NetGANOperator
---

`NetGANOperator[{generator, discriminator}]` represents a network to perform generative adversarial network (GAN) training with a generative net generator and a classification net discriminator.

- `NetGANOperator[{generator, discriminator}, loss]` specifies the loss type to be used.

## Examples

```wolfram
NetGANOperator[{generatorNet, discriminatorNet}]
```

```wolfram
NetGANOperator[{gen, disc}, "WassersteinLoss"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetGANOperator.html) for more details.