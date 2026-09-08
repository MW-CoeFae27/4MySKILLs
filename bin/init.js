#!/usr/bin/env node

import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const skillsSource = join(packageRoot, 'skills');
const skillsDestination = resolve(process.cwd(), '.github', 'skills');
const force = process.argv.slice(2).includes('--force');
const command = process.argv.slice(2).find((argument) => !argument.startsWith('--'));

if (command !== 'init') {
  console.error('Usage: dev-skills-pack init [--force]');
  process.exitCode = 1;
} else {
  await installSkills();
}

async function installSkills() {
  await mkdir(skillsDestination, { recursive: true });
  const skillNames = ['codebase-impact-analyzer', 'root-cause-investigator', 'ai-pr-reviewer'];

  for (const skillName of skillNames) {
    const sourceFile = join(skillsSource, skillName, 'SKILL.md');
    const destinationFile = join(skillsDestination, skillName, 'SKILL.md');

    if (!force && existsSync(destinationFile)) {
      console.log(`Skipped existing ${destinationFile} (use --force to overwrite).`);
      continue;
    }

    await mkdir(dirname(destinationFile), { recursive: true });
    await cp(sourceFile, destinationFile);
    console.log(`${force ? 'Installed' : 'Copied'} ${skillName}/SKILL.md`);
  }

  const installedFiles = await Promise.all(
    skillNames.map(async (skillName) => readFile(join(skillsDestination, skillName, 'SKILL.md'), 'utf8'))
  );
  await writeFile(join(skillsDestination, '.dev-skills-pack'), `${installedFiles.length} skills installed\n`);
  console.log(`Skills installed in ${skillsDestination}`);
}