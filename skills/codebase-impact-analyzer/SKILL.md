---
name: codebase-impact-analyzer
description: Analyze a proposed repository change, its dependencies, risk, and validation needs before implementation.
---

# Codebase Impact Analyzer

## Purpose

Assess the likely impact of a requested code change before anyone edits the repository. Use repository evidence to identify affected files, services, interfaces, data structures, tests, and implementation risk.

## Usage Example

```text
Use codebase-impact-analyzer.

Change request:
Add Archived status to the Customer entity.
```

## Execution Instructions

1. Read the change request and restate the intended behavior and explicit constraints.
2. Inspect the repository structure and identify the language, build system, test framework, and relevant project boundaries.
3. Locate the owning entities, models, DTOs, interfaces, enums, schemas, persistence mappings, API contracts, and configuration.
4. Find references, call sites, serializers, validators, migrations, queries, UI consumers, documentation, and tests connected to the change.
5. Trace dependencies across modules or services. Distinguish direct impacts from plausible but unverified impacts.
6. Identify compatibility concerns, data migration needs, security implications, performance concerns, and rollback considerations.
7. Assign exactly one risk level: `LOW`, `MEDIUM`, `HIGH`, or `CRITICAL`. Explain the evidence for the rating.
8. Recommend the smallest ordered set of implementation tasks and a validation strategy.
9. Do not modify source code. Do not invent files, APIs, dependencies, or runtime behavior. Mark unknowns as `Unknown` and state how to verify them.
10. Exclude personal, confidential, credential, and enterprise-specific information from the report.

## Deliverable

Create `impact-analysis.md` at the repository root.

## Report Structure

```markdown
# Impact Analysis

## Change Request
## Executive Summary
## Risk Level
## Affected Files
## Affected Services
## Affected APIs
## Data Impact
## Test Impact
## Recommended Tasks
## Recommended Validation Strategy
```

Use file paths and symbols as evidence. Keep the report concise enough to review, and explicitly separate confirmed findings from assumptions.