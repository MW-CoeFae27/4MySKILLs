# Publishing to npm with an Access Token

Use a granular npm access token with **Bypass 2FA** enabled when interactive two-factor authentication is unavailable.

## Diagnosed Error

The npm client was unauthenticated:

```text
npm whoami -> E401 Unauthorized
```

For the first publication of a package, npm may report this authentication problem as `E404 Not Found`. This does not necessarily mean the package name is unavailable.

## Create a Granular Token

1. Sign in to [npmjs.com](https://www.npmjs.com/).
2. Open your profile and select **Access Tokens**.
3. Select **Generate New Token** and create a granular access token.
4. Enable **Bypass two-factor authentication**.
5. Under **Packages and scopes**, configure:
   - Permission: **Read and write**
   - Packages: **All Packages** for the first publication
6. Choose a short expiration period.
7. Generate the token and copy it immediately.

Never place the token in this repository, documentation, source code, Git history, or chat messages.

## Configure npm

Enter the token directly in a local terminal:

```powershell
npm config set //registry.npmjs.org/:_authToken "YOUR_TOKEN" --location=user
```

Verify the authenticated account:

```powershell
npm whoami
```

Expected account:

```text
mw-coefae27
```

## Publish

Run the command from the package directory that does not contain `#`:

```powershell
Set-Location 'C:\GitHub_All\MyFlexGitHub\dev-skills-pack'
npm publish --access public
```

## Remove the Local Token

After publishing, remove the token from the user-level npm configuration:

```powershell
npm config delete //registry.npmjs.org/:_authToken --location=user
```

Confirm that no reusable credential remains configured:

```powershell
npm whoami
```

An authentication error is expected after the token is removed.

## Future Releases

Configure npm Trusted Publishing for `.github/workflows/publish.yml`. Future tagged releases can then publish through GitHub Actions using short-lived OIDC credentials instead of a stored npm token.