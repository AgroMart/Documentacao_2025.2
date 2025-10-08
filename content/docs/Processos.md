# 🧩 Processo de Desenvolvimento – Agromart

## 1. Objetivo

A criação de um processo padrão para o Agromart se deu pela necessidade de organizar padrões, documentos e entregas. Baseado na literatura científica e no contexto de desenvolvimento de software livre, esse processo prevê a melhora na qualidade, rastreabilidade e sustentabilidade do projeto como um todo, respeitando a rotatividade e o caráter voluntário dos colaboradores do Agromart.

---

## 2. Princípios

- **Clareza:** diretrizes simples e transparentes para todos os colaboradores.
- **Acessibilidade:** documentação objetiva e centralizada, reduzindo barreiras de entrada.
- **Adaptação contínua:** o processo é revisável e pode evoluir a qualquer momento, mantendo-se ágil e leve.

---

## 3. Modelo Híbrido

O processo combina práticas de **Kanban**, **Scrum** e **Extreme Programming (XP)**, aproveitando o melhor de cada abordagem:

- **Base:** Kanban – fluxo contínuo, sem sprints fixas.  
- **Scrum Adaptado:** uso dos conceitos de **DoR** (Definition of Ready) e **DoD** (Definition of Done).  
- **XP:** foco na simplicidade do código e integração contínua.

---

## 4. Kanban Board

O quadro **Kanban** (criado no GitHub Projects) organiza o fluxo de trabalho em colunas visuais, permitindo acompanhar as tarefas de forma transparente.

### 🧱 Colunas do Kanban

| Coluna | Significado | Critério principal |
|---------|--------------|--------------------|
| **Backlog** | Ideias, melhorias ou tarefas que ainda **não têm detalhes técnicos suficientes**. | Ainda **não atingem o DoR**. |
| **To Do** | Tarefas prontas para desenvolvimento, com descrição técnica e critérios de aceite definidos. | Atendem ao **DoR (Definition of Ready)**. |
| **In Progress** | Tarefas sendo desenvolvidas por um ou mais colaboradores. | Possuem branch ativa. |
| **Em Revisão** | Tarefas com PR aberto aguardando revisão por pares e validação automática (CI). | Código submetido e em análise. |
| **Concluído** | Tarefas finalizadas e aceitas após revisão e testes automatizados. | Atendem ao **DoD (Definition of Done)**. |

---

## 5. Conceitos-Chave

### 🔹 Definition of Ready (DoR)
Uma **tarefa está pronta para desenvolvimento** quando:
- Possui descrição clara e completa.
- Está priorizada no Kanban (coluna “A Fazer”). 
- É compreendida pelos desenvolvedores que irão executá-la.

> Tarefas que ainda não atendem a esses critérios permanecem no **Backlog** até serem detalhadas.

---

### 🔸 Definition of Done (DoD)
Uma **tarefa é considerada concluída** quando:
- O código foi revisado e aprovado por outro colaborador.  
- Passou nas actions de CI.  
- Foi integrada à branch principal.  
- A documentação e as decisões técnicas foram atualizadas.

> Apenas quando **todos esses pontos são atendidos**, a tarefa move-se para a coluna **“Concluído”**.

---

## 6. Pilares do Processo

- **Rastreabilidade:** issues e PRs sempre vinculados, com commits padronizados.  
- **Leveza:** documentação mínima mantida neste repositório de documentação.
- **Melhoria Contínua:** revisão periódica do processo e registro de decisões técnicas em arquivos leves.

---

## 7. Ciclo de Desenvolvimento Contínuo
1. Abrir issues seguindo os templates.  
2. Mover para “To Do” quando atender ao DoR.  
3. Desenvolver via branches e PRs vinculados às issues.  
4. Revisar e validar PRs (CI e revisões de código).  
5. Atualizar documentação e registros, quando necessário.  
6. Mover a tarefa para "Done" após atender ao DoD.  

---

## 8. Ferramentas de Suporte

- **GitHub:** hospedagem do código e controle de versão.  
- **GitHub Projects:** Kanban integrado a issues e PRs.  
- **GitHub Actions:** automação e validações.  

---

## 9. Instanciação e Evolução

O processo deverá ser aplicado pelos desenvolvedores e contribuidores do projeto. O processo está aberto a alterações e evoluções de acordo com os feedbacks dos manetedores coletados e utilizados para ajustar continuamente o processo, sempre com o objetivo de manter o crescimento sustentável do projeto a longo prazo.
