module.exports = {
    /* endpoint: 'https://api.github.com/', */
    token: '',
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