import { access, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';

const root = new URL('..', import.meta.url);
const requiredFiles = [
  'package.json',
  'README.md',
  'LICENSE',
  'bin/init.js',
  'skills/codebase-impact-analyzer/SKILL.md',
  'skills/root-cause-investigator/SKILL.md',
  'skills/ai-pr-reviewer/SKILL.md',
  'test/installer.test.js',
  'test/structure.test.js',
  'test/skill-content.test.js',
  '.github/workflows/ci.yml'
];

test('package contains the required project structure', async () => {
  for (const file of requiredFiles) {
    await assert.doesNotReject(access(new URL(`../${file}`, import.meta.url)), file);
  }
  const packageJson = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
  assert.equal(packageJson.name, 'dev-skills-pack');
  assert.equal(packageJson.version, '1.0.0');
  assert.equal(packageJson.license, 'MIT');
  assert.equal(packageJson.type, 'module');
  assert.equal(packageJson.bin['dev-skills-pack'], './bin/init.js');
});