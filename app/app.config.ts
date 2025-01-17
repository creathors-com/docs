export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    }
  },
  uiPro: {
    footer: {
      slots: {
        root: 'border-t border-(--ui-border)',
        left: 'text-sm text-(--ui-text-muted)'
      }
    }
  },
  seo: {
    siteName: 'Creathors.com - Documentation'
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true
  },
  footer: {
    credits: 'Copyright © 2023',
    colorMode: false,
    links: [{
      'icon': 'material-symbols:home-pin-sharp',
      'to': 'https://creathors.com',
      'target': '_blank',
      'aria-label': 'Creathors Website'
    }, {
      'icon': 'i-simple-icons-discord',
      'to': 'https://discord.gg/dfuSeMPpj4',
      'target': '_blank',
      'aria-label': 'Creathors on Discord'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com/CreathorsTeam',
      'target': '_blank',
      'aria-label': 'Creathors on X'
    }, {
      'icon': 'i-simple-icons-instagram',
      'to': 'https://instagram.com/creathorsteam',
      'target': '_blank',
      'aria-label': 'Creathors on Instagram'
    }, {
      'icon': 'i-simple-icons-facebook',
      'to': 'https://www.facebook.com/people/Creathors-Platform/61561096143764/',
      'target': '_blank',
      'aria-label': 'Creathors on Facebook'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/creathors-com/docs/edit/main/content',
      links: [{
        icon: 'i-material-symbols:mail',
        label: 'Mail support',
        to: 'mailto:support@creathors.com'
      }]
    }
  }
})
