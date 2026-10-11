# Correct the outdated Clydara homepage reference

The owner explicitly confirmed https://www.clydralab.com/ and requested correcting references to https://clydara-web.vercel.app/, including Clutch. Clutch's existing-provider support form confirmed receipt of the website-only correction. The current signed-in account has no editor for that existing company listing. Both public GitHub repository homepage fields were corrected and read back successfully.

The controlled legacy source repository is MuhammadFaizan-prog/Clydara-web. Its existing main branch automatically deploys two Vercel projects, so a broad redirect would exceed the intended scope. The reviewed clone is clean at f90362f before implementation. Its existing .npmrc uses legacy-peer-deps=true; package and lockfiles will be preserved.

## Design and alternatives

Use one Vercel static redirect: exact source path `/`, exact legacy hostname `clydara-web.vercel.app`, destination `https://www.clydralab.com/`, HTTP 301. This fixes visitors following old homepage links while the directory correction is processed. Other hosts, preview aliases, deeper legacy paths and application assets must not match this rule. The destination already returns canonical HTTP 200; there must be no redirect loop.

Waiting for directory staff alone would leave the old destination active. A global catch-all migration is inappropriate because the two websites have different deeper route inventories and the same repository deploys another project. No client-side redirect, fake page mapping, WAF exception or new infrastructure is needed.

The user requested autonomous execution and no repeated permission questions. The implementation proceeds within that explicit URL-correction scope; no profile ownership transfer, billing changes or new legal agreement is performed.

## Implementation and verification plan

- [x] Verify public directory old link, canonical destination, repository ownership and both existing deployment contexts.
- [x] Submit the factual Clutch website correction and capture its confirmation; update controlled repository metadata.
- [x] Create only `vercel.json` in the legacy repository, containing the hostname-qualified homepage redirect.
- [x] Validate against Vercel's official JSON schema and check selection for the intended host, another project host, a preview host, the canonical host and a deeper path. These selection checks are static; the live HTTP checks below prove edge behavior.
- [x] Install unchanged dependencies and run the legacy build and lint. Build passed. Lint has three existing errors in unchanged `command.tsx`, `textarea.tsx` and `tailwind.config.ts`; seven existing warnings.
- [x] Commit the isolated configuration as `5374798` and push to the legacy repository's main branch. Live old-host behavior confirms deployment.
- [x] Verify the old homepage returns 301 to the exact www domain and the destination returns 200. The Clutch referral query remains on the redirect. The old deeper path remains 404, an existing JS asset remains 200, and the other project's hostname remains 404 as before. The in-app browser followed the old homepage to the canonical page and rendered it.
- [x] Save the deployment and HTTP evidence in the main website report. Clutch's public website field still points to the old host as of 11 October; its support request was accepted but has not yet been applied.

Reference: [Vercel redirect configuration](https://vercel.com/docs/project-configuration/vercel-json#redirects). No claim of indexing, authority, AI citation or traffic growth follows from a redirect alone.
