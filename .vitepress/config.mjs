import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/",
  title: "BitCanna",
  description: "Docs and guides",
  sitemap: { hostname: "https://docs.bitcanna.io/" },
  head: [['link', { rel: 'icon', href: '/assets/logo/favicon.ico' } ]],
  themeConfig: {
    siteTitle: "BitCanna Docs",
    logo: "/assets/logo/bc-logo-green.svg",
    search: {
      provider: "local"
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Docs & Guides", link: "/pages/introduction" }
    ],

    sidebar: [
      {
        items: [
          { text: "👀 Introduction to BitCanna", link: "/pages/introduction" }
        ]
      }, 
      {
        text: "🤓 Concepts & Terminology",
        link: "/pages/concepts-terms/concepts-terminology",
        items: [
          { text: "Validators & Delegators", link: "/pages/concepts-terms/validators-and-delegators" },
          { text: "Staking", link: "/pages/concepts-terms/staking" },
          { text: "Slashing", link: "/pages/concepts-terms/slashing" },
          { text: "Governance", link: "/pages/concepts-terms/governance" }
        ]
      }, 
      {
        text: "🕵️‍♂️ Token Economics & Parameters",
        link: "/pages/tokenomics/tokenomics",
        items: [
          { text: "Token Economics", link: "/pages/tokenomics/token-economics" },
          { text: "Chain Parameters", link: "/pages/tokenomics/chain-parameters" },
        ] 
      },
      {
        text: "🤝 Incentives",
        link: "/pages/incentives/incentives",
        items: [
          { text: "Validator Incentive Program", link: "/pages/incentives/validator-incentive-program" },
          { text: "BitCanna's GROW Program", link: "/pages/incentives/grow-program" },
          { text: "Bounty Program: Burn Module", link: "/pages/incentives/bounty-program-burn" }
        ] 
      },
      {
        text: "💁 Guides",
        link: "/pages/guides/guides",
        items: [
          { text: "Web Wallet Guides", link: "/pages/guides/web-wallet-guide" },
          { text: "Mobile Wallet Guides", link: "/pages/guides/mobile-wallet-guide" },
          { text: "Validator Setup Guide", link: "/pages/guides/validator-setup-guide" }
        ] 
      },
      {
        text: "👉 Useful links",
        items: [
          { text: "Available tools", link: "/pages/links/available-tools" },
          { text: "Privacy Policy", link: "/pages/links/privacy-policy" }
        ]
      },
      {
        text: "❓ FAQ",
        items: [
          { 
            text: "Validators",
            link: "/pages/faq/validators-faq",
            collapsed: true,
            items: [
              { text: "What is a full node/validator node?", link: "/pages/faq/full-node-validator-node" },
              { text: "What are the requirements to become a validator?", link: "/pages/faq/requirements-validator" },
              { text: "Why do I see such large amounts of ubcna/bcna?", link: "/pages/faq/ubcna-bcna" },
              { text: "How do I change validator details?", link: "/pages/faq/change-validator-details" },
              { text: "How do I add an image for my validator on the web wallet and explorer?", link: "/pages/faq/image-for-validator" }
            ] 
          }
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/BitCannaGlobal" },
      { icon: "x", link: "https://x.com/BitCannaGlobal" },
      { icon: "discord", link: "https://discord.com/invite/97wUcHqxxE" }
    ],

    footer: {
      copyright: "© 2024 BitCanna.io | All rights reserved.",
    }
  }
})
