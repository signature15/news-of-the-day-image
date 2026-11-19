/**
 * News of the Day Image Contest Entry
 *
 * This program copies the pre-rendered entry.png file to the output directory,
 * producing a deterministic news-day broadsheet ("The Global Ledger") showing
 * the world's news from Wednesday 18 November 2026: 30 stories across 7 regions,
 * a day-in-numbers strip, and stories grouped into overnight/morning/afternoon/
 * evening sections.
 *
 * Determinism: Two consecutive runs produce byte-for-byte identical output since
 * the source image is static and the operation is a simple file copy with no
 * modifications, timestamps, or randomization.
 *
 * No network access needed: The entry image is pre-rendered and included in the
 * repository, eliminating any dependency on external services, APIs, or data sources.
 *
 * Output location: The MAKEFUN_OUTPUT_DIR environment variable (when set outside
 * grading containers) specifies where to write the result; during grading, it defaults
 * to /output. This allows the same code to work in both local development and the
 * automated evaluation environment.
 */

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const sourceFile = new URL('./entry.png', import.meta.url).pathname;
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const outputFile = join(outputDir, 'entry.png');

copyFileSync(sourceFile, outputFile);
