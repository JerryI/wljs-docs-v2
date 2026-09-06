# WLJS web component loader

`app.tw.js` is copied from `WLJSTeam/web-components` at commit
`6012ef376c882540408545bdae2fb5c20a7710df` (`src/common/app.tw.js`).

The only functional change is replacing `@latest` in `getBaseHref()` with that
commit. The upstream loader hardcodes its dependency base, so pinning only the
loader's external URL would still load changing CSS and JavaScript modules.

To update, copy `src/common/app.tw.js` from the intended upstream commit, pin its
dependency base to the same commit, and update the provenance comments and this
file. Check notebook rendering before publishing the update.
