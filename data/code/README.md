# Code files convention

Each card gets its own folder: `card-01`, `card-02`, ... `card-12`
(two-digit number, matching that card's `id` in `cardRegistry.ts`).

Inside each folder, exactly three files:

```
data/code/card-01/tailwind.html
data/code/card-01/bootstrap.html
data/code/card-01/vuetify.html
```

Each one contains only that code block (HTML/Vue + classes, and a small
`<style>` if needed for something the framework itself doesn't support —
e.g. backdrop-blur in Bootstrap/Vuetify) — no extra logic.

If a file for a given framework hasn't been added yet, `cardRegistry.ts`
automatically shows placeholder text ("Waiting to receive the code...") —
so there's no need to create an empty file, just add the file once you
have the real code.

To add the remaining cards (2 through 12), just create these same three
files with the correct number; there's no need to change `cardRegistry.ts`,
since `import.meta.glob` finds all of them automatically.
