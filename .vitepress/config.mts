import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 16",
  description: "Revue de code documentée",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Revues', link: '/elie-caron' }
    ],

    sidebar: [
      {
        text: 'Revues',
        items: [
          { text: 'Élie Caron', link: '/elie-caron' },
          { text: 'Élie Lajeunesse', link: '/elie-lajeunesse' },
          { text: 'Brandon Lemelin', link: '/brandon-lemelin' }
        ]
      }
    ],
  }
})
