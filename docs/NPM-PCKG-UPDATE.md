Use `npm version`; it updates both `package.json` and `package-lock.json`, creates a Git commit, and creates a matching Git tag.

From the package directory:

```powershell
Set-Location 'C:\GitHub_All\MyFlexGitHub\dev-skills-pack'
npm version patch
```

This changes:

```text
1.0.0 -> 1.0.1
```

Other release levels:

```powershell
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0
```

Then push the commit and tag:

```powershell
git push origin main --follow-tags
```

That tag triggers `publish.yml`, which publishes the new version automatically once npm Trusted Publishing is configured.

You can edit `package.json` manually, but then also update `package-lock.json` and create the tag yourself. `npm version` avoids those mismatches.