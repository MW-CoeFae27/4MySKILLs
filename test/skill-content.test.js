import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

const skills = [
  ['codebase-impact-analyzer', ['Purpose', 'Usage Example', 'Execution Instructions', 'Deliverable']],
  ['root-cause-investigator', ['Purpose', 'Usage Example', 'Execution Instructions', 'Deliverable']],
  ['ai-pr-reviewer', ['Purpose', 'Usage Example', 'Execution Instructions', 'Deliverable']]
];

test('every skill has valid front matter and required sections', async () => {
  for (const [name, sections] of skills) {
    const content = (await readFile(new URL(`../skills/${name}/SKILL.md`, import.meta.url), 'utf8')).replaceAll('\r\n', '\n');
    assert.match(content, /^---\nname: [^\n]+\ndescription: [^\n]+\n---\n/);
    assert.ok(content.trim().length > 0);
    for (const section of sections) {
      assert.match(content, new RegExp(`^## ${section}$`, 'm'));
    }
  }
});