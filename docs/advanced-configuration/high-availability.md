---
id: high-availability
title: High Availability with VRRP
sidebar_label: 4.2 High Availability
sidebar_position: 6
description: Learn how to configure VRRP in VyOS for high availability and automatic failover between routers.
keywords: [VyOS, VRRP, high availability, failover, redundancy, configuration]
---

# High Availability with VRRP

High availability (HA) ensures that your network services remain accessible even if one router fails. VyOS achieves HA using **VRRP** (Virtual Router Redundancy Protocol), which allows multiple routers to share a virtual IP address.

---

## **1. What is VRRP?**

- VRRP allows multiple routers to function as a group with one active **Master** and others in **Backup** mode.
- If the Master fails, a Backup router takes over seamlessly.
- Clients use a single virtual IP as their gateway.

## **2. VRRP Terminology**

| Term        | Description                                      |
|-------------|--------------------------------------------------|
| Virtual IP  | Shared IP address used by all VRRP group members |
| Master      | Router currently handling traffic                |
| Backup      | Router waiting to take over                      |
| Priority    | Determines router role — higher wins             |

## **3. Prerequisites**

- Two or more VyOS routers.
- Interfaces connected to the same LAN.
- Ensure `firewall` allows VRRP multicast traffic (protocol 112).

## **4. Configuration Steps**

### 4.1 Set up VRRP on Primary Router

```shell
set interfaces ethernet eth1 vrrp vrrp-group 10 virtual-address 192.168.1.1
set interfaces ethernet eth1 vrrp vrrp-group 10 priority 100
set interfaces ethernet eth1 vrrp vrrp-group 10 advert-interval 1
set interfaces ethernet eth1 vrrp vrrp-group 10 preempt true
```

👉 See more command examples in the [Command Examples](../command-examples) page.

### 4.2 Set up VRRP on Backup Router

```shell
set interfaces ethernet eth1 vrrp vrrp-group 10 virtual-address 192.168.1.1
set interfaces ethernet eth1 vrrp vrrp-group 10 priority 90
set interfaces ethernet eth1 vrrp vrrp-group 10 advert-interval 1
set interfaces ethernet eth1 vrrp vrrp-group 10 preempt true
```

👉 See more command examples in the [Command Examples](../command-examples) page.

## **5. Verifying VRRP**

Use the following command to check the current VRRP status:

```shell
run show vrrp
```

## **6. Testing Failover**

- Disconnect the master router's interface or shut it down.
- Observe traffic switch to the backup router.
- Reconnect master to test preemption (it should regain control if preempt is true).

## **7. Best Practices**

- Use **unique `vrrp-group` numbers** per interface.
- Configure consistent **`virtual-address`** across all group members.
- Always enable **`preempt`** for automatic master recovery.
- Ensure **VRRP multicast (protocol 112)** is not blocked by the firewall.

## **8. Advanced Options**

- Use `track-interface` to degrade priority if a link goes down.
- Use **scripts** to run custom health checks and influence VRRP behavior.

```shell
set interfaces ethernet eth1 vrrp vrrp-group 10 track-interface eth2
```

👉 See more command examples in the [Command Examples](../command-examples) page.

## **9. See Also**

- [Firewall Configuration](./firewall)
- [VPN Setup](./vpn-setup)
- [Zone-Based Firewall Setup](./routing)

:::caution
Improper VRRP setup or blocked multicast can cause both routers to think they are Master — leading to IP conflicts. Always test in a lab before deploying to production.
:::