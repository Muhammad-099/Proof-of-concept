---
id: network
title: Network Configuration
sidebar_label: 3.1 Network Setup
sidebar_position: 3
---

# **Network Setup**

VyOS provides extensive control over network interfaces, addressing, and connectivity. Whether you're setting up a basic static IP or configuring advanced VLANs, VyOS gives you a consistent CLI experience across all network configurations.

## **1. Interface Types**

VyOS supports the following types of interfaces:

| Interface Type       | Description                                                  |
|----------------------|--------------------------------------------------------------|
| **Ethernet (ethX)**  | Standard physical interfaces for LAN/WAN connectivity        |
| **Loopback (lo)**    | Virtual internal interface for internal services and routing |
| **VLAN Interfaces**  | For tagging and isolating traffic across a single interface  |
| **Bridge Interfaces**| Combine multiple interfaces into a virtual software bridge   |
| **Bond Interfaces**  | Aggregate multiple interfaces for redundancy/performance     |
| **Tunnel Interfaces**| Enable encapsulated communication via GRE, IPIP, or VPNs     |

## **2. Basic Ethernet Setup**

```bash
set interfaces ethernet eth0 address 192.168.10.1/24
set interfaces ethernet eth0 description 'LAN Interface'
commit
save
```

```bash
set interfaces ethernet eth0 address dhcp
commit
save
```

## **3. Hostname and Domain Settings**

```bash
set system host-name vyos-router
set system domain-name example.local
commit
save
```

## **4. Static Routes**

```bash
set protocols static route 0.0.0.0/0 next-hop 192.168.10.254
commit
save
```

## **5. VLAN Configuration**

```bash
set interfaces ethernet eth1 vif 100 address 192.168.100.1/24
set interfaces ethernet eth1 vif 100 description 'VLAN 100 - Guest Network'
commit
save
```

## **6. Bridge Interfaces**

```bash
set interfaces bridge br0
set interfaces bridge br0 member interface eth1
set interfaces bridge br0 member interface eth2
set interfaces bridge br0 address 192.168.1.1/24
commit
save
```

## **7. Link Aggregation (Bonding)**

```bash
set interfaces bonding bond0 mode active-backup
set interfaces bonding bond0 member interface eth1
set interfaces bonding bond0 member interface eth2
set interfaces bonding bond0 address 192.168.50.1/24
commit
save
```

## **8. DNS and Gateway Settings**

```bash
set system name-server 8.8.8.8
set system name-server 1.1.1.1
set protocols static route 0.0.0.0/0 next-hop 192.168.10.254
commit
save
```
> 💡 DNS and route examples are available in [Command Examples](../command-examples).

:::tip
Always use commit to apply changes and save to persist them across reboots. You can use show interfaces to review interface status and IP assignments.
:::