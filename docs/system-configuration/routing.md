---
id: routing
title: Routing Configuration
sidebar_label: 3.3 Routing
sidebar_position: 5
description: Learn how to configure static and dynamic routing in VyOS, including OSPF and BGP protocols.
keywords: [VyOS, routing, static routing, OSPF, BGP, network routing, dynamic routing]
---

# Routing Configuration

VyOS provides robust support for both **static** and **dynamic routing protocols**. It uses the [FRRouting](https://frrouting.org/) (FRR) suite to support advanced protocols like OSPF and BGP, making it a suitable platform for complex networks.

---

## **1. Static Routing**

Static routes are used for predictable, fixed network paths where no dynamic path calculation is needed.

### 1.1 Add a Static Route

```shell
set protocols static route 192.168.20.0/24 next-hop 10.0.0.1
``` 

💡 You can find more route configuration examples in [Command Examples](../command-examples).

## **2. Verification**

```shell
show ip route
```

## **3. Dynamic Routing Protocols**

VyOS supports multiple dynamic routing protocols via **FRRouting**:

- **OSPF**: Interior Gateway Protocol (IGP) for routing within a single autonomous system.
- **BGP**: Exterior Gateway Protocol for routing between autonomous systems.
- **RIP, IS-IS**: Other less common options also available.

## **4. OSPF Configuration**

### 4.1 Enable OSPF

```shell
set protocols ospf area 0 network 10.0.0.0/24
set interfaces ethernet eth0 ip ospf hello-interval 10
```

### 4.2 Verify OSPF Neighbors

```shell
show ip ospf neighbor
```

## **5. BGP Configuration**

### 5.1 Define Local ASN and Router ID

```shell
set protocols bgp 65001 parameters router-id 192.0.2.1
```

### 5.2 Configure Peer

```shell
set protocols bgp 65001 neighbor 192.0.2.2 remote-as 65002
set protocols bgp 65001 network 10.0.0.0/24
```

### 5.3 Verify BGP

```shell
show ip bgp summary
```

## **6. Troubleshooting**

- Use ping and traceroute to verify route reachability.

- Check routing tables:

```shell
show ip route
show ip ospf route
show ip bgp
```

- View live protocol logs in `/var/log/frr`.

## **7. Best Practices**

- Use static routes only for small or stable networks.
- Use OSPF inside organizations; use BGP between ISPs or enterprise borders.
- Monitor and log routing changes in critical environments.

## **8. See Also**

- [Firewall Configuration](./firewall)
- [High Availability with VRRP](./high-availability)
- [VPN Setup](./vpn-setup)

:::tip
Start with static routes during initial setup. Move to dynamic routing as your network grows or becomes more complex.
:::