module.exports = {
    /* endpoint: 'https://api.github.com/', */
    token: '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',
    platform: 'github',
    logLevel: 'debug',
    onboardingConfig: {
      extends: ['config:base'],
    },
    repositories: ['tsimas/dart-renovate'],
    renovateFork: true,
    username: "tsimas",
    onboarding: false,
    printConfig: true,
    requireConfig: false,
  };