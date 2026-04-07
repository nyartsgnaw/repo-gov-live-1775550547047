# suite-src-unit

## Scope
- Suite path: `src`
- Kind: `unit`
- Frameworks: `vitest`
- Covered files: `src/api/routes.ts`, `src/clients/openai-client.ts`, `src/domain/user-service.ts`
- Owner agents: owner-backend-api, owner-domain-logic, owner-external-integration, owner-llm-modeling

## Mission
Protect unit flows for src and provide a stable entrypoint for owner-agent review.

## Invariants
- Run every entry asset in src before approval when covered files change.

## Required checks
- check-backend-api
- check-domain-logic
- check-external-integration
- check-llm-modeling

## Debug assets
- `src/runtime-critical.test.ts` (unit, vitest, static_verified) | commands: pnpm exec vitest run src/runtime-critical.test.ts | support: none

## Approval rules
- All blocking owners must approve or escalate: owner-backend-api, owner-domain-logic, owner-external-integration, owner-llm-modeling.

## Escalation
- Escalate when required checks fail or owner mappings are unresolved.
- Re-run check-backend-api or escalate if the suite remains red.
- Re-run check-domain-logic or escalate if the suite remains red.
- Re-run check-external-integration or escalate if the suite remains red.
- Re-run check-llm-modeling or escalate if the suite remains red.

## Audit note template
```md
- Suite:
- Changed files:
- Assets run:
- Result:
- Owner decision:
- Escalation:
```
