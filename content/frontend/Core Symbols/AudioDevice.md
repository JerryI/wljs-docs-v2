# AudioDevice

`AudioDevice` is an option for `Audio` and related functions that specifies the device to use for playback.

## Examples

```wolfram
$AudioDevices
(* List of available audio devices *)
```

```wolfram
EmitSound[Sound[SoundNote[]], AudioDevice -> First[$AudioDevices]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioDevice.html) for more details.*