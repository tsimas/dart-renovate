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
    httpProxy: "http://nginx:80",
    httpsProxy: "https://nginx:443"
  };