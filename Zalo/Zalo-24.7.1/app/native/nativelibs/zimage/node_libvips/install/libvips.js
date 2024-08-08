// Copyright 2013 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0

"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const stream = require("stream");
const zlib = require("zlib");
const { createHash } = require("crypto");

const detectLibc = require("detect-libc");
const semverLessThan = require("semver/functions/lt");
const semverSatisfies = require("semver/functions/satisfies");
const simpleGet = require("simple-get");
const tarFs = require("tar-fs");

const agent = require("../lib/agent");
const libvips = require("../lib/libvips");
const platform = require("../lib/platform");

const decompress = require('decompress');
const decompressTargz = require('decompress-targz');

const minimumGlibcVersionByArch = {
  arm: "2.28",
  arm64: "2.17",
  x64: "2.17",
};

const hasSharpPrebuild = [
  "darwin-x64",
  "darwin-arm64",
  "linux-arm64",
  "linux-x64",
  "linuxmusl-x64",
  "linuxmusl-arm64",
  "win32-ia32",
  "win32-x64",
];

const { minimumLibvipsVersion, minimumLibvipsVersionLabelled } = libvips;
const localLibvipsDir = "libvips";
const installationForced = !!(
  process.env.npm_config_sharp_install_force || process.env.SHARP_INSTALL_FORCE
);

const fail = function (err) {
  libvips.log(err);
  if (err.code === "EACCES") {
    libvips.log("Are you trying to install as a root or sudo user?");
    libvips.log('- For npm <= v6, try again with the "--unsafe-perm" flag');
    libvips.log(
      '- For npm >= v8, the user must own the directory "npm install" is run in'
    );
  }
  libvips.log(
    "Please see https://sharp.pixelplumbing.com/install for required dependencies"
  );
  process.exit(1);
};

const handleError = function (err) {
  if (installationForced) {
    libvips.log(`Installation warning: ${err.message}`);
  } else {
    throw err;
  }
};

const extractTarball = function (tarPath, platformAndArch) {
  const versionedVendorPath = path.join(
    __dirname,
    "..",
    "vendor",
    minimumLibvipsVersion,
    platformAndArch
  );

  decompress(tarPath, versionedVendorPath, {
    plugins: [
        decompressTargz()
    ]
  });
};

try {
  if (libvips.hasVendoredLibvips()) {
    libvips.log(`Using existing vendored libvips v${minimumLibvipsVersion}`);
  } else {
    // Is this arch/platform supported?
    const arch = process.env.npm_config_arch || process.arch;
    const platformAndArch = platform();
    if (arch === "ia32" && !platformAndArch.startsWith("win32")) {
      throw new Error(
        `Intel Architecture 32-bit systems require manual installation of libvips >= ${minimumLibvipsVersion}`
      );
    }
    if (
      platformAndArch === "freebsd-x64" ||
      platformAndArch === "openbsd-x64" ||
      platformAndArch === "sunos-x64"
    ) {
      throw new Error(
        `BSD/SunOS systems require manual installation of libvips >= ${minimumLibvipsVersion}`
      );
    }
    // Linux libc version check
    const libcFamily = detectLibc.familySync();
    const libcVersion = detectLibc.versionSync();
    if (
      libcFamily === detectLibc.GLIBC &&
      libcVersion &&
      minimumGlibcVersionByArch[arch]
    ) {
      const libcVersionWithoutPatch = libcVersion
        .split(".")
        .slice(0, 2)
        .join(".");
      if (
        semverLessThan(
          `${libcVersionWithoutPatch}.0`,
          `${minimumGlibcVersionByArch[arch]}.0`
        )
      ) {
        handleError(
          new Error(
            `Use with glibc ${libcVersion} requires manual installation of libvips >= ${minimumLibvipsVersion}`
          )
        );
      }
    }
    if (libcFamily === detectLibc.MUSL && libcVersion) {
      if (semverLessThan(libcVersion, "1.1.24")) {
        handleError(
          new Error(
            `Use with musl ${libcVersion} requires manual installation of libvips >= ${minimumLibvipsVersion}`
          )
        );
      }
    }
    // Download to per-process temporary file
    const tarFilename =
      ["libvips", minimumLibvipsVersionLabelled, "win32-ia32"].join("-") +
      ".tar.gz";
    if (localLibvipsDir) {
      // If localLibvipsDir is given try to use binaries from local directory
      const tarPathLocal = path.join(
        path.resolve(localLibvipsDir),
        `v${minimumLibvipsVersionLabelled}`,
        tarFilename
      );
      libvips.log(`Using local libvips from ${tarPathLocal}`);
      extractTarball(tarPathLocal, platformAndArch);
    } else {
      libvips.log(`Error`);
    }
  }
} catch (err) {
  fail(err);
}
