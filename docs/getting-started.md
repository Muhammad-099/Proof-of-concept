---
id: getting-started
title: Getting Started
sidebar_label: 2. Getting Started
sidebar_position: 2
---

# Getting Started with VyOS

Whether you're deploying VyOS on bare-metal, virtual machines, or in the cloud, the process is simple and streamlined. This guide walks you through the key steps to get up and running with VyOS.

### **1. Choose Your Deployment Platform**

VyOS supports a wide range of platforms:

- **Bare-Metal**: Install directly on physical hardware for optimal performance.
- **Virtual Machines**: Compatible with VMware, KVM, Proxmox, VirtualBox, and more.
- **Cloud Platforms**: Pre-built images are available for AWS, Azure, GCP, and other cloud providers.

### **2. Download the ISO or Cloud Image**

Visit the [VyOS Downloads Page](https://vyos.io/download/) to download the appropriate image for your environment. Depending on your needs, you can access rolling releases or stable builds.

### **3. Install VyOS**

For ISO installations (bare-metal or virtual machines):

1. Mount the ISO to your VM or write it to a USB drive.
2. Boot the machine from the ISO.
3. Log in with the default credentials:
   - **Username**: `vyos`
   - **Password**: `vyos`
4. Run the installer:

```bash
install image
```

5. Follow the prompts to partition the disk, select the boot device, and complete the installation.

### **4. First Boot Configuration**

Once VyOS is installed and rebooted:
Log in again using the same credentials:
   - **Username**: `vyos`
   - **Password**: `vyos`

```bash
set system login user vyos authentication plaintext-password your_secure_password
commit
save
```

> 💡This command is also listed in the [Command Examples](./command-examples).

### **5. Configure Basic Networking**
To enable basic connectivity, configure the interface and hostname:

```bash
set interfaces ethernet eth0 address 192.168.1.1/24
set system host-name vyos-router
set service ssh port 22
commit
save
```

> 💡 The IP and hostname setup is also included in [Command Examples](./command-examples).

### **6. Save and Reboot**

Once your initial setup is complete, always remember to save:

```bash
save
reboot
```

> 💡 Save and reboot commands are listed in the [Command Examples](./command-examples) page.

VyOS will now start with your saved configuration.

Use commit-confirm to safely apply changes. If not confirmed within the timeout, the system will auto-revert — a great safety net for remote configurations.

### **7. What’s Next?**
You’re now ready to explore more features:

- [VPN Setup](./advanced-configuration/vpn-setup)
- [Routing](./system-configuration/routing)
- [High Availability](./advanced-configuration/high-availability)
- [Firewall Rules](./system-configuration/firewall)
- [Command Examples](./command-examples) – for frequently used VyOS CLI commands

:::tip
Use the sidebar to search or browse additional topics and configurations.
:::

### Happy configuring! 🚀