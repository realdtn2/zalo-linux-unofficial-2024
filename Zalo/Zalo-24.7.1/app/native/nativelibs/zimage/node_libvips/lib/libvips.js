// Copyright 2013 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0

"use strict";

const fs = require("fs");
const path = require("path");
const semverCoerce = require("semver/functions/coerce");

const platform = require("./platform");
const { config } = require("../package.json");

const env = process.env;
const minimumLibvipsVersionLabelled =
  "8.14.2" ||
  env.npm_package_config_libvips /* istanbul ignore next */ ||
  config.libvips;
const minimumLibvipsVersion = semverCoerce(
  minimumLibvipsVersionLabelled
).version;

const vendorPath = path.join(
  __dirname,
  "..",
  "vendor",
  minimumLibvipsVersion,
  platform()
);

const mkdirSync = function (dirPath) {
  try {
    fs.mkdirSync(dirPath, { recursive: true });
  } catch (err) {
    /* istanbul ignore next */
    if (err.code !== "EEXIST") {
      throw err;
    }
  }
};

const log = function (item) {
  if (item instanceof Error) {
    console.error(`sharp: Installation error: ${item.message}`);
  } else {
    console.log(`sharp: ${item}`);
  }
};

const hasVendoredLibvips = function () {
  return fs.existsSync(vendorPath);
};

/* istanbul ignore next */
const removeVendoredLibvips = function () {
  const rm = fs.rmSync ? fs.rmSync : fs.rmdirSync;
  rm(vendorPath, { recursive: true, maxRetries: 3, force: true });
};

module.exports = {
  minimumLibvipsVersion,
  minimumLibvipsVersionLabelled,
  log,
  hasVendoredLibvips,
  removeVendoredLibvips,
  mkdirSync,
};
