# Plotting-functions example verification

Date: 2026-07-13

## Scope and method

- Scope: all 101 tracked pages under `content/frontend/Plotting-Functions/`.
- Inventory: 228 fenced Wolfram Language blocks.
- Checked: 190 blocks automatically with the WLJS `kernel_evaluate` tool, plus a manual recheck of `StackedDateListPlot`.
- Skipped: animation/frontend-only examples, examples that read files or use financial/network data, and signature/placeholder blocks.
- No `Rasterize`, file writes, exports, destructive operations, or external-data requests were used.
- Each standalone block was evaluated in a local `Module` so assignments did not leak between examples. The reported result is the returned head, not a rendered image.

### Examples use data that is not defined in their own fence

These blocks failed when run independently because the variable is only assigned in a preceding fence or is never assigned:

- `content/frontend/Plotting-Functions/Histogram3D.md:18-20`: `data` is assigned only in the previous fence.
- `content/frontend/Plotting-Functions/ListLinePlot3D.md:20-22`: `data` is assigned only in the previous fence.
- `content/frontend/Plotting-Functions/PointLegend.mdx:16-18`: `data` is never assigned.
- `content/frontend/Plotting-Functions/PointFigureChart.mdx:17-20`: `data` is never assigned.
- `content/frontend/Plotting-Functions/WaveletImagePlot.md:20-30`: the later fences use `dwd` from the first fence.
- `content/frontend/Plotting-Functions/WaveletMatrixPlot.md:20-30`: the later fences use `dwd` from the first fence.

Make each fence self-contained, or explicitly state that the earlier cell must be evaluated first.

### WaveletMatrixPlot has the wrong input rank

`content/frontend/Plotting-Functions/WaveletMatrixPlot.md:14-18` creates a one-dimensional `data` list. The kernel reports that `WaveletMatrixPlot` expects rank-2 `DiscreteWaveletData`. A small two-dimensional table passed through `DiscreteWaveletTransform` produced `Graphics`, confirming the intended example needs 2D input.


### Kernel warnings or non-renderable standalone results

- `content/frontend/Plotting-Functions/ListLinePlot3D.md:13-16` and `ListPointPlot3D.md:13-22` return `Graphics3D`, but the kernel also emits `General::prng` about `PlotRange -> PlotRange`. This appears to be a WLJS/kernel implementation warning; the input data has the expected 3-coordinate shape.
- `content/frontend/Plotting-Functions/ClockGauge.mdx:12` remains unevaluated as `ClockGauge[]` in the kernel; the explicit-time example at line 16 returns `Image`. This no-argument form may require frontend/dynamic support.

## Verified results

All other runnable blocks returned expected renderable or documented wrapper heads:

- `Graphics`: 111 blocks
- `Graphics3D`: 38 blocks
- `Image`: 3 blocks
- Expected non-graphics values/wrappers: `List` (histogram/periodogram arrays), `BarLegend`, `PointLegend`, `SwatchLegend`, `Legended`, and `Row`

The individual plot calls inside the six multi-expression fences above were also checked separately and returned `Graphics` (or `Legended` where a legend is intentionally added). `StackedDateListPlot` was manually rechecked with its local `data1`/`data2` definitions and returned `Graphics`.

## Intentionally skipped

- Frontend/animation: `AnimatePlot`, `FrameListVideo`, `ListAnimatePlot`, and `ManipulatePlot` examples.
- External or file/network dependent: `KagiChart`, `PointFigureChart`'s `FinancialData` example, and `RenkoChart` examples.
- Non-runnable signatures/placeholders in `AnimatePlot`, `ListLinePlot`, `ListPlot3D`, `ListStepPlot`, `ManipulatePlot`, `Plot`, and `TimelinePlot`.

