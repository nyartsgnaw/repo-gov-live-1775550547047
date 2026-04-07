## Canonical Governance Inputs

- `.devops/` is the canonical governance truth root directory.
- Treat `.devops/index/file-index.json` as the deterministic file graph snapshot.
- Treat `.devops/policies/ownership-map.yaml`, `.devops/policies/gate-rules.yaml`, and `.devops/graph/manifests/capability-map.yaml` as canonical governance data.
- Treat `.devops/runtime-contracts/debug-assets.yaml`, `.devops/owners/*`, and `.devops/suites/*` as canonical runtime and verification contracts.
- Treat `AGENTS.md`, `CLAUDE.md`, `.github/*`, and `.codex/*` as generated projections. Regenerate them instead of editing by hand.

## Execution Rules

1. Provider bootstrap must complete before analysis. OpenAI is the active default; Anthropic parity is template-only until credentials are provided.
2. Any write-capable repo operation must run in a linked git worktree.
3. Preview and verify generated projections before publish.
4. Consult owner contracts and suite playbooks before changing governed behavior.

## Shared Claude Memory Contract

- Root memory stays repository-wide and should import canonical generator files instead of duplicating policy text.
- Scoped memories are generated only for subtree scopes that carry canonical suite playbooks and owner contracts.
- Scoped memories should import the root memory plus owner and suite contracts for that subtree.

## Recommended Scoped Memory Roots

- `src`: owner-backend-api, owner-domain-logic, owner-external-integration, owner-llm-modeling
