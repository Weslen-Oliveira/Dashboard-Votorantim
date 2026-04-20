export const dashboardData = {
    linha: {
        nome: "Retomadora",
        local: "Votorantim Cimentos - Itaú de Minas",
        atualizacao: "19/04/2026 15:30",
        saudeGeral: 81,
        disponibilidade: 93,
        equipamentosMonitorados: 6,
        status: "Atencao",
        resumoStatus: [
            { label: "Bom", valor: 58, cor: "#22a06b" },
            { label: "Atencao", valor: 28, cor: "#ef8d32" },
            { label: "Critico", valor: 14, cor: "#d84f5f" }
        ],
        componentes: [
            { nome: "Correias transportadoras", saude: 80, status: "Bom", observacao: "Desgaste dentro do esperado" },
            { nome: "Roletes Carga Retorno", saude: 26, status: "Critico", observacao: "Programar Troca" },
            { nome: "Tambores", saude: 82, status: "Bom", observacao: "Precisamos de tambores reservas" },
            { nome: "Mancais e rolamentos", saude: 73, status: "Bom", observacao: "Acompanhamento de temperatura" },
            { nome: "Emendas", saude: 79, status: "Bom", observacao: "Manter inspeção" },
            { nome: "Vedacoes", saude: 48, status: "Atenção", observacao: "Precisa trocar " }
        ],
        criticidade: [
            { nome: "Mancais e rolamentos", valor: 55 },
            { nome: "Roletes de carga e retorno", valor: 7 },
            { nome: "Emendas", valor: 70 },
            { nome: "Tambores", valor: 57 },
            { nome: "Correias transportadoras", valor: 80 },
            { nome: "Vedacoes", valor: 28 }
        ],
        tendencia: [
            { nome: "Jan", valor: 15},
            { nome: "Fev", valor: 50 },
            { nome: "Mar", valor: 80 },
            { nome: "Abr", valor: 81 },
            { nome: "Mai", valor: 0 },
            { nome: "Jun", valor: 0 }
        ],
        prioridades: [
            { etapa: "Inspecionados", valor: 100, cor: "#123047", largura: 100 },
            { etapa: "Demandam atencao", valor: 46, cor: "#0e8f84", largura: 82 },
            { etapa: "Programar manutencao", valor: 22, cor: "#ef8d32", largura: 62 },
            { etapa: "Criticos", valor: 8, cor: "#d84f5f", largura: 44 }
        ]
    },
    correias: [
        {
            codigo: "A2J07",
            saudeGeral: 83,
            status: "Bom",
            disponibilidade: 95,
            resumoStatus: [
                { label: "Bom", valor: 62, cor: "#22a06b" },
                { label: "Atencao", valor: 26, cor: "#ef8d32" },
                { label: "Critico", valor: 12, cor: "#d84f5f" }
            ],
            componentes: [
                { nome: "Correia", saude: 86, status: "Bom" },
                { nome: "Roletes Carga Retorno", saude: 78, status: "Atencao" },
                { nome: "Tambores", saude: 84, status: "Bom" },
                { nome: "Mancais e rolamentos", saude: 80, status: "Bom" },
                { nome: "Emendas", saude: 77, status: "Atencao" },
                { nome: "Vedacoes", saude: 85, status: "Bom" }
            ]
        },
        {
            codigo: "A2J08",
            saudeGeral: 79,
            status: "Atencao",
            disponibilidade: 92,
            resumoStatus: [
                { label: "Bom", valor: 55, cor: "#22a06b" },
                { label: "Atencao", valor: 31, cor: "#ef8d32" },
                { label: "Critico", valor: 14, cor: "#d84f5f" }
            ],
            componentes: [
                { nome: "Correia", saude: 82, status: "Bom" },
                { nome: "Roletes Carga Retorno", saude: 74, status: "Atencao" },
                { nome: "Tambores", saude: 80, status: "Bom" },
                { nome: "Mancais e rolamentos", saude: 71, status: "Atencao" },
                { nome: "Emendas", saude: 75, status: "Atencao" },
                { nome: "Vedacoes", saude: 83, status: "Bom" }
            ]
        },
        {
            codigo: "A2J09",
            saudeGeral: 76,
            status: "Atencao",
            disponibilidade: 91,
            resumoStatus: [
                { label: "Bom", valor: 49, cor: "#22a06b" },
                { label: "Atencao", valor: 38, cor: "#ef8d32" },
                { label: "Critico", valor: 13, cor: "#d84f5f" }
            ],
            componentes: [
                { nome: "Correia", saude: 81, status: "Bom" },
                { nome: "Roletes Carga Retorno", saude: 72, status: "Atencao" },
                { nome: "Tambores", saude: 77, status: "Atencao" },
                { nome: "Mancais e rolamentos", saude: 69, status: "Atencao" },
                { nome: "Emendas", saude: 73, status: "Atencao" },
                { nome: "Vedacoes", saude: 84, status: "Bom" }
            ]
        },
        {
            codigo: "A2J10",
            saudeGeral: 85,
            status: "Critico",
            disponibilidade: 96,
            resumoStatus: [
                { label: "Bom", valor: 67, cor: "#22a06b" },
                { label: "Atencao", valor: 23, cor: "#ef8d32" },
                { label: "Critico", valor: 10, cor: "#d84f5f" }
            ],
            componentes: [
                { nome: "Correia", saude: 88, status: "Bom" },
                { nome: "Roletes Carga Retorno", saude: 81, status: "Bom" },
                { nome: "Tambores", saude: 86, status: "Bom" },
                { nome: "Mancais e rolamentos", saude: 79, status: "Atencao" },
                { nome: "Emendas", saude: 82, status: "Bom" },
                { nome: "Vedacoes", saude: 90, status: "Bom" }
            ]
        },
        {
            codigo: "A2J11",
            saudeGeral: 80,
            status: "Bom",
            disponibilidade: 94,
            resumoStatus: [
                { label: "Bom", valor: 57, cor: "#22a06b" },
                { label: "Atencao", valor: 29, cor: "#ef8d32" },
                { label: "Critico", valor: 14, cor: "#d84f5f" }
            ],
            componentes: [
                { nome: "Correia", saude: 83, status: "Bom" },
                { nome: "Roletes Carga Retorno", saude: 75, status: "Atencao" },
                { nome: "Tambores", saude: 80, status: "Bom" },
                { nome: "Mancais e rolamentos", saude: 74, status: "Atencao" },
                { nome: "Emendas", saude: 78, status: "Atencao" },
                { nome: "Vedacoes", saude: 86, status: "Bom" }
            ]
        }
    ]
};
