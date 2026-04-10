import {
  tanzaniaSignificantDevelopmentsHtml,
  tanzaniaTaxesOnCorporateIncomeHtml,
  tanzaniaCorporateResidenceHtml,
  tanzaniaBranchIncomeHtml,
  tanzaniaCorporateIncomeDeterminationHtml,
  tanzaniaCorporateDeductionsHtml,
  tanzaniaGroupTaxationHtml,
  tanzaniaOtherTaxesCorporateHtml,
  tanzaniaWithholdingHtml,
  tanzaniaCorporateTaxAdminHtml,
  tanzaniaTaxCreditsIncentivesHtml,
} from './tanzaniaCorporateHtml';

import {
  tanzaniaIndividualPitHtml,
  tanzaniaIndividualResidenceHtml,
  tanzaniaIndividualIncomeDeterminationHtml,
  tanzaniaIndividualDeductionsOtherHtml,
  tanzaniaIndividualTreatiesAdminHtml,
} from './tanzaniaIndividualHtml';

const g = (a, b) => ({ gradient: a, shape: b });
const G1 = 'linear-gradient(135deg, rgba(26,58,107,0.2) 0%, rgba(37,99,235,0.12) 100%)';
const G2 = 'linear-gradient(135deg, rgba(234,108,10,0.14) 0%, rgba(26,58,107,0.1) 100%)';
const G3 = 'linear-gradient(135deg, rgba(6,95,70,0.14) 0%, rgba(16,185,129,0.1) 100%)';
const G4 = 'linear-gradient(135deg, rgba(124,58,237,0.14) 0%, rgba(167,139,250,0.08) 100%)';
const G5 = 'linear-gradient(135deg, rgba(13,31,60,0.12) 0%, rgba(234,108,10,0.1) 100%)';

const tanzaniaOverviewHtml = `
<div class="modal-sub-section">
  <h4 class="modal-sub-title">Territory snapshot</h4>
  <p>Tanzania is in East Africa, bordered by Kenya and Uganda to the north; Rwanda, Burundi, and the Democratic Republic of the Congo to the west; Zambia, Malawi, and Mozambique to the south; and the Indian Ocean to the east. The United Republic formed in 1964 from Tanganyika and Zanzibar. Official languages: Kiswahili and English. Capital: Dodoma. Currency: Tanzanian shilling (TZS).</p>
  <p>Major export industries include agriculture, mining, and tourism; many people work in agriculture. Gas reserves are expected to support future export revenues. Other significant sectors include construction, financial services, manufacturing, telecommunications, and utilities.</p>
  <p><strong>Union note:</strong> Mainland and Zanzibar share the union but some tax rules (e.g. VAT) differ by jurisdiction.</p>
</div>
`;

const tanzaniaQuickRatesHtml = `
<div class="modal-sub-section">
  <h4 class="modal-sub-title">Headline rates & dates (summary)</h4>
  <p><small>Snapshot as of January 2026 from published schedules and summaries; verify against current TRA notices and Finance Acts.</small></p>
  <div style="overflow-x:auto">
  <table class="modal-ref-table">
    <thead><tr><th>Topic</th><th>Detail</th></tr></thead>
    <tbody>
      <tr><td>CIT headline</td><td>30%</td></tr>
      <tr><td>CIT return / final payment</td><td>Generally 6 months after period end; 9 months for public sector</td></tr>
      <tr><td>CIT instalments</td><td>Four equal payments by 3, 6, 9, 12 months from period start</td></tr>
      <tr><td>PIT headline</td><td>Residents 30%; non-residents 15% employment-only or 30% total income</td></tr>
      <tr><td>PIT return / final</td><td>Within 6 months after year of income</td></tr>
      <tr><td>PIT instalments</td><td>Quarterly (end of 3rd, 6th, 9th, 12th month of year of income)</td></tr>
      <tr><td>VAT</td><td>Mainland 18%; 16% specified B2C via bank/approved e-payment from Sep 2025. Zanzibar: 15% general; 18% banking/postal/telecom etc.</td></tr>
      <tr><td>WHT (div / int / roy)</td><td>Resident: 5 or 10 / 10 / 5, 10 or 15. Non-resident: 5 or 10 / 10 / 10 or 15</td></tr>
      <tr><td>CGT — corporate</td><td>Normal CIT rate on gains</td></tr>
      <tr><td>CGT — individual</td><td>Residents 10 or 3% on certain property without records; non-residents 30%; mineral/petroleum rights 30%</td></tr>
      <tr><td>Wealth / inheritance / gift</td><td>Not applicable in quick-reference sense — other duties may still apply</td></tr>
    </tbody>
  </table>
  </div>
</div>
`;

/** Tanzania analytics cards — neutral teasers; detail in modal. */
export const insightPublications = [
  {
    num: '01',
    type: 'Report',
    tag: 'Overview',
    title: 'Territory & economy',
    desc: 'Macro framing: geography, the mainland–Zanzibar union, currency, and sector weights that sit behind fiscal and trade statistics.',
    date: 'Jan 2026',
    ...g(G1, '#2563eb'),
    details: tanzaniaOverviewHtml,
  },
  {
    num: '02',
    type: 'Report',
    tag: 'Overview',
    title: 'Rates & filing calendar',
    desc: 'Single-view matrix of headline CIT, PIT, VAT, WHT, and CGT, with standard return and payment timing from published rules.',
    date: 'Jan 2026',
    ...g(G5, '#0d1f3c'),
    details: tanzaniaQuickRatesHtml,
  },
  {
    num: '03',
    type: 'Report',
    tag: 'Corporate',
    title: 'Legislative pulse — Finance Act 2025',
    desc: 'Structured extract of administration, income tax, VAT, and excise amendments effective under the 2025 finance cycle.',
    date: 'Jan 2026',
    ...g(G2, '#ea6c0a'),
    details: tanzaniaSignificantDevelopmentsHtml,
  },
  {
    num: '04',
    type: 'Report',
    tag: 'Corporate',
    title: 'Corporate income tax',
    desc: 'Residence and source rules, standard and reduced CIT rates, listing relief, and alternative minimum tax triggers.',
    date: 'Jan 2026',
    ...g(G2, '#1e4799'),
    details: tanzaniaTaxesOnCorporateIncomeHtml,
  },
  {
    num: '05',
    type: 'Report',
    tag: 'Corporate',
    title: 'Residence & permanent establishment',
    desc: 'Corporate residence tests and PE definitions as coded—relevant to inbound structures and permanent establishment exposure.',
    date: 'Jan 2026',
    ...g(G1, '#1e4799'),
    details: tanzaniaCorporateResidenceHtml,
  },
  {
    num: '06',
    type: 'Report',
    tag: 'Corporate',
    title: 'Branches & repatriation',
    desc: 'Branch profit computation, statutory repatriation charge, and attribution between permanent establishment and head office.',
    date: 'Jan 2026',
    ...g(G3, '#059669'),
    details: tanzaniaBranchIncomeHtml,
  },
  {
    num: '07',
    type: 'Report',
    tag: 'Corporate',
    title: 'Building up taxable profit',
    desc: 'Accounting basis, investment income, royalty and interest characterisation, foreign income, credits, and final withholding outcomes.',
    date: 'Jan 2026',
    ...g(G4, '#7c3aed'),
    details: tanzaniaCorporateIncomeDeterminationHtml,
  },
  {
    num: '08',
    type: 'Report',
    tag: 'Corporate',
    title: 'Deductions, capex & losses',
    desc: 'Deductibility rules, depreciation classes, loss ring-fencing, carryforward mechanics, and the profit-shelter cap.',
    date: 'Jan 2026',
    ...g(G2, '#ea6c0a'),
    details: tanzaniaCorporateDeductionsHtml,
  },
  {
    num: '09',
    type: 'Report',
    tag: 'Corporate',
    title: 'Groups, related parties & anti-avoidance',
    desc: 'Absence of group consolidation; transfer pricing documentation thresholds; thin capitalisation; change-of-control; anti-avoidance toolkit.',
    date: 'Jan 2026',
    ...g(G5, '#0d1f3c'),
    details: tanzaniaGroupTaxationHtml,
  },
  {
    num: '10',
    type: 'Report',
    tag: 'Corporate',
    title: 'VAT, trade & digital economy',
    desc: 'VAT registration and rates by jurisdiction, imports, customs bands, reverse charge, withholding VAT, and digital services tax parameters.',
    date: 'Jan 2026',
    ...g(G4, '#7c3aed'),
    details: tanzaniaOtherTaxesCorporateHtml,
  },
  {
    num: '11',
    type: 'Report',
    tag: 'Corporate',
    title: 'Withholding & treaty positions',
    desc: 'Payment-type withholding matrix and treaty rate overlays where double tax agreements apply.',
    date: 'Jan 2026',
    ...g(G2, '#ea6c0a'),
    details: tanzaniaWithholdingHtml,
  },
  {
    num: '12',
    type: 'Report',
    tag: 'Corporate',
    title: 'TRA in practice',
    desc: 'Filing and payment calendars, penalty and interest rules, audit cadence, objection timelines, limitation period, stated enforcement focus areas.',
    date: 'Jan 2026',
    ...g(G1, '#2563eb'),
    details: tanzaniaCorporateTaxAdminHtml,
  },
  {
    num: '13',
    type: 'Report',
    tag: 'Corporate',
    title: 'Incentives & special regimes',
    desc: 'Foreign tax credit linkage, sector capital allowances, EPZ/SEZ benefits, and statutory reduced-rate pathways.',
    date: 'Jan 2026',
    ...g(G3, '#059669'),
    details: tanzaniaTaxCreditsIncentivesHtml,
  },
  {
    num: '14',
    type: 'Report',
    tag: 'Individual',
    title: 'Personal income tax',
    desc: 'Worldwide versus source taxation, non-resident employment flat rate, marginal schedule for residents, presumptive cross-references.',
    date: 'Jan 2026',
    ...g(G3, '#059669'),
    details: tanzaniaIndividualPitHtml,
  },
  {
    num: '15',
    type: 'Report',
    tag: 'Individual',
    title: 'Residence for individuals',
    desc: 'Permanent home, days-based, and averaging tests; definition and tax effect of short-term resident status.',
    date: 'Jan 2026',
    ...g(G1, '#1e4799'),
    details: tanzaniaIndividualResidenceHtml,
  },
  {
    num: '16',
    type: 'Report',
    tag: 'Individual',
    title: 'Pay, benefits & personal businesses',
    desc: 'Taxation of cash and benefits in kind, presumptive turnover tables, investment realisations, and return-filing thresholds.',
    date: 'Jan 2026',
    ...g(G4, '#7c3aed'),
    details: tanzaniaIndividualIncomeDeterminationHtml,
  },
  {
    num: '17',
    type: 'Report',
    tag: 'Individual',
    title: 'Payroll levies & property',
    desc: 'NSSF/PSSSF parameters, skills development levy, workers’ compensation tariff, and property tax baselines alongside PIT.',
    date: 'Jan 2026',
    ...g(G5, '#0d1f3c'),
    details: tanzaniaIndividualDeductionsOtherHtml,
  },
  {
    num: '18',
    type: 'Report',
    tag: 'Individual',
    title: 'Relief, treaties & personal compliance',
    desc: 'Foreign tax credit and treaty inventory, PAYE-only exceptions, instalment tax on prescribed transfers, remittance mechanics.',
    date: 'Jan 2026',
    ...g(G2, '#ea6c0a'),
    details: tanzaniaIndividualTreatiesAdminHtml,
  },
];
