## Scoped Claude Memory Template

Use this template only when a subtree genuinely needs local Claude memory.

Required structure:

1. Import the repository root memory first.
2. Import the canonical owner contract(s) for this subtree.
3. Import the relevant suite playbook(s) for this subtree.
4. Add only scope-specific constraints or local debugging context.

Rules:

- Do not duplicate root governance policy text unless the subtree truly overrides it.
- Do not edit generated projections by hand.
- Do not grant write authority beyond the existing worktree-first governance flow.
- Keep scoped memories narrow and owner-aligned.
