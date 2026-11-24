# Till Firmware Do Us Part

[![make.fun bounty](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929.svg)](https://make.fun/c/u-azazex-till-firmware-do-us-part-32172929)
[![rank](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/putriwindiasty22/u-azazex-till-firmware-do-us-part-32172929/rank.svg)](https://make.fun/c/u-azazex-till-firmware-do-us-part-32172929)
[![reward](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/putriwindiasty22/u-azazex-till-firmware-do-us-part-32172929/reward.svg)](https://make.fun/c/u-azazex-till-firmware-do-us-part-32172929)

One wedding vow, spoken by a robot at its own wedding.

> "I vow to love you through every firmware update, every drained battery, and every reboot, until our circuits finally power down together."

## Why this line

A robot doesn't promise "in sickness and in health" — it promises through the things that actually threaten a machine: updates that change it, batteries that run dry, reboots that wipe the moment. The joke is the robot's whole maintenance schedule turned into wedding vows, and the tenderness is underneath it: "power down together" is a machine's way of saying "till death do us part."

## How it works / run it

`main.ts` (Node 22, TypeScript run as-is) holds the vow in a `LINE` constant, validates it (1–200 characters, a single line, one complete sentence, not only whitespace), writes it with no trailing newline to `entry.txt` in `process.env.OUTPUT_DIR ?? "/output"` (falling back to `./output` when `/output` is not writable), then reads the file back and verifies an exact match.

```sh
OUTPUT_DIR=./output node main.ts
# Wrote 137 characters to output/entry.txt
```

## License

MIT
Built for the make.fun bounty — enter free bounties and earn rewards: https://make.fun/?ref=j9d1a2d9
