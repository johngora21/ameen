/**
 * Tanzania individual reference — modal HTML from public summaries (Jan 2026).
 */

export const tanzaniaIndividualPitHtml = `
<div class="modal-sub-section">
  <h4 class="modal-sub-title">Scope</h4>
  <p>Residents (other than short-term residents) taxed on <strong>worldwide income</strong>. Short-term residents and non-residents on <strong>Tanzania-source</strong> income. Personal services are Tanzanian-source if performed in Tanzania or, if abroad, paid by the Tanzanian government.</p>
</div>
<div class="modal-sub-section">
  <h4 class="modal-sub-title">Rates</h4>
  <p>Top marginal rate for residents <strong>30%</strong>. Non-residents: <strong>15% flat</strong> on employment income (final tax) or <strong>30%</strong> on total income as applicable. Presumptive regimes apply below TZS 100 million business turnover.</p>
</div>
<div class="modal-sub-section">
  <h4 class="modal-sub-title">Resident monthly brackets</h4>
  <div style="overflow-x:auto">
  <table class="modal-ref-table">
    <thead><tr><th>Monthly taxable income (TZS)</th><th>Tax on band (TZS)</th><th>Rate on excess (%)</th></tr></thead>
    <tbody>
      <tr><td>0 – 270,000</td><td>—</td><td>0</td></tr>
      <tr><td>270,001 – 520,000</td><td>—</td><td>8</td></tr>
      <tr><td>520,001 – 760,000</td><td>20,000</td><td>20</td></tr>
      <tr><td>760,001 – 1,000,000</td><td>68,000</td><td>25</td></tr>
      <tr><td>Above 1,000,000</td><td>128,000</td><td>30</td></tr>
    </tbody>
  </table>
  </div>
</div>
`;

export const tanzaniaIndividualResidenceHtml = `
<div class="modal-sub-section">
  <h4 class="modal-sub-title">Resident</h4>
  <p>Resident if (i) permanent home in Tanzania and visits in the year, or (ii) no permanent home but present <strong>183 days</strong> in the year or average <strong>122 days</strong> in the year and prior two years.</p>
</div>
<div class="modal-sub-section">
  <h4 class="modal-sub-title">Short-term resident</h4>
  <p>Short-term at year-end if lifetime residence in Tanzania totals not more than <strong>two years</strong>.</p>
</div>
`;

export const tanzaniaIndividualIncomeDeterminationHtml = `
<div class="modal-sub-section">
  <h4 class="modal-sub-title">Employment</h4>
  <p>Includes cash and benefits in kind (market value). Housing benefit is lower of market rent and the higher of (i) 15% of annual income excluding housing or (ii) employer’s deduction for the premises.</p>
</div>
<div class="modal-sub-section">
  <h4 class="modal-sub-title">Car benefit (annual TZS)</h4>
  <div style="overflow-x:auto">
  <table class="modal-ref-table">
    <thead><tr><th>Engine size</th><th>&lt; 5 years</th><th>≥ 5 years</th></tr></thead>
    <tbody>
      <tr><td>≤ 1000cc</td><td>250,000</td><td>125,000</td></tr>
      <tr><td>1001–2000cc</td><td>500,000</td><td>250,000</td></tr>
      <tr><td>2001–3000cc</td><td>1,000,000</td><td>500,000</td></tr>
      <tr><td>&gt; 3000cc</td><td>1,500,000</td><td>750,000</td></tr>
    </tbody>
  </table>
  </div>
  <p>No car benefit if employer claims no deduction for ownership, maintenance, or operation.</p>
</div>
<div class="modal-sub-section">
  <h4 class="modal-sub-title">Business — presumptive turnover (TZS)</h4>
  <div style="overflow-x:auto">
  <table class="modal-ref-table">
    <thead><tr><th>Turnover</th><th>No records</th><th>With records</th></tr></thead>
    <tbody>
      <tr><td>&lt; 4 million</td><td>0</td><td>0</td></tr>
      <tr><td>4m – 7m</td><td>100,000</td><td>3% of excess over 4m</td></tr>
      <tr><td>7m – 11m</td><td>250,000</td><td>90,000 + 3% of excess over 7m</td></tr>
      <tr><td>11m – 100m</td><td colspan="2">3.5% of turnover</td></tr>
    </tbody>
  </table>
  </div>
  <p>Turnover above TZS 100 million: corporate business tax rules apply. Separate fixed annual amounts apply to passenger, tour, goods, and hire vehicles by class — use statutory tables.</p>
</div>
<div class="modal-sub-section">
  <h4 class="modal-sub-title">Compliance thresholds</h4>
  <p>Audited financials generally required from <strong>TZS 100 million</strong> turnover. CPA certification of returns not required for small enterprises up to <strong>TZS 500 million</strong> turnover (individuals).</p>
</div>
<div class="modal-sub-section">
  <h4 class="modal-sub-title">Capital gains & investment income</h4>
  <p>Disposal of investment assets is taxable; deductions for acquisition, improvement, disposal costs. Exemptions include small private residence gain (≤ TZS 15m), small agricultural land (≤ TZS 10m market value), listed DSE shares (resident), non-resident shareholding &lt;25%. Instalment tax within 30 days of realisation; notify Commissioner within 14 days. Without cost records on land/buildings: <strong>3%</strong> on incomings or approved value. Dividends/interest/rent often final WHT.</p>
</div>
`;

export const tanzaniaIndividualDeductionsOtherHtml = `
<div class="modal-sub-section">
  <h4 class="modal-sub-title">Deductions</h4>
  <p>From employment: only statutory social security (e.g. NSSF). <strong>No personal allowances.</strong> Business/investment: expenses wholly and exclusively for producing that income, subject to exceptions.</p>
</div>
<div class="modal-sub-section">
  <h4 class="modal-sub-title">Social security</h4>
  <p><strong>NSSF</strong> (private sector): employer 20% of remuneration, may recover up to half from employee. <strong>PSSSF</strong> (public): 20%; employer may recover up to 5% from employee.</p>
</div>
<div class="modal-sub-section">
  <h4 class="modal-sub-title">SDL & employment-related</h4>
  <p><strong>Skills and development levy:</strong> 3.5% of gross cash emoluments on employers with ≥10 employees (exemptions for schools, universities, certain health institutions). <strong>Workers compensation:</strong> 0.5% of cash pay, monthly return.</p>
</div>
<div class="modal-sub-section">
  <h4 class="modal-sub-title">Property & consumption</h4>
  <p>Property tax: valued properties by band/location; unvalued: TZS 18,000 normal building, TZS 90,000 per storey. VAT: see corporate other-taxes materials. No net wealth, inheritance, or gift tax at national level in these summaries.</p>
</div>
`;

export const tanzaniaIndividualTreatiesAdminHtml = `
<div class="modal-sub-section">
  <h4 class="modal-sub-title">Foreign tax relief</h4>
  <p>Resident credit for foreign tax on foreign-source income, capped at Tanzanian tax on that income; carryforward of excess; election to deduct instead of credit. Treaty country: treaty governs.</p>
</div>
<div class="modal-sub-section">
  <h4 class="modal-sub-title">Treaties</h4>
  <p>In force with Canada, Denmark, Finland, India, Italy, Norway, South Africa, Sweden, Zambia. East African DTT signed, not yet ratified.</p>
</div>
<div class="modal-sub-section">
  <h4 class="modal-sub-title">Individual significant developments</h4>
  <p>Same Finance Act 2025 themes as corporate (VAT, administration, small enterprise return certification) apply where relevant to individuals.</p>
</div>
<div class="modal-sub-section">
  <h4 class="modal-sub-title">Administration</h4>
  <p>Calendar tax year; non-calendar year for non-employment income with approval. PAYE on employment. Final withholding on listed payment types. Single instalment tax on certain transfers (land, shares, licences, forest produce) with certificate before registration — pay within 30 days (or Commissioner period); notify within 14 days. Returns not required if only PAYE from resident employer or only single instalment income; otherwise estimated statement within three months of year start, final return within six months after year-end. Quarterly estimated payments; final with return. Late interest at Bank of Tanzania discount rate, compounded. Online WHT remittance and certificates via revenue gateway for registered taxpayers.</p>
</div>
<div class="modal-sub-section">
  <h4 class="modal-sub-title">Other credits</h4>
  <p>No other significant individual credits or incentives noted in summary materials.</p>
</div>
`;
