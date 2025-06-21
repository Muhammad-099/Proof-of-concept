---
id: vpn-setup
title: VPN Setup (Site-to-Site IPsec)
sidebar_label: 4.1 VPN Setup
sidebar_position: 2
description: Learn how to configure a secure site-to-site IPsec VPN tunnel between two VyOS routers.
keywords: [VyOS, VPN, IPsec, site-to-site, configuration, tunnels, strongSwan]
---

# VPN Setup (Site-to-Site IPsec)

VyOS supports a range of VPN technologies, including **IPsec**, **OpenVPN**, and **WireGuard**. This guide covers a basic **site-to-site IPsec VPN** configuration using strongSwan.

---

## **1. Use Case**

Securely connect two remote sites (e.g., Head Office ↔ Branch Office) over the internet using encrypted IPsec tunnels.

## **2. Requirements**

- Public IP addresses on both routers (Site A and Site B).
- Defined local and remote LAN subnets.
- NTP correctly configured on both routers.

## **3. Configuration Steps**

### 3.1 Define IPsec Phase 1 (IKE) Policies

Command:
```shell
set vpn ipsec ike-group IKE-POLICY proposal 1 encryption aes256
set vpn ipsec ike-group IKE-POLICY proposal 1 hash sha256
set vpn ipsec ike-group IKE-POLICY lifetime 28800
set vpn ipsec ike-group IKE-POLICY dh-group 14
```
👉 See more command examples [here](../command-examples).

### 3.2 Define IPsec Phase 2 (ESP) Policies

Command:
```shell
set vpn ipsec esp-group ESP-POLICY proposal 1 encryption aes256
set vpn ipsec esp-group ESP-POLICY proposal 1 hash sha256
set vpn ipsec esp-group ESP-POLICY lifetime 3600
```
👉 See more command examples [here](../command-examples).

### 3.3 Define the IPsec Tunnel

Command:
```shell
set vpn ipsec site-to-site peer 203.0.113.2 authentication mode pre-shared-secret
set vpn ipsec site-to-site peer 203.0.113.2 authentication pre-shared-secret mysecretkey
set vpn ipsec site-to-site peer 203.0.113.2 ike-group IKE-POLICY
set vpn ipsec site-to-site peer 203.0.113.2 esp-group ESP-POLICY
set vpn ipsec site-to-site peer 203.0.113.2 local-address 198.51.100.1
set vpn ipsec site-to-site peer 203.0.113.2 tunnel 1 local prefix 192.168.1.0/24
set vpn ipsec site-to-site peer 203.0.113.2 tunnel 1 remote prefix 192.168.2.0/24
```

👉 See more command examples [here](../command-examples).

Replace IPs and subnets with your actual values.

### 3.4 Commit & Save

Command:
```shell
commit
save
```

## **4. Verifying Tunnel Status**

Command:
```shell
show vpn ipsec sa
```

- Established status means the tunnel is up.
- Use ping across LANs to verify end-to-end connectivity.

## **5. Security Tips**

- Use strong pre-shared keys or certificate-based authentication.
- Disable unused VPN protocols (e.g., L2TP if not in use).
- Use NAT-T if one side is behind NAT.

## **6. Troubleshooting**

Command:
```shell
tail -f /var/log/messages | grep vpn
```

- Use show vpn log to analyze negotiation errors.
- Confirm time sync using show ntp.

## **7. See Also**

- [Firewall Configuration](./firewall)
- [High Availability with VRRP](./high-availability)
- [Zone-Based Firewall Setup](./routing)

:::caution
Be careful with firewall rules — ensure ISAKMP (UDP 500), ESP (IP Protocol 50), and NAT-T (UDP 4500) are allowed between sites.
:::