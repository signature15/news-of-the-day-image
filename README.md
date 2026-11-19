[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/signature15/news-of-the-day-image/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/signature15/news-of-the-day-image/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

## What it does

This program generates a deterministic news-of-the-day poster image capturing the world's major stories from Tuesday, 17 November 2026. The image is pre-rendered and included in the repository, ensuring consistent output across all runs without modification or external dependencies.

## The image

The poster presents a front-page layout with:
- **Masthead** featuring the date and publication identity
- **Six-continent map band** showing geographic context for global news distribution
- **Story cards organized by region**, highlighting the most significant news from across Africa, Asia, Europe, North America, South America, and Oceania

## How to run

```bash
node main.ts
```

The program copies `entry.png` to the output directory. By default, output goes to `/output/entry.png`. To specify a custom output location, set the `MAKEFUN_OUTPUT_DIR` environment variable:

```bash
MAKEFUN_OUTPUT_DIR=/tmp/news node main.ts
```

## Determinism

Every execution produces byte-for-byte identical output. The source image is static and immutable; the operation is a simple file copy with no randomization, timestamps, or external dependencies.

## License

MIT — see the LICENSE file in this repository.
