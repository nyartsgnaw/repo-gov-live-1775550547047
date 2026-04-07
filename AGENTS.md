# Repository Governance Guidance

## Mission

- Treat `.devops/index/file-index.json` as the local file graph source of truth.
- Treat `AGENTS.md`, `CLAUDE.md`, `.codex/*`, and `.github/*` as generated projections, not canonical governance state.
- Treat `.devops/owners/*/owner.yaml` and `.devops/owners/*/agent.md` as the canonical owner runtime contracts.
- Assign capabilities at file level, not module level.
- Route ownership through capability owners who also act as gatekeepers.
- Use worktree-backed sandbox flows for any write-capable or repo-backed test command.

## Capability Owners

- owner-backend-api: backend.api -> 1 files | git owner-backend-api@local | github @nyartsgnaw
- owner-domain-logic: domain.logic -> 1 files | git owner-domain-logic@local | github @nyartsgnaw
- owner-external-integration: external.integration -> 1 files | git owner-external-integration@local | github @nyartsgnaw
- owner-infra-workflow: infra.workflow -> 2 files | git owner-infra-workflow@local | github @nyartsgnaw
- owner-llm-modeling: llm.modeling -> 2 files | git owner-llm-modeling@local | github @nyartsgnaw

## Capability Checks

- check-backend-api: 1 files
- check-domain-logic: 1 files
- check-external-integration: 1 files
- check-infra-workflow: 2 files
- check-llm-modeling: 2 files

## Suites

- suite-src-unit: unit -> owner-backend-api, owner-domain-logic, owner-external-integration, owner-llm-modeling | playbook .devops/suites/suite-src-unit/PLAYBOOK.md

## Owner Runtime

- Owner agents review changed scope and draft approval or request-changes decisions.
- Owner agents may run scoped checks from suite playbooks or runtime contracts, but must not modify governed files.
- Calibration audits may activate all owners without a real diff to validate scope contracts and suite routing.
- A new code-modifying push invalidates prior owner approval when stale dismissal is enabled.

## Workflow

1. Configure credentials before analysis.
2. Scan the source repo and refresh the canonical file index through preview, sandbox, and publish.
3. Infer file capabilities and capability owners.
4. Compile and inspect `.devops/suites/*/suite.yaml` and `.devops/suites/*/PLAYBOOK.md` before owner review.
5. Compile and inspect `.devops/owners/*/owner.yaml` and `.devops/owners/*/agent.md` before owner review.
6. Preview file, graph, and merge impacts.
7. Apply changes in a git worktree.
8. Verify before any publish step.
