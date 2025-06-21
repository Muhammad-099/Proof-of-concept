module.exports = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'overview',
      label: '1. Overview',
    },
    {
      type: 'doc',
      id: 'getting-started',
      label: '2. Getting Started',
    },
    {
      type: 'category',
      label: '3. System Configuration',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'system-configuration/network',
          label: '3.1 Network Setup',
        },
        {
          type: 'doc',
          id: 'system-configuration/firewall',
          label: '3.2 Firewall',
        },
        {
          type: 'doc',
          id: 'system-configuration/routing',
          label: '3.3 Routing',
        },
      ],
    },
    {
      type: 'category',
      label: '4. Advanced Configuration',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'advanced-configuration/vpn-setup',
          label: '4.1 VPN Setup',
        },
        {
          type: 'doc',
          id: 'advanced-configuration/high-availability',
          label: '4.2 High Availability',
        },
      ],
    },
    {
      type: 'doc',
      id: 'command-examples',
      label: '5. Command Examples',
    },
  ],
};