---
id: firewall
title: Firewall Configuration
sidebar_label: 3.2 Firewall
sidebar_position: 4
description: Learn how to configure and manage firewall rules in VyOS for securing your network.
keywords: [VyOS, firewall, firewall rules, zone-based firewall, configuration, network security]
---

# Firewall Configuration

The VyOS firewall provides powerful, zone-based packet filtering to control traffic flow and secure your network. It supports both stateless and stateful filtering using iptables and nftables (depending on version).

## **1. Key Concepts**

Before diving into configuration, familiarize yourself with a few key firewall concepts:

- **Zone-based Filtering**: Interfaces can be grouped into zones for easier rule management.
- **Stateful Inspection**: Tracks the state of connections and allows return traffic automatically.
- **Directionality**: Rules are applied per direction (inbound, outbound, local).
- **Default Action**: What to do with unmatched packets (accept, drop, reject).

## **2. Step-by-Step Configuration**

### 2.1 Define Firewall Rulesets

Use commands to define rulesets that control traffic behavior.

📌 See [Command Examples](../command-examples) for firewall rule commands.

### 2.2 Assign Rulesets to Interfaces

Assign the defined firewall rules to specific interfaces in appropriate directions (in, out, or local).

📌 See [Command Examples](../command-examples) for interface assignment syntax.

### 2.3 Verify Ruleset

Use CLI to review which rulesets are currently configured.

📌 See [Command Examples](../command-examples) to view verification commands.

## **3. Example Use Case: Internet Access with Security**

- Allow LAN-to-WAN (outbound traffic).
- Block WAN-to-LAN (inbound unless explicitly allowed).
- Permit internal DNS & DHCP.

## **4. Advanced Tips**

- Use **logging** in rules for auditing traffic.
- Apply different rulesets per interface or direction (in / out / local).
- Create custom address groups for better control over source/destination.

📌 See [Command Examples](../command-examples) for logging and rule customization.

## **5. Testing & Troubleshooting**

- Use `sudo iptables -L` or `sudo nft list ruleset` to inspect firewall rules.
- Check the system log: `/var/log/messages` for dropped packets.
- Use tools like `ping`, `traceroute`, `tcpdump` to test ruleset effects.

## **6. Best Practices**

- Always define a default drop policy for untrusted zones.
- Apply least privilege — allow only necessary services.
- Document each rule clearly for maintainability.

## **7. See Also**

- [Zone-Based Firewall Setup](./routing)
- [High Availability with VRRP](./high-availability)
- [VPN Firewall Rules](./vpn-setup)

:::caution
Misconfigured firewall rules can block your remote access. Always test configurations in a safe environment or ensure console access is available for rollback.
:::