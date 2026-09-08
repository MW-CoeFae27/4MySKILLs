# AI Developer Skills Package
## Autonomous Agent Execution Specification

Version: 1.0
Target Year: 2026
Platform: Node.js + MCP Server
Purpose: Build production-ready AI Skills that improve software engineering productivity, code quality, and incident response.

---

# Mission

Build a reusable AI Skill package named:

```text
dev-ai-skills
```

The package shall expose three high-value developer skills through a Node.js MCP server.

The resulting solution must be:

- Modular
- Extensible
- Open-source friendly
- LLM-provider agnostic
- GitHub / Azure DevOps compatible
- Production-ready

---

# Deliverables

The agent shall generate:

```text
dev-ai-skills/
│
├── package.json
├── README.md
├── .env.example
├── server.js
│
├── skills/
│   ├── impact-analyzer.js
│   ├── root-cause-investigator.js
│   └── pr-reviewer.js
│
├── prompts/
│   ├── impact-analyzer.md
│   ├── root-cause-investigator.md
│   └── pr-reviewer.md
│
├── services/
│   ├── git-service.js
│   ├── github-service.js
│   ├── azure-devops-service.js
│   └── llm-service.js
│
├── tests/
│   ├── impact-analyzer.test.js
│   ├── root-cause.test.js
│   └── reviewer.test.js
│
└── docs/
    └── architecture.md
```

---

# Skill 1
# Codebase Impact Analyzer

## Problem Statement

Developers often do not know the full impact of changing:

- API contracts
- Data models
- Database schema
- Domain entities
- Business rules

The skill shall predict downstream impact.

---

## Inputs

```json
{
  "changeRequest": "Add Archived status to Customer entity"
}
```

---

## Agent Workflow

Step 1

Scan repository structure.

Step 2

Identify:

- entity definitions
- DTOs
- API contracts
- database models
- event schemas

Step 3

Search for references.

Step 4

Generate dependency graph.

Step 5

Classify impact severity.

---

## Output Format

```json
{
  "riskLevel": "High",
  "affectedFiles": [],
  "affectedServices": [],
  "recommendedTasks": []
}
```

---

## Required Features

### Dependency Discovery

Identify:

```text
imports
references
inheritance
interface implementations
```

### API Analysis

Identify:

```text
REST endpoints
GraphQL schemas
gRPC contracts
```

### Database Analysis

Identify:

```text
tables
views
stored procedures
ORM entities
```

### Event Analysis

Identify:

```text
Kafka
RabbitMQ
Azure Service Bus
MQTT
```

---

## Risk Levels

```text
LOW
MEDIUM
HIGH
CRITICAL
```

---

# Skill 2
# Root Cause Investigator

## Problem Statement

Developers spend significant time locating root causes after incidents.

The skill shall automatically investigate:

- logs
- stack traces
- deployments
- commits
- pull requests

---

## Inputs

```json
{
  "errorLog": "",
  "stackTrace": "",
  "deploymentTime": ""
}
```

---

## Agent Workflow

Step 1

Parse stack traces.

Step 2

Identify:

```text
NullReference
TypeError
Timeout
NetworkError
DatabaseError
AuthenticationError
```

Step 3

Collect:

```bash
git log
git diff
git blame
```

Step 4

Compare timeline:

```text
deployment
incident start
commit history
```

Step 5

Calculate probability scoring.

---

## Output

```json
{
  "rootCause": "",
  "confidence": 95,
  "evidence": [],
  "recommendedFix": []
}
```

---

## Required Integrations

### Git

Read:

```bash
git log
git show
git diff
```

### CI/CD

Support:

```text
Azure DevOps
GitHub Actions
GitLab
Jenkins
```

### Logs

Support:

```text
Text Logs
JSON Logs
Application Insights
Elastic
Splunk
```

---

# Skill 3
# AI Pull Request Reviewer

## Problem Statement

Manual code reviews are inconsistent.

The skill shall perform an AI-based review before human review.

---

## Inputs

```json
{
  "pullRequest": "",
  "changedFiles": []
}
```

---

## Agent Workflow

Step 1

Read changed files.

Step 2

Detect:

```text
Security Issues
Performance Issues
Design Issues
Code Smells
Technical Debt
```

Step 3

Validate architecture compliance.

Step 4

Verify test coverage.

Step 5

Generate review report.

---

## Output

```json
{
  "summary": "",
  "highSeverity": [],
  "mediumSeverity": [],
  "lowSeverity": [],
  "recommendations": []
}
```

---

# Security Review Requirements

Detect:

```text
SQL Injection
Command Injection
Cross Site Scripting
Path Traversal
Hardcoded Secrets
Weak Authentication
Exposed Credentials
```

---

# Performance Review Requirements

Detect:

```text
N+1 Queries
Blocking Calls
Inefficient Loops
Repeated Database Access
Memory Leaks
```

---

# Architecture Review Requirements

Detect:

```text
Circular Dependencies
Layer Violations
God Classes
Duplicate Logic
Improper Separation Of Concerns
```

---

# MCP Server Requirements

## Technology Stack

```text
Node.js LTS
TypeScript preferred
MCP SDK
Express.js optional
```

---

## MCP Tool Registration

Expose tools:

```text
impact-analyzer
root-cause-investigator
pr-reviewer
```

---

## MCP Configuration Example

```json
{
  "mcpServers": {
    "dev-ai-skills": {
      "command": "node",
      "args": [
        "./server.js"
      ]
    }
  }
}
```

---

# LLM Provider Requirements

Support:

```text
Azure OpenAI
OpenAI
Anthropic
Ollama
GitHub Models
```

---

## Environment Variables

```bash
LLM_PROVIDER=

OPENAI_API_KEY=

AZURE_OPENAI_ENDPOINT=
AZURE_OPENAI_API_KEY=

ANTHROPIC_API_KEY=

OLLAMA_URL=

GITHUB_MODELS_TOKEN=
```

---

# Development Tasks

## Phase 1

Create MCP server skeleton.

Deliverables:

```text
package.json
server.js
skills/
```

---

## Phase 2

Implement Codebase Impact Analyzer.

Acceptance Criteria:

- dependency scan works
- outputs risk score
- identifies affected files

---

## Phase 3

Implement Root Cause Investigator.

Acceptance Criteria:

- parses stack traces
- correlates commits
- calculates confidence score

---

## Phase 4

Implement AI Pull Request Reviewer.

Acceptance Criteria:

- reviews code changes
- finds security issues
- generates actionable comments

---

## Phase 5

Add Tests.

Coverage target:

```text
80% minimum
```

---

## Phase 6

Generate Documentation.

Create:

```text
README.md
architecture.md
installation.md
usage.md
```

---

# Success Criteria

The project is complete when:

✓ MCP server launches successfully

✓ All three tools can be called independently

✓ Tools can access repository context

✓ Unit tests pass

✓ Documentation is generated

✓ AI-generated outputs are structured JSON

✓ Supports multiple LLM providers

✓ Ready for publishing to npm

---

# Future Roadmap

Implement the following additional skills:

1. Test Failure Diagnostician
2. Database Migration Risk Analyzer
3. Architecture Drift Detector
4. Legacy Code Modernizer
5. API Contract Compatibility Checker
6. AI Documentation Generator
7. Incident Postmortem Generator
8. Technical Debt Prioritizer

These future skills should share the same MCP architecture and be installable as independent modules.