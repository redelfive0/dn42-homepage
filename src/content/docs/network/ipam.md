---
title: IPAM
---

## IPv4

### `172.21.123.128/28`

| IPv4 Address                      | Status     | Description          |
|-----------------------------------|------------|----------------------|
| `172.21.123.128`                  | Reserved   | Network Address      |
| `172.21.123.129`                  | Assigned   | SG1 Host             |
| `172.21.123.130`                  | Assigned   | US1 Host             |
| `172.21.123.131`                  | Assigned   | HK1 Host             |
| `172.21.123.132 - 172.21.123.142` | Unassigned | Unassigned Addresses |
| `172.21.123.143`                  | Reserved   | Broadcast Address    |

## IPv6

### `fd49:9166:6633::/48`

#### Subnets

| Subnet                     | Status     | Description          |
|----------------------------|------------|----------------------|
| `fd49:9166:6633:1::/64`    | Assigned   | SG1 Node             |
| `fd49:9166:6633:2::/64`    | Assigned   | US1 Node             |
| `fd49:9166:6633:3::/64`    | Assigned   | HK1 Node             |
| `fd49:9166:6633:cafe::/64` | Assigned   | Anycast Services     |
| *All Other Subnets*        | Unassigned | Unassigned Addresses |

#### Host IP 

| Name        | IP Address                | Description           |
|-------------|---------------------------|-----------------------|
| SG1         | `fd49:9166:6633:1::1`     | SG1 Host IP           |
| US1         | `fd49:9166:6633:2::1`     | US1 Host IP           |
| HK1         | `fd49:9166:6633:3::1`     | HK1 Host IP           |
| Anycast DNS | `fd49:9166:6633:cafe::53` | Anycast Recursive DNS |
