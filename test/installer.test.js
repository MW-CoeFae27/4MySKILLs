import { execFile } from 'node:child_process';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import test from 'node:test';
import assert from 'node:assert/strict';

const run = promisify(execFile);
const installer = fileURLToPath(new URL('../bin/init.js', import.meta.url));

async function inTempRepository(callback) {
  const directory = await mkdtemp(join(tmpdir(), 'dev-skills-pack-'));
  try {
    return await callback(directory);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}

test('init creates all skill files', async () => {
  await inTempRepository(async (directory) => {
    const result = await run(process.execPath, [installer, 'init'], { cwd: directory });
    assert.match(result.stdout, /Skills installed/);
    for (const name of ['codebase-impact-analyzer', 'root-cause-investigator', 'ai-pr-reviewer']) {
      const content = await readFile(join(directory, '.github', 'skills', name, 'SKILL.md'), 'utf8');
      assert.ok(content.length > 0);
    }
  });
});

test('init preserves existing files without force', async () => {
  await inTempRepository(async (directory) => {
    const target = join(directory, '.github', 'skills', 'ai-pr-reviewer', 'SKILL.md');
    await mkdir(join(directory, '.github', 'skills', 'ai-pr-reviewer'), { recursive: true });
    await writeFile(target, 'custom content');
    await run(process.execPath, [installer, 'init'], { cwd: directory });
    assert.equal(await readFile(target, 'utf8'), 'custom content');
  });
});

test('init overwrites existing files with force', async () => {
  await inTempRepository(async (directory) => {
    const target = join(directory, '.github', 'skills', 'ai-pr-reviewer', 'SKILL.md');
    await mkdir(join(directory, '.github', 'skills', 'ai-pr-reviewer'), { recursive: true });
    await writeFile(target, 'custom content');
    await run(process.execPath, [installer, 'init', '--force'], { cwd: directory });
    assert.match(await readFile(target, 'utf8'), /AI PR Reviewer/);
  });
});