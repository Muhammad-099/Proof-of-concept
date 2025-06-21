# Proof-of-concept Documentation Site

This is a documentation website built using [Docusaurus 2](https://docusaurus.io/), a modern static site generator.

---

## Installation

Make sure you have [Node.js](https://nodejs.org/) installed. Then install dependencies:

```bash
npm install
```

## Local Development
Start the local dev server:

```bash
npm run start
```

Open your browser and go to: 
http://localhost:3000

## Build for Production

```bash
npm run build
```

The generated static content will be in the `build/` directory.

## Documentation Structure

```plaintext
docs/
├── overview.md
├── getting-started.md
├── system-configuration/
│   ├── network.md
│   ├── firewall.md
│   └── routing.md
├── advanced-configuration/
│   ├── vpn-setup.md
│   └── high-availability.md
└── command-examples.md
```

## Notes 

- Powered by [Docusaurus 2](https://docusaurus.io/) 
- Maintained by: [Muhammad-099](https://github.com/Muhammad-099)

## License

This project is open source and available under the MIT License.