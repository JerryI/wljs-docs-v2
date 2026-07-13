# `content/frontend` example audit

Audit date: 2026-07-13.  Examples were extracted from fenced `wolfram`/`wl`
blocks and evaluated with the WLJS `kernel_evaluate` tool (kernel reported
version 14.3.0).  Each attempted example was evaluated in a fresh temporary
context so definitions from one page could not affect another.

The audit is a runtime preflight, not a replacement for semantic review of
every output object.  Plotting, neural-network training, entity/geographic
lookups, and resource-backed image/model examples can exceed the short test
limit or depend on data unavailable to this kernel; those are recorded as
environmental/timeout cases, not automatically classified as documentation
defects.

## Coverage

| Section | Wolfram blocks | Checked | Skipped | Notes |
|---|---:|---:|---:|---|
| Algebra-and-Polynomials | 355 | 355 | 0 | no failures |
| Calculus | 337 | 256 | 1 | 1 timeout, 1 incomplete symbolic example |
| Data-Manipulation | 528 | 522 | 6 | 2 unsafe/network examples; rendering timeouts |
| Date-and-Time | 141 | 141 | 0 | timeout is the documented `$Aborted` case |
| File-Operations | 199 | 74 | 45 | filesystem-mutating/network examples excluded; missing-file cases are environmental |
| Geographic-Functions | 67 | 67 | 0 | remote/entity lookups timed out |
| Geometry | 222 | 132 | 10 | no runtime failures among checked blocks |
| Graph-Theory | 364 | 364 | 0 | `GraphData` class lookup timed out |
| Image | 285 | 273 | 12 | camera/frontend, resource-backed image, and rendering cases failed/timed out |
| Linear-Algebra | 395 | 393 | 2 | image/audio/data lookup cases timed out |
| Machine-Learning | 220 | 216 | 4 | many model/training/placeholder inputs are not self-contained |
| Mathematical-Functions | 925 | 924 | 1 | five plotting timeouts |
| Numerical-Methods | 146 | 146 | 0 | no failures |
| Probability-and-Statistics | 575 | 574 | 1 | one timeout; one literal placeholder |
| Programming-Constructs | 392 | 294 | 18 | local-kernel/paclet/compiled-code cases are environment-dependent |
| Symbolic-Computation | 280 | 279 | 1 | one raw-memory input defect; one proof timeout |

Totals: 5,431 blocks found; 5,010 checked; 101 skipped by the safety/frontend
filter; 4 batches could not be decoded because the kernel returned malformed
serialization.  The undecoded batches should be rerun if exhaustive output
comparison is required.

## Confirmed incorrect or incomplete examples

These were reproduced directly with `kernel_evaluate` and are actionable.

| File | Problem | Kernel evidence / suggested correction |
|---|---|---|
| [Data-Manipulation/ExtractLayer.md](content/frontend/Data-Manipulation/ExtractLayer.md) | The input association uses the key `"Array"`, but the layer requires `"Input"`. | `ExtractLayer::inpmiss: Required input slot Input was not provided.` Use `layer[<|"Input" -> {1,2,3,4}, "Position" -> 2|>]`, which returns `2`. |
| [Machine-Learning/ImageAugmentationLayer.md](content/frontend/Machine-Learning/ImageAugmentationLayer.md) | `"Rotation" -> 15 Degree` is not a supported parameter for `ImageAugmentationLayer`. | `ImageAugmentationLayer::netunkparam` lists only supported parameters (including `"Input"`, `"Output"`, and `"ReflectionProbabilities"`). Remove the rotation option or replace it with a supported parameter. |
| [Machine-Learning/NetDecoder.md](content/frontend/Machine-Learning/NetDecoder.md) | Both examples have the wrong argument shape. | `NetDecoder["Class", {...}]` gives `NetDecoder::invargs`; `NetDecoder[{"Image", {224,224}}]` treats `{224,224}` as an invalid color space. The class form that evaluates is `NetDecoder[{"Class", {"cat","dog","bird"}}]`; an image form that evaluates is `NetDecoder[{"Image", "RGB"}]` (dimensions are not the second argument). |
| [Symbolic-Computation/RawMemoryExport.md](content/frontend/Symbolic-Computation/RawMemoryExport.md) | An `Image` object is passed directly with element type `"Real32"`; the raw-memory API expects numeric data. | `ForeignFunction::argtype: Expected an argument with type Real32 but found -Image-.` Convert image data first, e.g. `RawMemoryExport[Flatten[ImageData[img]], "Real32"]`. |
| [Calculus/LinearFractionalOptimization.md](content/frontend/Calculus/LinearFractionalOptimization.md) (matrix-constraint block) | `{c1,d1,c2,d2}` and `{A,b}` are only placeholders, so the example is not executable and produces a binding-specification error. | Supply numeric/vector/matrix values (and a variable/domain specification) before presenting this as an evaluated example, or label it explicitly as schematic syntax. |
| [Geographic-Functions/EntityValue.md](content/frontend/Geographic-Functions/EntityValue.md) | The multiple-property example requests country property `"Capital"`, which is not a valid property. | The result contains `Missing["UnknownProperty", {"Country", "Capital"}]`. `"CapitalCity"` returns the Berlin entity for Germany. |
| [Geographic-Functions/EntityClass.md](content/frontend/Geographic-Functions/EntityClass.md) | `Quantity[100, "Millions"]` uses an unrecognized unit. | The kernel emits `Quantity::unkunit`. Use an explicit quantity such as `Quantity[100000000, "People"]` (or label the class expression as schematic). |
| [Algebra-and-Polynomials/NumberCompose.md](content/frontend/Algebra-and-Polynomials/NumberCompose.md) | The “unit objects” example passes `{Quantity[1,"Meters"], Quantity[1,"Centimeters"]}` as radix/weight values. | `NumberCompose::psv` reports that the second argument is not a nonincreasing positive numeric list. Keep the numeric examples, or compose quantities with ordinary arithmetic/`UnitConvert` instead. |
| [Calculus/DimensionalCombinations.md](content/frontend/Calculus/DimensionalCombinations.md) | `Quantity["Length"]`, `Quantity["Time"]`, etc. are treated as units, not physical-quantity specifications. | The examples emit `Quantity::unkunit` and `QuantityVariable::unkpq`. A working form is `DimensionalCombinations[{QuantityVariable["l","Length"], QuantityVariable["t","Time"], QuantityVariable["v","Speed"]}]`. |

## Literal placeholder code that should be completed or labeled schematic

The following executable blocks contain `...`/placeholder objects rather than
valid input data.  They cannot be verified as written:

- [Image/AnimatedImage.mdx](content/frontend/Image/AnimatedImage.mdx): the four export/video blocks use `AnimatedImage[...]`.
- [Image/Image.mdx](content/frontend/Image/Image.mdx): `EventHandler[Image[...], ...]`.
- [Image/LinearGradientImage.mdx](content/frontend/Image/LinearGradientImage.mdx): `LinearGradientImage[..., size]`.
- [Machine-Learning/NetUnfold.md](content/frontend/Machine-Learning/NetUnfold.md): `NetModel["...RNN..."]`.
- [Probability-and-Statistics/SARIMAProcess.md](content/frontend/Probability-and-Statistics/SARIMAProcess.md): `RandomFunction[SARIMAProcess[...], ...]`.
- [Geometry/FindMeshDefects.md](content/frontend/Geometry/FindMeshDefects.md): `BoundaryMeshRegion[...]` is used without constructing a mesh.
- [File-Operations/SearchResultObject.md](content/frontend/File-Operations/SearchResultObject.md): `SearchResultObject[...]` is indexed without a result object.
- `GeoOrientationData[Today, "PolarMotion"]` returns GeoOrientationData::vcomp: Cannot compute value of property PolarMotion for date DateObject[{2026, 7, 13}, Day].
- `GeoElevationData` for Denver and the deterministic coordinate form `GeoElevationData[GeoPosition[{27.9881, 86.9250}]]` work.  The Everest entity example returned `Missing["NotAvailable", ...]` 

There are also many output comments containing ellipses (for example
`Graph[...]`, `DateObject[...]`, and `Image[...]`).  Those are abbreviated
display descriptions and were not treated as defects unless the ellipsis was
in executable input.

