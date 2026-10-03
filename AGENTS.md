# Agent instructions

## Repository safety

This documentation project contains more than 3,000 pages.

- **Do not run the site build.** In particular, do not run `npm run build`, `next build`, or another command that generates the complete site.
- Do not run `npm run dev` merely to validate a documentation-only edit.
- Avoid commands that regenerate or process the entire documentation collection unless the user explicitly requests them.
- Prefer narrow source checks such as `git diff --check`, JSON parsing for edited JSON files, targeted searches with `rg`, and inspection of only the changed files.
- Preserve unrelated working-tree changes.

## Turning support chats into FAQ entries

Follow this workflow whenever the user provides raw support messages, Telegram transcripts, screenshots, or code and asks to add or update the FAQ.

### Canonical locations

- Searchable FAQ: `content/frontend/Troubleshooting.mdx`
- The page title is **Help & FAQ**, but its `Troubleshooting` filename and URL are intentionally preserved for existing links.
- Detailed symbol and feature documentation lives elsewhere under `content/frontend/`.
- Sidebar placement is controlled by `content/frontend/meta.json`. Do not edit it for routine FAQ additions.
- The search empty-state fallback is in `src/app/(home)/search/page.tsx`. Do not edit it for routine FAQ additions.

### Goal

Convert a noisy conversation into a short, self-contained, search-friendly answer while keeping detailed technical facts in the relevant canonical documentation page.

The FAQ is not a transcript archive. Do not copy the conversation verbatim.

### 1. Extract resolved questions

Read the entire conversation before editing.

- Identify the user's actual problem, not only their first wording.
- Identify the final solution that was confirmed to work.
- Treat messages such as “that works” or “fixed it” as useful confirmation.
- Split unrelated problems into separate FAQ questions.
- Merge multiple symptoms when they have the same cause and solution.
- Include useful search synonyms. For example, “labels” may also cover legends, insets, annotations, or other frontend elements.
- Ignore greetings, apologies, emojis, repeated attempts, and social chatter.
- Do not include participant names unless attribution is technically necessary.

If the conversation is unresolved, contradictory, or only speculative, do not publish a definitive FAQ answer. Report what remains uncertain and ask for clarification or recommend a GitHub Discussion.

### 2. Protect privacy

- Remove names, usernames, email addresses, tokens, license keys, private URLs, and machine-specific paths.
- Generalize personal file paths and account details.
- If the transcript mentions an image but the image itself was not provided, do not invent its contents.
- Use an attached screenshot only to understand the problem. Add it to the documentation only when the image is essential and the user has authorized publishing it.

### 3. Check existing documentation

Search before writing:

```bash
rg -n -i 'relevant term|option name|error text' content/frontend
```

Check:

1. Whether the FAQ already answers the question.
2. Whether a symbol or feature page documents the option.
3. Exact capitalization, syntax, defaults, units, and platform restrictions.
4. Whether the existing answer describes an older implementation.

Maintainer replies in support chats and GitHub Discussions are useful source material, but they can be outdated. Reconcile them with the current repository documentation. Never invent an option name, default value, supported version, or platform capability.

When wording in the transcript is approximate, use the verified documentation term. For example, if someone recalls `AnchorPoint` but the implemented option is `AlignmentPoint`, document `AlignmentPoint`.

### 4. Choose where the information belongs

Usually make both of these edits:

1. Add a short answer to **Help & FAQ**.
2. Add or improve the detailed explanation on the relevant canonical page.

Use this routing:

- Repeated, broadly useful, resolved question → FAQ.
- Exact option behavior or API syntax → symbol/feature page.
- Reproducible defect without a stable workaround → GitHub Issue, not a claimed FAQ solution.
- Open-ended design question, unusual setup, or evolving workaround → GitHub Discussion.
- Temporary version-specific workaround → document the affected version and avoid presenting it as permanent behavior.

Do not duplicate a long explanation in the FAQ. Summarize it and link to the canonical page with a relative link.

### 5. Write a searchable FAQ entry

Use a level-three heading under the most relevant existing level-two section:

```mdx
### Why are labels, legends, or insets missing after `Rasterize` or PDF export?
```

Prefer the words a user is likely to type into website search. A strong entry normally contains:

1. A question phrased as the visible symptom.
2. One or two sentences explaining the cause.
3. The smallest working solution.
4. An important limitation or platform note, when applicable.
5. A relative link to detailed documentation.

Example:

````mdx
### Why is part of a `TeXView` label cropped?

The browser may estimate the LaTeX container too early or make it too small.
Give the container an explicit width and height:

```wolfram
TeXView[latex, ImageSize -> {100, 50}]
```

Use `AlignmentPoint` when the label also needs positioning. See
[`TeXView`](./GUI/TeXView#options).
````

Writing rules:

- Use plain English and present tense.
- Keep the answer compact, normally one to four short paragraphs.
- Use fenced code blocks with the correct language, usually `wolfram`, `bash`, or `json`.
- Preserve exact error text and option names in inline code.
- Prefer descriptive link text over “click here.”
- Use relative links for documentation pages and absolute links for GitHub or other external sites.
- Use a warning `Callout` for a significant platform restriction or data-loss risk.
- Do not hide FAQ questions inside accordions; visible headings are better for search indexing and direct links.
- Do not add unverified claims merely to make the answer sound complete.

### 6. Update the canonical page

If the answer exposes a missing detail in a symbol or feature page, update that page too.

Examples:

- `TeXView[..., ImageSize -> {width, height}]` belongs in `content/frontend/GUI/TeXView.mdx`.
- `Export[..., "ExposureTime" -> seconds]` belongs in `content/frontend/File-Operations/Export.mdx`.
- `Rasterize[..., "ExposureTime" -> seconds]` belongs in `content/frontend/Image/Rasterize.mdx`.

On canonical pages:

- Explain what the option controls.
- State units and defaults only when verified.
- Include one minimal example.
- Mention important related APIs with a relative link.
- State platform limitations next to the affected behavior.

### 7. Handle platform restrictions precisely

Do not generalize a restriction beyond the affected operation.

For example:

- `Rasterize` requires the WLJS Notebook Desktop application.
- PDF `Export` requires the WLJS Notebook Desktop application.
- Those operations are unavailable in server mode.
- Ordinary data export formats may not share that restriction.

### 8. Validate without building

Never run the full build for an FAQ update.

At minimum, run:

```bash
git diff --check
git status --short
```

Then inspect the changed passages with `sed` or `rg`. If JSON was edited, parse only that JSON file:

```bash
node -e "JSON.parse(require('fs').readFileSync('content/frontend/meta.json', 'utf8'))"
```

Do not claim the site compiled unless an authorized compilation actually succeeded. If a narrow type check reports pre-existing errors, distinguish them from errors in the changed files.

### 9. Report the result

Tell the user:

- which FAQ questions were added or changed;
- which canonical pages were updated;
- any wording or option-name correction made during verification;
- which lightweight checks passed;
- that no build was run.

Use clickable absolute file links in the final response.

## Quick transcript checklist

Before finishing, confirm:

- [ ] The final answer was confirmed or independently documented.
- [ ] Separate problems became separate FAQ entries.
- [ ] Names and private information were removed.
- [ ] Technical names and code were verified.
- [ ] Search terms from the user's wording are present.
- [ ] The FAQ answer links to the detailed page.
- [ ] The detailed page contains the durable technical explanation.
- [ ] Desktop/server restrictions are stated narrowly and accurately.
- [ ] Existing unrelated changes were preserved.
- [ ] `git diff --check` passed.
- [ ] No site build was run.
