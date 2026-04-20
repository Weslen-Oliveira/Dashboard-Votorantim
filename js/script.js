import { dashboardData } from "./dados.js";

const app = document.querySelector("#app");
const { linha, correias } = dashboardData;

function getStatusClass(status) {
    const normalized = status.toLowerCase();
    if (normalized.includes("crit")) return "critico";
    if (normalized.includes("aten")) return "atencao";
    return "bom";
}

function polarToCartesian(cx, cy, radius, angleInDegrees) {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;
    return {
        x: cx + radius * Math.cos(angleInRadians),
        y: cy + radius * Math.sin(angleInRadians)
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

function createDonutChart(items, centerLabel) {
    let startAngle = 0;
    const paths = items.map((item) => {
        const sweep = (item.valor / 100) * 360;
        const endAngle = startAngle + sweep;
        const d = describeArc(120, 120, 86, startAngle, endAngle);
        const path = `<path d="${d}" stroke="${item.cor}" stroke-width="26" fill="none" stroke-linecap="round"></path>`;
        startAngle = endAngle;
        return path;
    }).join("");

    const legend = items.map((item) => `
        <div class="legend-item">
            <span class="legend-dot" style="background:${item.cor}"></span>
            <span>${item.label}: <strong>${item.valor}%</strong></span>
        </div>
    `).join("");

    return `
        <div class="donut-wrap">
            <svg viewBox="0 0 240 240" class="donut-chart" aria-hidden="true">
                <circle cx="120" cy="120" r="86" stroke="var(--line)" stroke-width="26" fill="none"></circle>
                ${paths}
                <text x="120" y="115" text-anchor="middle" class="donut-center">${centerLabel}</text>
                <text x="120" y="138" text-anchor="middle" fill="var(--muted)" font-size="13">Saude geral</text>
            </svg>
            <div class="legend">${legend}</div>
        </div>
    `;
}

function createHorizontalBars(items) {
    return `
        <div class="bar-list">
            ${items.map((item) => `
                <div class="bar-row">
                    <div class="bar-label-line">
                        <span>${item.nome}</span>
                        <strong>${item.valor ?? item.saude}%</strong>
                    </div>
                    <div class="bar-track">
                        <div class="bar-fill" style="width:${item.valor ?? item.saude}%"></div>
                    </div>
                </div>
            `).join("")}
        </div>
    `;
}

function createVerticalBars(items) {
    return `
        <div class="vertical-bars">
            ${items.map((item) => `
                <div class="vertical-item">
                    <div class="vertical-track">
                        <div class="vertical-fill" style="height:${item.valor}%">
                            <span>${item.valor}%</span>
                        </div>
                    </div>
                    <div class="vertical-label">${item.nome}</div>
                </div>
            `).join("")}
        </div>
    `;
}

function createFunnel(items) {
    return `
        <div class="funnel-list">
            ${items.map((item) => `
                <div class="funnel-step" style="width:${item.largura}%; background:${item.cor}">
                    ${item.etapa}
                    <small>${item.valor}% dos Itens</small>
                </div>
            `).join("")}
        </div>
    `;
}

function createEquipmentGrid(componentes) {
    return `
        <div class="equipment-grid">
            ${componentes.map((item) => `
                <article class="equipment-item">
                    <small>${item.nome}</small>
                    <strong>${item.saude}%</strong>
                    <span class="equipment-status ${getStatusClass(item.status)}">${item.status}</span>
                    ${item.observacao ? `<small>${item.observacao}</small>` : ""}
                </article>
            `).join("")}
        </div>
    `;
}

function renderMainDashboard() {
    app.innerHTML = `
        <main class="dashboard-shell">
            <h1>VOTORANTIM CIMENTOS - <span class="spanItau">Itaú de Minas</span></h1>
            <section class="hero">
                <article class="hero-card">
                    <h1>Linha ${linha.nome}</h1>
                    <h3>Itens inspecionados</h3>
                    <p> Correias, Roletes, Tambores, Mancais, Rolamentos, Emendas e Vedacoes.</p>
                    <div class="hero-chart">
                        <div class="mini-chart">
                            <h4>Status da Linha Geral</h4>
                            ${createDonutChart(linha.resumoStatus, `${linha.saudeGeral}%`)}
                        </div>
                        <div class="mini-chart">
                            <h4>Tendência Mensal</h4><BR>
                            ${createVerticalBars(linha.tendencia)} <br>
                            <h4>Com base nos atendimentos Realisados</h4>
                        </div>
                        <div class="mini-chart">
                            <h4>Status por Item</h4>
                            ${createHorizontalBars(linha.criticidade)}
                        </div>
                    </div>
                </article>

            </section>

            <section>
                

                <div class="charts-grid">
                    <article class="chart-card span-5">
                        <div class="chart-header">
                            <div>
                                <h3>Fluxo de prioridades</h3>
                                <p>Funil de manutencao e acao</p>
                            </div>
                        </div>
                        ${createFunnel(linha.prioridades)}
                    </article>

                    <article class="chart-card span-7">
                        <div class="chart-header">
                            <div>
                                <h3>Componentes monitorados</h3>
                                <p>Resumo dos principais ativos da linha</p>
                            </div>
                        </div>
                        ${createEquipmentGrid(linha.componentes)}
                    </article>
                </div>
            </section>
        </main>

        <div class="modal" id="line-modal" aria-hidden="true">
            <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                <div class="modal-header">
                    <div>
                        <span class="eyebrow">Detalhamento da linha</span>
                        <h2 id="modal-title">Correias da ${linha.nome}</h2>
                        
                    </div>
                    <button class="modal-close" id="close-line-modal" type="button" aria-label="Fechar modal">X</button>
                </div>
                <div id="modal-content"></div>
            </div>
        </div>
    `;
}

function renderModalContent() {
    const modalContent = document.querySelector("#modal-content");

    modalContent.innerHTML = `
        <div class="modal-line-grid">
            ${correias.map((correia) => `
                <div class="modal-line-chip">
                    <small>Correia</small>
                    <strong>${correia.codigo}</strong>
                    <div style="margin-top:8px">
                        <span class="status-pill ${getStatusClass(correia.status)}">${correia.status}</span>
                    </div>
                    
                </div>
            `).join("")}
        </div>

        <div class="charts-grid">
            ${correias.map((correia) => `
                <article class="chart-card span-6">
                    <div class="chart-header">
                        <div>
                            <h3>${correia.codigo}</h3>
                            <p>Resumo da condicao da correia</p>
                        </div>
                        <span class="status-pill ${getStatusClass(correia.status)}">${correia.status}</span>
                    </div>
                    <div class="modal-detail-grid">
                        ${createDonutChart(correia.resumoStatus, `${correia.saudeGeral}%`)}
                        <article class="chart-card">
                            <div class="chart-header">
                                <div>
                                    <h3>Status por Item</h3>
                                    <p>Visão de saúde por componente da correia</p>
                                </div>
                            </div>
                            ${createHorizontalBars(correia.componentes)}
                        </article>
                    </div>
                </article>
            `).join("")}
        </div>
    `;
}

function setupEvents() {
    const openButton = document.querySelector("#open-line-modal");
    const modal = document.querySelector("#line-modal");
    const closeButton = document.querySelector("#close-line-modal");

    if (openButton) {
        openButton.addEventListener("click", () => {
            modal.classList.add("open");
            modal.setAttribute("aria-hidden", "false");
        });
    }

    if (closeButton) {
        closeButton.addEventListener("click", () => {
            modal.classList.remove("open");
            modal.setAttribute("aria-hidden", "true");
        });
    }

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("open");
            modal.setAttribute("aria-hidden", "true");
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            modal.classList.remove("open");
            modal.setAttribute("aria-hidden", "true");
        }
    });

    // Add click event to hero donut chart
    const heroDonut = document.querySelector(".hero-chart .donut-wrap");
    if (heroDonut) {
        heroDonut.addEventListener("click", () => {
            modal.classList.add("open");
            modal.setAttribute("aria-hidden", "false");
        });
    }
}

function setupThemeToggle() {
    const toggleButton = document.querySelector("#toggle-theme");
    const body = document.body;

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
        toggleButton.textContent = "☀️";
    } else {
        toggleButton.textContent = "🌙";
    }

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
        const isDark = body.classList.contains("dark-theme");
        toggleButton.textContent = isDark ? "☀️" : "🌙";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}

renderMainDashboard();
renderModalContent();
setupEvents();
setupThemeToggle();
