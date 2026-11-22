// Dados gerais da empresa — troque aqui e o site inteiro atualiza.
// Tudo que está entre colchetes ou com 0000 é provisório.

export const site = {
  name: 'ThiagoSeg',
  tagline: 'Segurança do Trabalho',
  phone: '(11) 99820-2287',
  // Somente números, com DDI 55 + DDD. Ex.: 5511999999999
  whatsapp: '5511998202287',
  // Mensagem que aparece no balão ao passar o mouse no botão do WhatsApp
  whatsappGreeting: 'Thiago Segurança do Trabalho agradece seu contato. Como podemos te ajudar?',
  // Texto que já vem escrito para o visitante enviar ao abrir o WhatsApp
  whatsappMessage: 'Olá! Vim pelo site e gostaria de mais informações.',
  email: 'contato@suaempresa.com.br',
  address: 'Estr. Particular da Codesp, s/n – Ilha Barnabé, Santos – SP, 11095-710',
  clientPortalUrl: '#',
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    google: '#',
  },
}

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`
