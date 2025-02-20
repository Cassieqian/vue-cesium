module.exports = {
  globals: {
    // work around: https://github.com/kulshekhar/ts-jest/issues/748#issuecomment-423528659
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [151001]
      }
    }
  },
  runner: 'jest-electron/runner',
  testEnvironment: 'jest-electron/environment',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(t|j)sx?$': [
      'babel-jest',
      {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: 'current'
              }
            }
          ],
          '@babel/preset-typescript'
        ],
        plugins: ['@vue/babel-plugin-jsx', '@babel/plugin-proposal-class-properties']
      }
    ]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  // u can change this option to a more specific folder for test single component or util when dev
  // for example, ['<rootDir>/packages/input']
  roots: ['<rootDir>'],
  modulePathIgnorePatterns: ['<rootDir>/packages/vue-cesium'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  collectCoverageFrom: [
    'packages/*/src/**/*.ts'
  ]
}
