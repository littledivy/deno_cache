// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.

import { time_now } from "./fs.js";

Deno.test("gets correct time", () => {
  const seconds = time_now();
  const expected = Math.round(Date.now() / 1000);
  if (expected != seconds) {
    console.error("Values:", expected, seconds);
    throw new Error("Not equal");
  }
});
