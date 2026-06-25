# Private Equity Special Unit Design

## Objective

Build Special Unit 1 as a separate teaching page titled **Private Equity: 中国与比较法上的私募和资管制度** and link it from the Topics page. The page should use web-searched, verifiable information and the user's provided framework to teach private funds and asset management from Chinese company, partnership, securities, trust, financial-regulatory, case-law, and comparative-law perspectives.

The page should be bilingual in a functional teaching sense: English titles, headings, legal terms, rules, and case names appear first, followed by the relevant Chinese characters or official Chinese title where useful. It should not become a full parallel translation. The goal is to help students connect English analytical vocabulary with Chinese legal terminology.

## Scope

The work covers one new special-unit page, the Topics-page link, and the resource records needed for legislation, cases, readings, and comparative materials. It does not create pages for the other special units.

## Architecture

Use the existing topic-page system rather than a standalone custom page. Add a small topic metadata distinction so regular units and special units can share `src/pages/topics/[slug].astro` while the Topics index can display them in separate sections.

The planned content model is:

- Regular topic entries remain the existing ten course units.
- Special topic entries use the same topic collection, with metadata that identifies them as special units and gives them a special-unit order.
- The topic detail page renders the hero label as `Special Unit 1` for this page and `Unit N` for regular units.
- The Topics page renders regular entries under `Regular Units` and special entries under `Special Units`.

This preserves the existing resource-card sections, resource filtering, static build behavior, and course-site navigation.

## Page Content

The page will organize the subject as follows:

- Introduction: private equity, private funds, and asset management as related but distinct systems.
- Chinese organization-law foundations: company-type funds, limited-partnership funds, and contractual funds.
- Private fund regulation: non-public fundraising, qualified investors, manager registration, fund filing, custody, disclosure, conflicts, investor protection, and enforcement.
- Asset-management regulation: trust-law structure, fiduciary duties, net-value management, rigid-redemption prohibition, leverage and nesting limits, channel-business treatment, and suitability duties.
- Core legislation and rules: Company Law, Partnership Enterprise Law, Securities Investment Fund Law, Trust Law, Private Investment Fund Regulation, CSRC private fund rules, CSRC private asset-management rules, Asset Management Guidance, and Jiu Min Minutes.
- Cases: VAM and private-equity downside protection, limited-partnership investor enforcement, suitability duties, rigid redemption, and channel-business responsibility.
- Comparative law: U.S. private offerings and private fund exemptions, U.S. private fund adviser regulation, UK limited partnerships and PFLP, UK/EU AIFM regulation, and Cayman private funds.
- Teaching tools: tables for organization forms, regulatory layers, case themes, and a fund-formation checklist.

Terminology should follow this style: private equity (私募股权), private fund (私募基金), asset management (资产管理/资管), qualified investor (合格投资者), non-public fundraising (非公开募集), manager registration (管理人登记), product filing (基金备案/产品备案), rigid redemption (刚性兑付), channel business (通道业务), suitability duty (适当性义务), fiduciary duty (信义义务), and fund property independence (基金财产独立).

## Source Verification

Use primary or stable sources where available. Verified source anchors include:

- State Council Order No. 762, `Private Investment Fund Supervision and Administration Regulation`, effective 1 September 2023.
- CSRC Order No. 203, `Measures for the Administration of Private Asset Management Business of Securities and Futures Business Institutions`, effective 1 March 2023.
- SPC `Minutes of the National Courts' Civil and Commercial Trial Work Conference`, especially suitability duties, business trust disputes, rigid-redemption clauses, channel business, and trustee burden of proof.
- Existing course records for the Company Law, Partnership Enterprise Law, private fund rules, private asset-management rules, Haifu, Huagong, and Shixin Ronghe.
- SEC materials on private funds, Regulation D Rule 506, Investment Company Act exclusions, private fund advisers, and Form PF.
- UK, EU, and Cayman official or regulator materials for limited partnerships, AIFM regulation, AIFMD, and private fund registration.

If a proposed case cannot be verified from an official or stable source, the page should either omit it or describe it cautiously as an illustrative lower-court example with a source note.

## Resource Records

Reuse existing records where they already exist. Add new records only where needed for:

- Securities Investment Fund Law.
- Trust Law.
- Asset Management Guidance.
- Jiu Min Minutes if the existing record needs topic tagging.
- U.S. Regulation D/private funds materials.
- UK/EU/Cayman comparative materials.
- Any verified case not already represented in the course resources.

Each new resource must include source URL, jurisdiction, kind, date or citation where available, topic tags, and a short teaching summary.

Where a resource has an official Chinese title, the resource card and the page discussion should present the English title followed by the Chinese original title. Case discussions should follow the same pattern unless the case is better known by a short Chinese reference, such as Haifu/Shiheng (海富/世恒).

## Testing

Validation should include:

- Content contract tests.
- `astro check`.
- Production build.
- Generated HTML marker checks for the new page title, Special Unit 1 label, Topics-page link, and selected source names.
- Local browser preview at `/topics/` and the new special-unit URL.

## Out Of Scope

This pass will not publish to GitHub unless separately requested, will not build full pages for the other nine special units, and will not convert the page into legal advice.
