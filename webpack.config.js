const webpack = require('webpack');
const WebpackConfigFactory = require('@nestjs/ng-universal')
    .WebpackConfigFactory;
const nodeExternals = require('webpack-node-externals');

/**
 * In fact, passing following configuration to the WebpackConfigFactory is not required
 * default options object returned from this method has equivalent entries defined by default.
 *
 * Example: WebpackConfigFactory.create(webpack);
 */
const webpackOptions = WebpackConfigFactory.create(webpack, {
    // This is our Nest server for Dynamic universal
    server: './server/main.ts',
});

const whitelistedPackages = /^(?!(fastify-swagger)).*/;
webpackOptions.externals[1] = nodeExternals({
    allowlist: whitelistedPackages,
});

webpackOptions.output = {
    libraryTarget: 'commonjs2',
}

webpackOptions.plugins.push(
    new webpack.IgnorePlugin({
        checkResource(resource) {
            const lazyImports = [
                '@nestjs/microservices/microservices-module',
                '@nestjs/websockets/socket-module',
            ];
            console.log( resource )
            if (!lazyImports.includes(resource)) {
                return false;
            }
            try {
                require.resolve(resource);
            } catch (err) {
                return true;
            }
            return false;
        },
    }),
);

module.exports = webpackOptions;