const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const baseConfig = getDefaultConfig(__dirname);
const customConfig = {
  // You can add any additional custom metro settings here if needed
};

const mergedConfig = mergeConfig(baseConfig, customConfig);

// ✅ Wrap with Reanimated
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
