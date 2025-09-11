import React, { useRef } from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
// import './HFFCValuationReport.css'; // your existing CSS for .text-danger, .text-primary, etc.

const HFFCValuationReport = () => {
  const reportRef = useRef();

  const handleExportPDF = () => {
    const doc = new jsPDF('p', 'pt', 'a4');
    doc.html(reportRef.current, {
      callback: (doc) => {
        doc.save('HFFC_Valuation_Report.pdf');
      },
      x: 10,
      y: 10,
      html2canvas: { scale: 0.57 } // adjust to fit A4
    });
  };

  const handleExportExcel = () => {
    // 1) convert your entire report DIV to a workbook
    const wb = XLSX.utils.table_to_book(reportRef.current, { sheet: 'Report' });
    const ws = wb.Sheets['Report'];

    // 2) compute how many columns there are
    const range = XLSX.utils.decode_range(ws['!ref']);
    const numCols = range.e.c - range.s.c + 1;

    // 3) set each column to a nice wide width (in pixels)
    ws['!cols'] = Array.from({ length: numCols }, () => ({ wpx: 200 }));

    // 4) add a thin black border around every cell
    for (let R = range.s.r; R <= range.e.r; ++R) {
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const addr = XLSX.utils.encode_cell({ r: R, c: C });
        const cell = ws[addr];
        if (cell) {
          cell.s = cell.s || {};
          cell.s.border = {
            top:    { style: 'thin', color: { rgb: '000000' } },
            bottom: { style: 'thin', color: { rgb: '000000' } },
            left:   { style: 'thin', color: { rgb: '000000' } },
            right:  { style: 'thin', color: { rgb: '000000' } },
          };
        }
      }
    }

      // 5) write out, enabling cellStyles so borders & widths stick
  XLSX.writeFile(
    wb,
    'HFFC_Valuation_Report.xlsx',
    { bookType: 'xlsx', bookSST: false, cellStyles: true }
  );
};

  const handleExportCSV = () => {
    const wb = XLSX.utils.table_to_book(reportRef.current, { sheet: 'Report' });
    const csv = XLSX.utils.sheet_to_csv(wb.Sheets['Report']);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'HFFC_Valuation_Report.csv');
  };

  return (
    <div>
      {/* Export buttons */}
      <div style={{ margin: '20px 0', textAlign: 'right' }}>
        <button onClick={handleExportPDF} style={{ marginRight: 8 }}>
          Download PDF
        </button>
        <button onClick={handleExportExcel} style={{ marginRight: 8 }}>
          Download Excel
        </button>
        <button onClick={handleExportCSV}>
          Download CSV
        </button>
      </div>

      {/* The report to export */}
      <div id="report" ref={reportRef} className="valuation-report">
        {/* ====== TABLE 1 ====== */}
        <table cellSpacing="0" cellPadding="0">
          <colgroup>
            <col width="35" />
            <col width="163" />
            <col width="298" />
            <col width="130" />
            <col width="155" />
            <col width="177" />
          </colgroup>
          <tbody>
            <tr style={{ backgroundColor: "#F0F8FF" }} className='text-center'>
              <td colSpan="6">
                <b>
                  VALUATION REPORT <br />
                  FOR <br />
                  HOME FIRST FINANCE COMPANY (HFFC){" "}
                  <span className="text-primary">(WWW.HFFC.IN)</span>
                </b>
              </td>
            </tr>
            <tr>
              <td rowSpan="8">1</td>
              <td className="text-danger text-center" colSpan="5">
                <b> L &amp; T ASSIGNMENT DETAILS</b>
              </td>
            </tr>
            <tr>
              <td>Customer Name</td>
              <td colSpan="2">MR.Jivnlal Singh.</td>
              <td>Date of Report</td>
              <td className="font-boldi">13.01.2025</td>
            </tr>
            <tr>
              <td>Property Name</td>
              <td colSpan="2">NA</td>
              <td>Ref No.</td>
              <td>NA</td>
            </tr>
            <tr>
              <td>Customer No.</td>
              <td colSpan="2">9644983608</td>
              <td>Evaluation Type</td>
              <td>One Off</td>
            </tr>
            <tr>
              <td>Person Met during visit</td>
              <td colSpan="2">MR.PHOOL SINGH JI</td>
              <td>Unit Type</td>
              <td>Individual House</td>
            </tr>
            <tr>
              <td>Person Contact No.</td>
              <td colSpan="4">9644983608</td>
            </tr>
            <tr>
              <td>Type of Loan</td>
              <td colSpan="4">Own Plot + SeCo</td>
            </tr>
            <tr>
              <td>Documents<br/>Available for perusal</td>
              <td colSpan="4">
                <p className="text-danger text-center">
                  <b> CO-OWNERSHIP DEED,LAYOUT, MAP</b>
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        {/* ====== TABLE 2: GENERAL DETAILS ====== */}
        <table cellSpacing="0" cellPadding="0">
          <colgroup>
            <col width="163" />
            <col width="298" />
            <col width="130" />
            <col width="155" />
            <col width="177" />
          </colgroup>
          <tbody>
            <tr>
              <td className="text-danger text-center" colSpan="5">
                <b>GENERAL DETAILS</b>
              </td>
            </tr>
            <tr>
              <td>Address as per Legal Document</td>
              <td colSpan="4">
                <b>
                  PROPERTY AT PLOT NO.147 IS SITUATED GRAM-PATLONA(BIJORI),PH
                  NO.18,GRAM PANCHAYAT-BIJORI, TEHSIL AND DIST-SEHORE,MP466001
                </b>
              </td>
            </tr>
            <tr>
              <td>Address As per Site</td>
              <td colSpan="4">
                <b>
                  PROPERTY AT PLOT NO.147 IS SITUATED GRAM-PATLONA(BIJORI),PH
                  NO.18,GRAM PANCHAYAT-BIJORI, TEHSIL AND DIST-SEHORE,MP466001
                </b>
              </td>
            </tr>
            <tr>
              <td>Nearby landmark<br/>(within 500m)</td>
              <td>NEAR GOVT.SCHOOL</td>
              <td>Project Pin Code</td>
              <td colSpan="2">466001</td>
            </tr>
            <tr>
              <td>Zone</td>
              <td>RESIDENTIAL</td>
              <td>Project State</td>
              <td colSpan="2">MADHYAPRADESH</td>
            </tr>
            <tr>
              <td>Name on society<br/>board:</td>
              <td>NA</td>
              <td>Name on door of<br/>the premises</td>
              <td colSpan="2">NA</td>
            </tr>
            <tr>
              <td>Latitude</td>
              <td><b>23.235495</b></td>
              <td>Longitude</td>
              <td colSpan="2"><b>77.076638</b></td>
            </tr>
            <tr>
              <td>Population as per Census 2011</td>
              <td>NA</td>
              <td>Rural/ Urban</td>
              <td colSpan="2">Rural</td>
            </tr>
            <tr>
              <td>Status of Occupancy</td>
              <td>Under Construction</td>
              <td>Occupied by</td>
              <td colSpan="2">NA</td>
            </tr>
            <tr>
              <td>Usage of the property</td>
              <td colSpan="4">NA</td>
            </tr>
            <tr>
              <td>RERA (If applicable)</td>
              <td>No</td>
              <td>Number & Date</td>
              <td colSpan="2">NA</td>
            </tr>
            <tr>
              <td>Ownership Type</td>
              <td colSpan="4">Freehold</td>
            </tr>
          </tbody>
        </table>

        {/* ====== TABLE 3: DOCUMENT DETAILS ====== */}
        <table cellSpacing="0" cellPadding="0">
          <colgroup>
            <col width="163" />
            <col width="298" />
            <col width="130" />
            <col width="155" />
            <col width="177" />
          </colgroup>
          <tbody>
            <tr>
              <td className="text-danger text-center" colSpan="5">
                <b>DOCUMENT DETAILS</b>
              </td>
            </tr>
            <tr>
              <td><b>TYPE</b></td>
              <td><b>Approving Authority / Applicability</b></td>
              <td><b>Date of approval and Number</b></td>
              <td colSpan="2"><b>Details of the approval.</b></td>
            </tr>
            <tr>
              <td>NA Converted</td>
              <td>No</td>
              <td>Number & Date</td>
              <td colSpan="2">NA</td>
            </tr>
            <tr>
              <td>Approved Sanction Plan</td>
              <td>Architect Plan</td>
              <td>Number & Date</td>
              <td colSpan="2">ENGG MAP</td>
            </tr>
            <tr>
              <td>Approved Layout Plan</td>
              <td>Architect Plan</td>
              <td>Number & Date</td>
              <td colSpan="2">KEY PLAN</td>
            </tr>
            <tr>
              <td>Commencement Certificate (If any)</td>
              <td></td>
              <td>Number & Date</td>
              <td colSpan="2">NA</td>
            </tr>
            <tr>
              <td>Occupancy/ Completion/ Building usage certificate</td>
              <td></td>
              <td>Number & Date</td>
              <td colSpan="2">NA</td>
            </tr>
            <tr>
              <td>Approved Sub Plotting Plan</td>
              <td></td>
              <td>Number & Date</td>
              <td colSpan="2">NA</td>
            </tr>
          </tbody>
        </table>

        {/* ====== TABLE 4: LOCALITY DETAILS ====== */}
        <table cellSpacing="0" cellPadding="0">
          <tbody>
            <tr>
              <td className="text-danger text-center" colSpan="5">
                <b>LOCALITY DETAILS</b>
              </td>
            </tr>
            <tr>
              <td>Locality Development</td>
              <td>Developing</td>
              <td>Occupancy of Project/Area (%)</td>
              <td colSpan="2">30%</td>
            </tr>
            <tr>
              <td>Type of Approach Road</td>
              <td>SOIL</td>
              <td>Habitation in surrounding Area (%)</td>
              <td colSpan="2">40%</td>
            </tr>
            <tr>
              <td>Approach Road Width (In Feet)</td>
              <td>12 FT</td>
              <td>Proposed Road Widening</td>
              <td colSpan="2">No</td>
            </tr>
            <tr>
              <td>Distance from city centre (in KM)</td>
              <td>5 KM</td>
              <td>Name of City Centre Considered</td>
              <td colSpan="2">SEHORE</td>
            </tr>
            <tr>
              <td>Distance from Railway Station (in KM)</td>
              <td>5 KM</td>
              <td>Drainage Line connection</td>
              <td colSpan="2">Yes</td>
            </tr>
            <tr>
              <td>Distance from Bus Stand (in KM)</td>
              <td>4 KM</td>
              <td>Water & Electricity Supply Connection</td>
              <td colSpan="2">Yes</td>
            </tr>
            <tr>
              <td>Distance from Hospital (in KM)</td>
              <td>4 KM</td>
              <td>Nallah, River, High tension line if any</td>
              <td colSpan="2"><b>NA</b></td>
            </tr>
          </tbody>
        </table>

        {/* ====== TABLE 5: NDMA GUIDELINE ====== */}
        <table cellSpacing="0" cellPadding="0">
          <tbody>
            <tr>
              <td className="text-danger text-center" colSpan="5">
                <b>NDMA GUIDELINE</b>
              </td>
            </tr>
            <tr>
              <td>Property Falls under Sesimic Zone</td>
              <td>III</td>
              <td>Property Falls under Flood Zone</td>
              <td colSpan="2">NO</td>
            </tr>
            <tr>
              <td>Property Falls under Cyclone Zone</td>
              <td>No</td>
              <td>Property Falls in CR Zone</td>
              <td colSpan="2">NO</td>
            </tr>
            <tr>
              <td>Property falls under Landslide Prone Zone</td>
              <td>No</td>
              <td>Follows NMDA Guidelines</td>
              <td colSpan="2">Yes</td>
            </tr>
            <tr>
              <td>Degree of Risk Associated</td>
              <td>High/Medium/Low</td>
              <td>Any Demolition Risk with Details</td>
              <td colSpan="2"><b>Nil</b></td>
            </tr>
          </tbody>
        </table>

        {/* ====== TABLE 6: PROPERTY DETAILS ====== */}
        <table cellSpacing="0" cellPadding="0">
          <colgroup>
            <col width="163" />
            <col width="298" />
            <col width="130" />
            <col width="155" />
            <col width="177" />
          </colgroup>
          <tbody>
            <tr>
              <td className="text-danger text-center" colSpan="5">
                <b>PROPERTY DETAILS</b>
              </td>
            </tr>
            <tr>
              <td rowSpan="5">Boundaries on Site</td>
              <td><b>Directions</b></td>
              <td><b>As per Document/ATS</b></td>
              <td><b>Actual at site</b></td>
              <td><b>As per plan</b></td>
            </tr>
            <tr>
              <td><b>North</b></td>
              <td><b>ROAD</b></td>
              <td><b>ROAD</b></td>
              <td>NA</td>
            </tr>
            <tr>
              <td><b>South</b></td>
              <td><b>ROAD</b></td>
              <td><b>ROAD</b></td>
              <td>NA</td>
            </tr>
            <tr>
              <td><b>East</b></td>
              <td><b>MUD HOUSE OF RAM SINGH JI</b></td>
              <td><b>MUD HOUSE OF RAM SINGH JI</b></td>
              <td>NA</td>
            </tr>
            <tr>
              <td><b>West</b></td>
              <td><b>MUD HOUSE OF JEEVAN LAL</b></td>
              <td><b>MUD HOUSE OF JEEVAN LAL</b></td>
              <td>NA</td>
            </tr>
            <tr>
              <td>Boundaries Matching</td>
              <td>Yes</td>
              <td>If No - Detail Remark</td>
              <td>NA</td>
              <td>Dimension:</td>
            </tr>
            <tr>
              <td>Plot Area (Sq. ft)</td>
              <td>900</td>
              <td>Property is Demarcated</td>
              <td>Yes</td>
              <td>30 * 30</td>
            </tr>
            <tr>
              <td>Is the property within which limit</td>
              <td>Gram panchayat (GP)</td>
              <td>Property Easily Identifiable</td>
              <td colSpan="2">If no, Remarks:</td>
            </tr>
            <tr>
              <td>Marketability</td>
              <td>Good/ Average/ Poor</td>
              <td>Yes</td>
              <td colSpan="2">NA</td>
            </tr>
          </tbody>
        </table>

        {/* ====== TABLE 7: STRUCTURAL DETAILS ====== */}
        <table cellSpacing="0" cellPadding="0">
          <colgroup>
            <col width="163" />
            <col width="298" />
            <col width="130" />
            <col width="155" />
            <col width="177" />
          </colgroup>
          <tbody>
            <tr>
              <td className="text-danger text-center" colSpan="5">
                <b>STRUCTURAL DETAILS</b>
              </td>
            </tr>
            <tr>
              <td>Type of Structure</td>
              <td>NA</td>
              <td>Quality of Construction</td>
              <td colSpan="2">AVG</td>
            </tr>
            <tr>
              <td>Unit / Flat Configuration</td>
              <td>NA</td>
              <td>If quality of construction is poor</td>
              <td colSpan="2">NA</td>
            </tr>
            <tr>
              <td>No. Of Floors Permissible</td>
              <td>NA</td>
              <td>No. Of Floors Actual</td>
              <td colSpan="2">NA</td>
            </tr>
            <tr>
              <td>No. of Unit / Flat on each Floor</td>
              <td>NA</td>
              <td>Internal composition of the property</td>
              <td colSpan="2">NA</td>
            </tr>
            <tr>
              <td>Approx. Age of Property (Years)</td>
              <td>0</td>
              <td>Whether construction is as per plan / permission / building by laws</td>
              <td colSpan="2">Yes</td>
            </tr>
            <tr>
              <td>Residual Age (Years)</td>
              <td>50</td>
              <td>Current Construction Status (in % only)</td>
              <td colSpan="2">20%</td>
            </tr>
            <tr>
              <td>Whether Lift Available</td>
              <td>No</td>
              <td>Height of the building (Approx in Meters)</td>
              <td colSpan="2">3.75 MTR</td>
            </tr>
            <tr>
              <td>Construction stage</td>
              <td colSpan="4">Plinth</td>
            </tr>
          </tbody>
        </table>

        {/* ====== TABLE 8: VIOLATION & VALUATION ====== */}
        <table cellSpacing="0" cellPadding="0">
          <colgroup>
            <col width="163" />
            <col width="298" />
            <col width="130" />
            <col width="155" />
            <col width="177" />
          </colgroup>
          <tbody>
            <tr>
              <td className="text-danger text-center" colSpan="5">
                <b>VIOLATION OBSERVED, IF ANY</b>
              </td>
            </tr>
            <tr>
              <td>Deviation to Plan</td>
              <td>No</td>
              <td>If yes</td>
              <td colSpan="2">NA</td>
            </tr>
            <tr>
              <td>Demolition Risk</td>
              <td>No</td>
              <td>If yes</td>
              <td colSpan="2">NA</td>
            </tr>
            <tr>
              <td>Encroachment of Land</td>
              <td>No</td>
              <td>If yes</td>
              <td colSpan="2">NA</td>
            </tr>
            <tr>
              <td className="text-danger text-center" colSpan="5">
                <b>VALUATION</b>
              </td>
            </tr>
            <tr>
              <td rowSpan="3">Land area (Sq. ft)</td>
              <td>Document</td>
              <td colSpan="3">900</td>
            </tr>
            <tr>
              <td>Plan</td>
              <td colSpan="3">0</td>
            </tr>
            <tr>
              <td>Site</td>
              <td colSpan="3">900</td>
            </tr>
            <tr>
              <td rowSpan="3">Built Up Area (Proposed)</td>
              <td>GF</td>
              <td colSpan="3">500</td>
            </tr>
            <tr>
              <td>FF</td>
              <td colSpan="3">0</td>
            </tr>
            <tr>
              <td>SF</td>
              <td colSpan="3">0</td>
            </tr>
            <tr>
              <td>Land Area considered for Valuation</td>
              <td colSpan="2">Deed / ATS</td>
              <td colSpan="2">900</td>
            </tr>
            <tr>
              <td>Land Rate considered per sq. Ft.</td>
              <td colSpan="4">300</td>
            </tr>
            <tr>
              <td>Total Land Valuation</td>
              <td colSpan="4">270000</td>
            </tr>
            <tr>
              <td>Construction Area considered for Valuation</td>
              <td colSpan="2">Plan</td>
              <td colSpan="2">500</td>
            </tr>
            <tr>
              <td>Construction Rate considered per sq. Ft</td>
              <td>BUA</td>
              <td colSpan="3">1200</td>
            </tr>
            <tr>
              <td>Total Construction Valuation</td>
              <td colSpan="4">600000</td>
            </tr>
            <tr>
              <td>Fair Market Value / Total Value of the unit after completion</td>
              <td colSpan="4">870000</td>
            </tr>
            <tr>
              <td>Valuation at Present Stage</td>
              <td colSpan="4">390000</td>
            </tr>
            <tr>
              <td>Valuation as per Govt. Guideline</td>
              <td colSpan="4">112</td>
            </tr>
          </tbody>
        </table>

        {/* ====== TABLE 9: OBSERVATIONS ====== */}
        <table cellSpacing="0" cellPadding="0">
          <tbody>
            <tr>
              <td className="text-danger text-center" colSpan="5">
                <b>OBSERVATION AND REMARKS</b>
              </td>
            </tr>
            <tr>
              <td id="catching" colSpan="5" rowSpan="2">
                1. GIVEN XEROX COPY CO-OWNERSHIP DEED IN FAVOUR OF
                MR.JEEVAN LAL S/O MR.GHISILAL AND SMT.MAMTA W/O MR.JEEVAN
                LAL<br/>
                2. DURING PROPERTY VISIT MR.PHOOL SINGH JI MET AT THE
                PROPERTY WHO IS CUSTOMER CONTACT NO. 9200182821. IT WAS
                CLEARLY EXPLAINED TO HIM THAT THE PROPERTY VISIT IS BEING
                DONE FOR VALUATION PURPOSE IN RELATION WITH LOAN PROPOSAL.<br/>
                3. RATE HAS BEEN CONFIRM FORM MARKET ENQUIRY.<br/>
                4. PROPERTY IS SITUATED AT SURROUNDING AREA OF LOCALITY IS
                RESIDENTIAL CUM AGRICULTURE ZONING SURROUNDING AREA
                DEVELOPMENT IS 40%.<br/>
                5. AT SITE PROPERTY IS OPEN AND GF UNDER CONSTRUCTION
                PREMISES WHERE PLINTH WORK DONE.<br/>
                6. CONST COST CONSIDER AFTER COMPLETION OF WORK.<br/>
                <span className="font-boldi">
                  7. PROPERTY IS IDENTIFIED BY FOUR SIDE BOUNDARIES OF GIVEN
                  CO-OWNERSHIP DEED AND PRIVATE KEY LOCATION PLAN WHICH IS
                  DRAWN BY ARCHITECT.
                </span><br/>
                8.AT SITE AREA OF UNDER CONSTRUCTION IS 15 X 30 = 450 SQFT
                AND OPEN AREA IS 15 X 30 = 450 SQFT.<br/>
                9. AS PER CO-OWNERSHIP DEED AND AS PER SITE LAND AREA IS
                30 X 30 = 900 SQFT.<br/>
                <span className="font-boldi">
                  10.OBTAIN COPY OF ARCHITECT MAP GF – 500 SQFT.
                </span><br/>
                11.AS PER DEED LAND USES IS RESIDENTIAL.<br/>
                12. SUGGEST TO CREDIT TEAM TO BE CHECK PROPER OWNERSHIP
                DOCUMENT PRIOR DISBURSEMENT.<br/>
                13. VALUER IS NOT RESPONSIBLE FOR ANY LEGAL DISPUTE.
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HFFCValuationReport;
