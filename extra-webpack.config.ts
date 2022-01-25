import {CustomWebpackBrowserSchema, TargetOptions} from '@angular-builders/custom-webpack';
import * as webpack from 'webpack';
import * as pkg from './package.json';

export default (
  config: webpack.Configuration,
  options: CustomWebpackBrowserSchema,
  targetOptions: TargetOptions
) => {
  config.plugins!.push(
    new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify(pkg.version),
    })
  );

  return config;
};
