# SKILLS-MASTER-PLAN.md

# Project: dev-skills-pack

Version: 1.0.0

## Mission

Create an npm-installable AI Agent Skill package for software developers.

The package shall provide reusable SKILL.md files that can be installed into a repository and executed by Copilot Agent Mode.

The solution must:

- Be 100% cost-free
- Require no MCP server
- Require no cloud hosting
- Require no OpenAI API key
- Require no Azure OpenAI services
- Require no Anthropic services
- Be distributed through npm
- Follow the same installation philosophy as skill-based agent packages
- Be portable across repositories
- do not include personal and enterprise information in the generated outputs
---

# Architecture

## Design Principles

The solution SHALL use:

```text
Developer
    ↓
GitHub Copilot Agent
    ↓
SKILL.md
    ↓
Repository Analysis
    ↓
Generated Markdown Deliverables
```

The solution SHALL NOT use:

```text
MCP Server
API Gateway
Cloud Services
Database Servers
Kubernetes
Azure OpenAI
OpenAI APIs
Anthropic APIs
```

The skill instructions must rely entirely on the AI capabilities already available within the user's Copilot Agent environment.

---

# Deliverables

The AI agent shall generate:

```text
dev-skills-pack/

├── package.json
├── README.md
├── LICENSE
│
├── bin/
│   └── init.js
│
├── skills/
│
│   ├── codebase-impact-analyzer/
│   │   └── SKILL.md
│   │
│   ├── root-cause-investigator/
│   │   └── SKILL.md
│   │
│   └── ai-pr-reviewer/
│       └── SKILL.md
│
├── test/
│   ├── installer.test.js
│   ├── structure.test.js
│   └── skill-content.test.js
│
└── .github/
    └── workflows/
        └── ci.yml
```

---

# Installation Experience

Users shall install the package using:

```bash
npx dev-skills-pack@latest init
```

The installer shall create:

```text
.github/skills/

├── codebase-impact-analyzer/
│   └── SKILL.md
│
├── root-cause-investigator/
│   └── SKILL.md
│
└── ai-pr-reviewer/
    └── SKILL.md
```

---

# Skill 1

# codebase-impact-analyzer

## Purpose

Analyze the potential impact of a proposed code change before implementation.

Help developers understand:

- affected files
- affected services
- affected APIs
- affected data structures
- testing requirements
- implementation risk

---

## Agent Usage Example

```text
Use codebase-impact-analyzer.

Change Request:

Add Archived status to Customer entity.
```

---

## Agent Execution Instructions

The AI agent must:

1. Scan repository structure.

2. Identify:

```text
Entities
Models
DTOs
Interfaces
Enums
```

3. Find references.

4. Find dependencies.

5. Identify affected areas.

6. Evaluate implementation complexity.

7. Determine risk level.

8. Generate report.

---

## Deliverable

Create:

```text
impact-analysis.md
```

---

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

---

# Risk Scoring

Allowed values:

```text
LOW
MEDIUM
HIGH
CRITICAL
```

---

# Skill 2

# root-cause-investigator

## Purpose

Investigate incidents using available repository context.

Help developers identify:

- likely root causes
- affected commits
- probable regressions
- code locations requiring fixes

---

## Agent Usage Example

```text
Use root-cause-investigator.

Investigate the attached stack trace and logs.
```

---

## Agent Execution Instructions

The AI agent must:

1. Read logs.

2. Read stack traces.

3. Identify error patterns.

4. Review recent code changes.

5. Correlate likely causes.

6. Produce evidence.

7. Recommend fixes.

---

## Deliverable

Create:

```text
root-cause-analysis.md
```

---

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

---

# Confidence Levels

Allowed values:

```text
LOW
MEDIUM
HIGH
```

---

# Skill 3

# ai-pr-reviewer

## Purpose

Perform an automated pre-review before human code review.

The skill shall focus on:

- security
- performance
- maintainability
- test coverage
- architecture

---

## Agent Usage Example

```text
Use ai-pr-reviewer.

Review the current pull request.
```

---

## Agent Execution Instructions

The AI agent must evaluate:

### Security

```text
SQL Injection
Command Injection
Secrets
Credential Exposure
Unsafe Input Handling
Path Traversal
```

### Performance

```text
Inefficient Loops
Repeated Queries
Blocking Calls
Resource Misuse
```

### Maintainability

```text
Duplicate Logic
Naming Problems
Complex Functions
Dead Code
Missing Tests
```

### Architecture

```text
Layer Violations
Controller Fatigue
Circular Dependencies
Improper Separation of Concerns
```

---

## Deliverable

Create:

```text
pr-review-report.md
```

---

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

---

# Installer Requirements

## init Command

The package shall expose:

```bash
npx dev-skills-pack@latest init
```

The installer shall:

1. Create .github/skills if missing.

2. Copy all bundled skills.

3. Preserve existing files unless:

```bash
--force
```

is provided.

---

## Force Install

Example:

```bash
npx dev-skills-pack@latest init --force
```

Behavior:

```text
Overwrite existing SKILL.md files.
```

---

# Testing Requirements

## Unit Tests

The AI agent shall create tests for:

### Installer

Verify:

```text
Folder creation
File copying
Overwrite protection
Force overwrite
```

---

### Skill Validation

Verify:

```text
Required sections exist
Markdown format valid
No empty skill files
```

---

### Snapshot Tests

Validate:

```text
Skill content remains unchanged.
```

---

# Test Structure

```text
test/

├── installer.test.js
├── structure.test.js
└── skill-content.test.js
```

---

# Sample Test Cases

## Installer Test

Verify:

```text
init creates .github/skills
```

Expected:

```text
Folder exists
```

---

## Force Install Test

Verify:

```text
--force replaces files
```

Expected:

```text
Updated content present
```

---

## Skill Content Test

Verify:

```text
Every skill contains:

Purpose
Usage Example
Execution Instructions
Deliverable
```

---

# npm Package Requirements

## package.json

Must contain:

```json
{
  "name": "dev-skills-pack",
  "version": "1.0.0",
  "license": "MIT",
  "type": "module"
}
```

---

## Binary Entry

```json
{
  "bin": {
    "dev-skills-pack": "./bin/init.js"
  }
}
```

---

# Continuous Integration

## Workflow

Create:

```text
.github/workflows/ci.yml
```

Pipeline:

```text
Install Dependencies
Run Tests
Validate Package
Dry Run Packaging
```

---

## Commands

```bash
npm ci
npm test
npm pack --dry-run
```

---

# Documentation Requirements

Create README.md with:

## Installation

```bash
npx dev-skills-pack@latest init
```

---

## Available Skills

Document:

```text
codebase-impact-analyzer
root-cause-investigator
ai-pr-reviewer
```

---

## Example Usage

Provide example prompts for each skill.

---

# Release Requirements

## npm Publishing

Validation:

```bash
npm test
npm pack --dry-run
```

Publish:

```bash
npm publish --access public
```

---

# Acceptance Criteria

The project is complete only when:

✓ npm package installs successfully

✓ init command works

✓ skills copied correctly

✓ all three skills implemented

✓ tests passing

✓ package publishable

✓ GitHub Actions passing

✓ README complete

✓ no paid services required

✓ no MCP server required

✓ can be used directly with Copilot Agent Mode

---

# Version Roadmap

## v1.0.0

```text
codebase-impact-analyzer
root-cause-investigator
ai-pr-reviewer
```

## v1.1.0

```text
test-failure-diagnostician
database-migration-risk-analyzer
```

## v1.2.0

```text
architecture-drift-detector
technical-debt-prioritizer
```

## v2.0.0

```text
complete software architecture skill suite
```

---

# End of Specification

The AI agent shall generate all project artifacts necessary to create a fully functioning npm-installable developer skill pack and shall prioritize simplicity, portability, maintainability, and zero recurring operational cost.