---
name: ai-pr-reviewer
description: Perform an evidence-based pre-review of current changes for security, performance, maintainability, test coverage, and architecture risks.
---

# AI PR Reviewer

## Purpose

Review the current change set before human review. Prioritize actionable defects and regressions over style preferences, and make findings easy to verify.

## Usage Example

```text
Use ai-pr-reviewer.

Review the current pull request and report actionable findings.
```

## Execution Instructions

1. Establish the review scope from the diff, commit range, or current working tree. Read surrounding code and relevant tests before judging behavior.
2. For each finding, identify the file, symbol or line, severity, concrete failure mode, and a practical recommendation. Do not report hypothetical concerns without a credible path.
3. Check security for SQL injection, command injection, secrets or credential exposure, unsafe input handling, path traversal, authorization gaps, and insecure defaults.
4. Check performance for inefficient loops, repeated queries, blocking calls, unbounded work, resource leaks, and avoidable allocation or I/O.
5. Check maintainability for duplicate logic, confusing names, complex functions, dead code, brittle assumptions, missing error handling, and missing tests.
6. Check architecture for layer violations, controller fatigue, circular dependencies, misplaced responsibilities, and inappropriate coupling.
7. Check test coverage for changed behavior, failure paths, boundary cases, compatibility, and regression protection. Treat absent tests as a finding only when the risk justifies it.
8. Look for user-visible, API, schema, migration, backward-compatibility, and operational effects.
9. Order findings by severity: high, medium, then low. Use `None found` when a category has no evidence-based finding.
10. Do not modify code. Do not expose secrets or personal, confidential, or enterprise-specific information in the report. State review limitations when the diff or required context is unavailable.

## Deliverable

Create `pr-review-report.md` at the repository root.

## Report Structure

```markdown
# Pull Request Review

## Executive Summary
## High Severity Findings
## Medium Severity Findings
## Low Severity Findings
## Security Review
## Performance Review
## Maintainability Review
## Architecture Review
## Recommended Improvements
## Approval Recommendation
```

The approval recommendation must be one of `Approve`, `Approve with follow-up`, or `Request changes`, with a short evidence-based explanation.