# dev-skills-pack

Portable, cost-free `SKILL.md` files for GitHub Copilot Agent Mode. The package uses no MCP server, cloud service, API key, or external runtime service.

## Installation

Run this from the repository where the skills should be installed:

```bash
npx dev-skills-pack@latest init
```

To replace already-installed skill files:

```bash
npx dev-skills-pack@latest init --force
```

The installer creates `.github/skills/` and preserves existing `SKILL.md` files unless `--force` is supplied.

## Available Skills

### `codebase-impact-analyzer`

Maps a proposed change to affected files, services, APIs, data, tests, risk, and validation. Example: `Use codebase-impact-analyzer to assess adding Archived status to Customer.`

### `root-cause-investigator`

Correlates incident evidence, stack traces, repository code, and recent changes into a root cause analysis. Example: `Use root-cause-investigator to investigate the attached stack trace and logs.`

### `ai-pr-reviewer`

Performs an evidence-based pre-review covering security, performance, maintainability, test coverage, and architecture. Example: `Use ai-pr-reviewer to review the current pull request.`

Each skill writes its specified Markdown deliverable at the repository root and relies only on capabilities already available in Copilot Agent Mode.

## Development

```bash
npm ci
npm test
npm pack --dry-run
```

## Publishing Updates

Publishing is automated by `.github/workflows/publish.yml`. After the package has been published once and npm Trusted Publishing is configured for this repository and workflow, release an update by changing the version, committing it, and pushing a matching tag:

```bash
npm version patch
git push origin main --follow-tags
```

Use `npm version minor` or `npm version major` when appropriate. The workflow runs the tests and package checks, verifies that the tag matches `package.json`, and publishes the package with npm provenance. It runs only for semantic-version tags such as `v1.0.1`.

For the initial publication, create the package on npm and configure its Trusted Publisher to use this GitHub repository, the `Publish Package` workflow, and the `main` branch (or publish the first version with a short-lived npm publish token, then configure Trusted Publishing).

The package is intended for public npm distribution under the MIT license.