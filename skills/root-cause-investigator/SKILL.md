---
name: root-cause-investigator
description: Investigate an incident using repository evidence, logs, stack traces, and recent changes to identify probable causes and validation steps.
---

# Root Cause Investigator

## Purpose

Turn an incident report into an evidence-based root cause analysis. Correlate symptoms with code paths and recent changes, distinguish facts from hypotheses, and recommend a focused fix and validation plan.

## Usage Example

```text
Use root-cause-investigator.

Investigate the attached stack trace and logs, then identify the most likely regression.
```

## Execution Instructions

1. Read the incident description, logs, stack traces, reproduction steps, and observed versus expected behavior.
2. Classify the error using the available evidence: input, state, dependency, concurrency, configuration, resource, deployment, or unknown.
3. Map stack frames, error messages, and distinctive values to repository files, symbols, and execution paths.
4. Inspect relevant tests and recent repository history with the available Git context. Do not assume the newest commit is causal without evidence.
5. Build a short timeline and list confirmed observations separately from inferences.
6. Compare plausible hypotheses and select the most likely root cause. Assign exactly one confidence level: `LOW`, `MEDIUM`, or `HIGH`.
7. Identify affected components, likely regression boundaries, and conditions that make the issue appear or disappear.
8. Recommend the smallest corrective change, targeted regression tests, and a validation plan. Include a safe rollback or mitigation when relevant.
9. Do not modify source code unless the user explicitly asks for implementation. Do not fabricate logs, commits, stack frames, or environment details.
10. Exclude personal, confidential, credential, and enterprise-specific information from the report.

## Deliverable

Create `root-cause-analysis.md` at the repository root.

## Report Structure

```markdown
# Root Cause Analysis

## Incident Summary
## Error Classification
## Most Likely Root Cause
## Confidence Level
## Supporting Evidence
## Affected Components
## Recommended Fix
## Validation Plan
## Prevention Recommendations
```

Every conclusion should cite a repository path, symbol, log detail, test, or commit when one is available. Label missing evidence and propose the next discriminating check.