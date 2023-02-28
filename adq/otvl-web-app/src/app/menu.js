const menu = [
  {
    label: 'Ateliers du QI',
    targetUrl: '/'
  },
  {
    label: 'QI Gong',
    targetUrl: '',
    subMenu: [
      {
        label: 'QI Gong',
        targetUrl: '/qi-gong'
      },
      {
        label: 'Notions de MTC utiles',
        targetUrl: '/qi-gong/notions-mtc-utiles'
      },
      {
        label: 'Le poumon',
        targetUrl: '/qi-gong/le-poumon'
      }
    ]
  },
  {
    label: 'Pratique',
    targetUrl: '',
    subMenu: [
      {
        label: 'Pratique',
        targetUrl: '/pratique'
      },
      {
        label: 'Actualités',
        targetUrl: '/pratique/actualites'
      }
    ]
  },
  {
    label: 'Accès adhérents',
    targetUrl: '',
    subMenu: [
      {
        label: 'Documents, vidéos',
        targetUrl: '/prive/documents'
      }
    ]
  },
  {
    label: 'À propos',
    targetUrl: '',
    subMenu: [
      {
        label: 'Nous contacter',
        targetUrl: '/a-propos/contact'
      },
      {
        label: 'Asso. "Qi Gong Go!"',
        targetUrl: '/a-propos/association-qi-gong-go'
      },
      {
        label: 'Asso. "Les chemins de l\'harmonie"',
        targetUrl: '/a-propos/association-chemins-harmonie'
      },
      {
        label: 'Mentions légales',
        targetUrl: '/a-propos/mentions-legales'
      }
    ]
  }
]

export default menu

