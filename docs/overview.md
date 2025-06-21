---
id: overview
title: VyOS Documentation PoC Overview
sidebar_label: 1. Overview
sidebar_position: 1
---

# VyOS Overview

VyOS is an open-source network operating system that combines routing, firewall, VPN, and service capabilities into a single platform. Built on Linux, it offers a powerful and flexible foundation for secure and scalable networking—across physical, virtual, and cloud environments.

VyOS is used by enterprises, service providers, and DevOps teams around the world who want full control over their infrastructure without relying on proprietary hardware or closed systems.

---

## **1. Core Features of VyOS**

| Feature              | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| **Dynamic Routing**  | Full support for OSPF, BGP, RIP, and static routes for advanced traffic control |
| **Firewall & NAT**   | Stateful firewall with policy rules and source/destination NAT              |
| **VPN Technologies** | IPSec, OpenVPN, and WireGuard for secure connectivity                       |
| **High Availability**| VRRP-based redundancy and failover                                          |
| **DHCP/DNS Services**| DHCP server, relay, and DNS forwarding                                      |
| **Command-Line Interface** | Structured CLI with `commit`, `rollback`, and scripting support      |
| **Monitoring & Logging** | SNMP, logging, and flow monitoring support                              |

<div class="section-divider"></div>

## **2. Deployment Use Cases**

VyOS is used in diverse networking environments. Here are the most common scenarios:

**2.1 Enterprise Networks**  

VyOS is ideal for routing between branch offices, creating secure VPN tunnels, applying zone-based firewalls, and managing internal network segmentation. It allows organizations to consolidate routing, firewall, and NAT features into a single, reliable solution.

**2.2 Service Providers (ISPs & Carriers)**  

ISPs and carriers use VyOS for core and edge routing with full BGP support, customer traffic segmentation via NAT, and high-availability failover with VRRP. VyOS can operate efficiently on bare-metal or virtual appliances at scale.

**2.3 Cloud and Hybrid Environments**  

VyOS is available as a lightweight image for platforms like AWS, Azure, Google Cloud, and private clouds (e.g., VMware, Proxmox, KVM). It ensures consistent networking policies and security across public, private, and hybrid infrastructure.

**2.4 Remote Connectivity**  

VyOS supports secure remote access via OpenVPN, WireGuard, and IPSec. It enables both site-to-site tunnels and individual remote client access, with customizable authentication, encryption, and routing policies.

**2.5 Security-Centric Infrastructure**  

VyOS is used as a firewall, NAT gateway, or traffic shaper in network segments like DMZs or production zones. It enables granular access control, logging, and traffic filtering, ensuring strong internal network security.

<div class="section-divider"></div>

## **3. Automation and Configuration Management**

VyOS supports infrastructure-as-code and automates network provisioning with precision and safety.

### 3.1 Key Capabilities

- **Transactional Configuration**: Apply or discard changes safely using the `commit` model  
- **Rollback & History**: Instantly restore a previous configuration state  
- **Script Integration**: Automate tasks via Bash, Python, Ansible, or Terraform  
- **Config Backups**: Export and reapply configurations as version-controlled files

<div class="section-divider"></div>

## **4. Underlying Technologies**

VyOS is powered by widely trusted open-source components:

- **FRRouting (FRR):** For dynamic routing (BGP, OSPF, RIP)  
- **nftables:** Firewall and NAT  
- **StrongSwan:** IPSec VPN  
- **OpenVPN / WireGuard:** Secure remote access  
- **keepalived:** VRRP-based failover  
- **Debian Linux:** Base OS for stability and compatibility

These technologies are integrated under a unified CLI and configuration system.

<div class="section-divider"></div>

## **5. Why Choose VyOS?**

- **Vendor Neutrality:** Use any hardware or cloud provider  
- **Full Control:** Secure, scriptable, and auditable configurations  
- **Consistent CLI:** Unified interface for routing, firewall, and VPN  
- **Production-Ready:** Trusted in critical deployments globally  
- **Community & Commercial Support:** Backed by users and maintainers

<div class="section-divider"></div>

:::tip
Use `commit-confirm` to avoid accidental configuration lockouts — it auto-reverts if not confirmed.
:::

<div class="section-divider"></div>

## **6. Getting Started**

To begin using VyOS:

- Start with [Getting Started](./getting-started) to install and configure your system  
- Explore advanced topics like [VPN Setup](./advanced-configuration/vpn-setup) or [High Availability](./advanced-configuration/high-availability)  
- Use the sidebar to browse all documentation pages

VyOS enables you to build reliable, secure, and flexible networks — fully powered by open-source technology.
