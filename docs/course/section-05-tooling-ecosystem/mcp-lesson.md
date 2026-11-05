# Lesson 3 — MCP (Runtime Diagnostic Bridge)

App route: `/course/section-05/mcp`

## Core idea

Move from **speculation** (static snippets, pasted logs) to **observation** (structured runtime evidence).

## MCP

- Open protocol — diagnostic bridge from IDE host to tools
- **Bounded autonomy** — only declared, permitted servers
- **JSON-RPC** client–host–server architecture

## Toolkit servers

| Server | Role |
|--------|------|
| Playwright MCP | Browser — user journeys from spec |
| Chrome DevTools MCP | Traces, network, performance (LCP) |
| Figma MCP | Design artifacts as source of truth |

## Runtime Gateflow

1. **Select spec** — requirement from requirements.md  
2. **Reproduce** — Playwright  
3. **Record** — DevTools evidence  
4. **Localize** — root cause  
5. **Map** — evidence → code + spec  
6. **Propose** — minimal fix + verification  

Evidence always anchors back to the spec — vague requirements surface in the trail.

## Governance

- **Always do:** record evidence, link to spec  
- **Ask first:** state changes outside sandbox  
- **Never do:** undeclared secrets/resources  
