/** @type {import('semantic-release').GlobalConfig} */
/** biome-ignore-all lint/suspicious/noTemplateCurlyInString: <explanation> */
const semanticReleaseConfig = {
    branches: [{ name: 'main' }],
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'conventionalcommits',
                parserOpts: {
                    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
                },
                releaseRules: [
                    { breaking: true, release: 'major' },
                    { type: 'feat', scope: 'BREAKING CHANGE', release: 'major' },
                    { type: 'feat', release: 'minor' },
                    { type: 'feature', release: 'minor' },
                    { type: 'fix', release: 'patch' },
                    { type: 'bugfix', release: 'patch' },
                    { type: 'hotfix', release: 'patch' },
                    { type: 'perf', release: 'patch' },
                    { type: 'refactor', release: 'patch' },
                    { type: 'refactor', scope: '*-logic', release: 'patch' },
                    { type: 'docs', release: false },
                    { type: 'style', release: false },
                    { type: 'test', release: false },
                    { type: 'build', release: false },
                    { type: 'ci', release: false },
                    { type: 'chore', release: false },
                    { type: 'maint', release: false },
                ],
            },
        ],
        [
            '@semantic-release/release-notes-generator',
            {
                preset: 'conventionalcommits',
                parserOpts: {
                    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
                },
                writerOpts: {
                    groupBy: 'type',
                    commitsSort: ['subject', 'scope'],
                },
            },
        ],
        [
            '@semantic-release/changelog',
            {
                changelogFile: 'CHANGELOG.md',
                changelogTitle:
                    '# 📜 Changelog\n\nAll notable changes to this project will be documented in this file.\n\n',
            },
        ],
        [
            '@semantic-release/git',
            {
                assets: ['CHANGELOG.md', 'package.json', 'bun.lock'],
                message: process.env.GITHUB_REF?.includes('dev')
                    ? 'chore(pre-release): ${nextRelease.version} [skip ci]'
                    : 'chore(release): ${nextRelease.version} [skip ci]',
            },
        ],
        [
            '@semantic-release/github',
            {
                releasedLabels: ['released'],
                addReleases: 'bottom',
                githubUrl: 'https://github.com/xlebpushek/itcher',
                githubApiPathPrefix: '/api/v3',
            },
        ],
    ],
    tagFormat: 'v${version}',
    preset: 'conventionalcommits',
}

export default semanticReleaseConfig
