// Copyright 2013 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0

"use strict";

const platformAndArch = "win32-ia32";

/* istanbul ignore next */
try {
  const za_sharp = require(`D:/sharp-custom/build/Release/sharp-${platformAndArch}.node`);

  const thumbnail_promisified = (options) => {
    const resolver = {};
    resolver.promise = new Promise((resolve, reject) => {
      resolver.resolve = resolve;
      resolver.reject = reject;
    });
    const args = [
      options,
      (error, result) => {
        if (error) {
          resolver.reject(error);
        } else {
          resolver.resolve(result);
        }
      },
    ];
    za_sharp.thumbnail.apply(null, args);
    return resolver.promise;
  };
  module.exports.thumbnail = thumbnail_promisified;

  const thumnail_fs_promisified = (options) => {
    const resolver = {};
    resolver.promise = new Promise((resolve, reject) => {
      resolver.resolve = resolve;
      resolver.reject = reject;
    });
    const args = [
      options,
      (error) => {
        if (error) {
          resolver.reject(error);
        } else {
          resolver.resolve();
        }
      },
    ];
    za_sharp.thumbnailFs.apply(null, args);
    return resolver.promise;
  };
  module.exports.thumbnailFs = thumnail_fs_promisified;
} catch (err) {
  // Bail early if bindings aren't available
  const help = [
    "",
    'Something went wrong installing the "sharp" module',
    "",
    err.message,
    "",
    "Possible solutions:",
  ];
  if (
    /dylib/.test(err.message) &&
    /Incompatible library version/.test(err.message)
  ) {
    help.push('- Update Homebrew: "brew update && brew upgrade vips"');
  } else {
    const [platform, arch] = platformAndArch.split("-");
    if (
      platform === "linux" &&
      /Module did not self-register/.test(err.message)
    ) {
      help.push(
        "- Using worker threads? See https://sharp.pixelplumbing.com/install#worker-threads"
      );
    }
    help.push(
      '- Install with verbose logging and look for errors: "npm install --ignore-scripts=false --foreground-scripts --verbose sharp"',
      `- Install for the current ${platformAndArch} runtime: "npm install --platform=${platform} --arch=${arch} sharp"`
    );
  }
  help.push(
    "- Consult the installation documentation: https://sharp.pixelplumbing.com/install"
  );
  // Check loaded
  if (process.platform === "win32" || /symbol/.test(err.message)) {
    const loadedModule = Object.keys(require.cache).find((i) =>
      /[\\/]build[\\/]Release[\\/]sharp(.*)\.node$/.test(i)
    );
    if (loadedModule) {
      const [, loadedPackage] = loadedModule.match(
        /node_modules[\\/]([^\\/]+)[\\/]/
      );
      help.push(
        `- Ensure the version of sharp aligns with the ${loadedPackage} package: "npm ls sharp"`
      );
    }
  }
  throw new Error(help.join("\n"));
}
