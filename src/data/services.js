// Conteúdo das páginas de Serviços. Textos provisórios — substituir pelos definitivos.
// `image`: caminho de uma foto em /public/images (ex.: '/images/nr12.jpg'). null = fundo padrão.

export const services = [
  {
    slug: 'saude-ocupacional',
    title: 'Saúde Ocupacional',
    icon: 'health',
    image: null,
    bannerText:
      'Cuidamos da saúde dos seus colaboradores com programas e exames de acordo com a legislação vigente.',
    summary: 'PCMSO, ASO e gestão completa dos exames ocupacionais.',
    intro:
      'Texto provisório: apresente aqui como a empresa atua em Saúde Ocupacional, o diferencial do atendimento e a quem o serviço se destina.',
    items: [
      'PCMSO – Programa de Controle Médico de Saúde Ocupacional',
      'ASO – Atestado de Saúde Ocupacional',
      'Exames admissionais, periódicos, de retorno, mudança de função e demissionais',
      'Exames complementares',
      'Relatório analítico anual',
    ],
  },
  {
    slug: 'treinamentos',
    title: 'Treinamentos',
    icon: 'training',
    image: null,
    bannerText:
      'Capacitação prática e teórica conforme as Normas Regulamentadoras, com certificado.',
    summary: 'Cursos e capacitações conforme as Normas Regulamentadoras.',
    intro:
      'Texto provisório: descreva o formato dos treinamentos (in company, presencial, online), carga horária e emissão de certificados.',
    items: [
      'NR-05 – CIPA',
      'NR-06 – Equipamentos de Proteção Individual',
      'NR-10 – Segurança em Instalações Elétricas',
      'NR-11 – Operação de Empilhadeira',
      'NR-12 – Segurança em Máquinas e Equipamentos',
      'NR-33 – Espaço Confinado',
      'NR-35 – Trabalho em Altura',
      'Brigada de Incêndio e Primeiros Socorros',
    ],
  },
  {
    slug: 'solucao',
    title: 'Solução',
    icon: 'solution',
    image: null,
    bannerText:
      'Documentação técnica, laudos e assessoria para manter sua empresa em conformidade.',
    summary: 'PGR, LTCAT, laudos técnicos, auditorias e perícias.',
    intro:
      'Texto provisório: explique o que a empresa entrega dentro de "Solução" e como funciona o acompanhamento.',
    items: [
      'PGR / GRO – Programa de Gerenciamento de Riscos',
      'LTCAT – Laudo Técnico das Condições Ambientais do Trabalho',
      'Laudos de Insalubridade e Periculosidade',
      'PPP – Perfil Profissiográfico Previdenciário',
      'Auditoria de Segurança do Trabalho',
      'Assistência Técnica em Perícias',
    ],
  },
  {
    slug: 'esocial',
    title: 'eSocial',
    icon: 'esocial',
    image: null,
    bannerText:
      'Envio e gestão dos eventos de Segurança e Saúde no Trabalho (SST) no eSocial.',
    summary: 'Envio dos eventos de SST: S-2210, S-2220 e S-2240.',
    intro:
      'Texto provisório: explique como a empresa cuida do envio dos eventos de SST, evitando multas e retrabalho.',
    items: [
      'S-2210 – Comunicação de Acidente de Trabalho (CAT)',
      'S-2220 – Monitoramento da Saúde do Trabalhador (ASO)',
      'S-2240 – Condições Ambientais do Trabalho (Agentes Nocivos)',
      'Conferência e correção de pendências',
    ],
  },
  {
    slug: 'nr-12',
    title: 'NR-12',
    icon: 'machine',
    image: null,
    bannerText:
      'Segurança no trabalho em máquinas e equipamentos: da análise de risco à adequação.',
    summary: 'Inventário, apreciação de risco e adequação de máquinas.',
    intro:
      'Texto provisório: descreva como funciona o processo de adequação à NR-12, do levantamento inicial à entrega do laudo.',
    items: [
      'Inventário de máquinas e equipamentos',
      'Apreciação e análise de riscos',
      'Laudo técnico de conformidade',
      'Projeto de adequação',
      'Treinamento de operadores',
    ],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
