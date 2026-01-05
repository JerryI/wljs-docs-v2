# HostLookup

`HostLookup[name]` gives the IP address for the host with the specified name.

`HostLookup[address]` gives the host name for the host at the specified IP address.

`HostLookup[spec, prop]` gives a specified property of the host.

`HostLookup[spec, All]` gives an association of properties found for the host.

## Examples

Look up the IP address of a host:

```wolfram
HostLookup["www.wolfram.com"]
(* "140.177.1.18" *)
```

Get all properties for a host:

```wolfram
HostLookup["www.wolfram.com", All]
(* <|"Name" -> "www.wolfram.com", "IPAddress" -> ...| *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HostLookup.html) for more details.*