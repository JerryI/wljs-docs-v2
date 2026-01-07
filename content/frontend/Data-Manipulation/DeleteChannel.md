---
title: DeleteChannel
---

`DeleteChannel[channel]` deletes the specified channel from the channel broker server.

`DeleteChannel[{channel1, channel2, ...}]` deletes all the channeli.

`DeleteChannel[All]` deletes all channels owned by the currently authenticated user.

## Examples

Delete a channel:

```wolfram
DeleteChannel[ChannelObject["mychannel"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeleteChannel.html) for more details.*