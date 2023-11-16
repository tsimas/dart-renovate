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
    httpsProxy: "https://nginx:443",
    noProxy: ".github.com"
  };