---
id: command-examples
title: VyOS Command Examples
sidebar_label: 5. Command Examples
sidebar_position: 99
description: Frequently used VyOS CLI commands for reference.
---

# VyOS Command Examples

## **1. Firewall**

```shell
set firewall name LAN-IN default-action drop
set firewall name LAN-IN rule 10 action accept
set firewall name LAN-IN rule 10 state established enable
set firewall name LAN-IN rule 10 state related enable

set firewall name LAN-IN rule 20 action accept
set firewall name LAN-IN rule 20 protocol tcp
set firewall name LAN-IN rule 20 destination port 22

set firewall name LAN-IN rule 30 log enable
```

## **2. VPN**

### 2.1 IPSec Site-to-Site

```shell
set vpn ipsec site-to-site peer 203.0.113.1 authentication mode pre-shared-secret
set vpn ipsec site-to-site peer 203.0.113.1 authentication pre-shared-secret mysecret
set vpn ipsec site-to-site peer 203.0.113.1 connection-type initiate
set vpn ipsec site-to-site peer 203.0.113.1 default-esp-group ESP-GROUP
set vpn ipsec site-to-site peer 203.0.113.1 ike-group IKE-GROUP
set vpn ipsec site-to-site peer 203.0.113.1 local-address 192.0.2.1
set vpn ipsec site-to-site peer 203.0.113.1 tunnel 1 local prefix 192.168.1.0/24
set vpn ipsec site-to-site peer 203.0.113.1 tunnel 1 remote prefix 10.10.0.0/16
```

### 2.2 WireGuard

```shell
set interfaces wireguard wg0 address 10.0.0.1/24
set interfaces wireguard wg0 listen-port 51820
set interfaces wireguard wg0 private-key <your-private-key>
set interfaces wireguard wg0 peer peer1 public-key <peer-public-key>
set interfaces wireguard wg0 peer peer1 allowed-ips 10.0.0.2/32
```

## **3. Routing**

### 3.1 Static Route

```shell
set protocols static route 0.0.0.0/0 next-hop 192.168.1.1
```

### 3.2 OSPF (Open Shortest Path First)

```shell
set protocols ospf area 0 network 192.168.1.0/24
set protocols ospf parameters router-id 1.1.1.1
```

### 3.3 BGP (Border Gateway Protocol)

```shell
set protocols bgp 65001 neighbor 192.0.2.2 remote-as 65002
set protocols bgp 65001 network 203.0.113.0/24
set protocols bgp 65001 parameters router-id 1.1.1.1
```

## **4. Interfaces**

```shell
set interfaces ethernet eth0 address 192.168.1.1/24
set interfaces ethernet eth0 description "LAN Interface"
set interfaces ethernet eth1 address dhcp
```

## **5. System Configuration**

```shell
set system host-name vyos-router
set system domain-name example.com
set system time-zone Asia/Karachi
set system login user vyos authentication plaintext-password mypassword
```

## **6. High Availability (VRRP)**

```shell
set high-availability vrrp group GROUP1 interface eth1
set high-availability vrrp group GROUP1 virtual-address 192.168.1.254/24
set high-availability vrrp group GROUP1 priority 100
set high-availability vrrp group GROUP1 preempt true
```

## **7. DNS & DHCP**

```shell
set service dns forwarding cache-size 150
set service dns forwarding listen-address 192.168.1.1
set service dhcp-server shared-network-name LAN subnet 192.168.1.0/24 range 0 start 192.168.1.10
set service dhcp-server shared-network-name LAN subnet 192.168.1.0/24 range 0 stop 192.168.1.100
set service dhcp-server shared-network-name LAN subnet 192.168.1.0/24 default-router 192.168.1.1
set service dhcp-server shared-network-name LAN subnet 192.168.1.0/24 dns-server 8.8.8.8
```