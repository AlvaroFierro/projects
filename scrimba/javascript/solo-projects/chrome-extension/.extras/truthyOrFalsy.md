# Truthy or falsy

## Overview

- [Truthy or falsy](#truthy-or-falsy)
  - [Overview](#overview)
  - [Truthy](#truthy)
  - [Falsy](#falsy)
    - [Table of falsy values](#table-of-falsy-values)
  - [Truthy vs falsy values](#truthy-vs-falsy-values)
  - [Additional Resources](#additional-resources)

## Truthy

A truthy value is a value that is considered true when encountered in a Boolean context

## Falsy

A value that is considered false when encountered in a Boolean context.

### Table of falsy values

<!-- prettier-ignore -->
| Value          | Description |
| -------------- | -------------- |
| `false`        | The keyword false|
| `0`            | The Number zero (so, also 0.0, etc., and 0x0).|
| `-0`           | The Number negative zero (so, also -0.0, etc., and -0x0).|
| `0n`           | The BigInt zero (so, also 0x0n). Note that there is no BigInt negative zero — the negation of 0n is 0n.|
| `""`, `''`, `` | Empty string value.|
| null           | null — the absence of any value.|
| undefined      | undefined — the primitive value.|
| NaN            | NaN — not a number.|
| `document.all` | Objects are falsy if and only if they have the [[IsHTMLDDA]] internal slot. That slot only exists in document.all and cannot be set using |

## Truthy vs falsy values

| Truthy           | Falsy     |
| ---------------- | --------- |
| `true`           | `false`   |
| non-zero numbers | 0         |
| `strings`        | " "       |
| objects          | undefined |
| arrays           | null      |
| functions        | `NaN`     |

## Additional Resources

- [Comprehensive guide about truthy and falsy values][guide]

<!-- Links -->

[guide]: https://www.youtube.com/O7rZJdtG10g
