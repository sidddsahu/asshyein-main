import React from 'react';
import ExcelHeader from '../../components/headers/ExcelHeader';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


export const Aditya = () => {

  const exportToExcel = async () => {
    toast.info('Preparing Excel file...', { autoClose: 2000 });

    try {
      const workbook = new ExcelJS.Workbook();
      workbook.creator = 'Aditya Birla Finance';
      workbook.created = new Date();
      workbook.modified = new Date();
      workbook.lastPrinted = new Date();

      const worksheet = workbook.addWorksheet('Valuation Report', {
        views: [{ showGridLines: true }],
        pageSetup: { paperSize: 9, orientation: 'landscape' }
      });

      // Define styles (as previously fixed)
      const styles = { /* ... your style definitions ... */ };

      const table = document.querySelector('.valuation-report table');
      if (!table) throw new Error('Table element not found');

      const mergedCells = new Set();
      const rowspanMap = new Map(); // Track rowspan continuations

      const rows = Array.from(table.querySelectorAll('tr'));

      for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        const row = rows[rowIndex];

        // Skip completely empty rows (but ensure we process rows with just whitespace)
        if (!row.textContent.trim() && row.children.length === 0) continue;

        const excelRow = worksheet.addRow([]);
        const cells = Array.from(row.querySelectorAll('td, th'));

        let excelColIndex = 1; // Track column position accounting for rowspans

        for (let cellIndex = 0; cellIndex < cells.length; cellIndex++) {
          const cell = cells[cellIndex];

          // Skip cells that are part of a rowspan from previous rows
          while (rowspanMap.has(excelColIndex)) {
            const { remainingRows, value, style } = rowspanMap.get(excelColIndex);
            if (remainingRows <= 1) {
              rowspanMap.delete(excelColIndex);
            } else {
              rowspanMap.set(excelColIndex, {
                remainingRows: remainingRows - 1,
                value,
                style
              });
            }
            excelColIndex++;
          }

          const cellContent = cell.textContent.trim();
          const excelCell = excelRow.getCell(excelColIndex);

          // Set cell value
          if (!isNaN(cellContent) && cellContent !== '') {
            excelCell.value = Number(cellContent);
            excelCell.numFmt = cellContent.includes('.') ? '0.00' : '0';
          } else {
            excelCell.value = cellContent || ' '; // Use space for empty cells
          }

          // Apply styles
          if (rowIndex === 0) {
            Object.assign(excelCell, styles.header);
          } else if (rowIndex === 1 || cell.querySelector('b')) {
            Object.assign(excelCell, styles.subHeader);
          } else if (cell.classList.contains('text-center')) {
            Object.assign(excelCell, styles.center);
          } else if (cell.id === 'catching') {
            Object.assign(excelCell, styles.justify);
          } else {
            Object.assign(excelCell, styles.default);
          }

          // Handle colspan
          const colspan = parseInt(cell.getAttribute('colspan') || '1');
          const rowspan = parseInt(cell.getAttribute('rowspan') || '1');

          if (colspan > 1 || rowspan > 1) {
            const mergeKey = `${excelRow.number},${excelColIndex}`;
            if (!mergedCells.has(mergeKey)) {
              worksheet.mergeCells(
                excelRow.number,
                excelColIndex,
                excelRow.number + rowspan - 1,
                excelColIndex + colspan - 1
              );

              // Mark all cells in merge range
              for (let r = excelRow.number; r < excelRow.number + rowspan; r++) {
                for (let c = excelColIndex; c < excelColIndex + colspan; c++) {
                  mergedCells.add(`${r},${c}`);
                }
              }
            }
          }

          // Handle rowspan continuation
          if (rowspan > 1) {
            for (let i = 1; i < rowspan; i++) {
              rowspanMap.set(excelColIndex + i - 1, {
                remainingRows: rowspan - 1,
                value: excelCell.value,
                style: excelCell.style
              });
            }
          }

          excelColIndex += colspan;
        }
      }

      // Auto-fit columns
      worksheet.columns.forEach(column => {
        let maxLength = 0;
        column.eachCell({ includeEmpty: true }, cell => {
          const cellLength = cell.value ? cell.value.toString().length : 0;
          maxLength = Math.max(maxLength, cellLength);
        });
        column.width = Math.min(Math.max(maxLength + 2, 10), 50);
      });

      // Add footer
      const footerRow = worksheet.addRow([]);
      footerRow.getCell(1).value = `Generated on ${new Date().toLocaleString()}`;
      footerRow.getCell(1).font = { italic: true };
      worksheet.mergeCells(worksheet.rowCount, 1, worksheet.rowCount, 5);

      // Generate and save
      toast.info('Generating Excel file...', { autoClose: 2000 });
      const buffer = await workbook.xlsx.writeBuffer();

      saveAs(
        new Blob([buffer], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        }),
        `Valuation_Report_${new Date().toISOString().slice(0, 10)}.xlsx`
      );

      toast.success('Excel file downloaded successfully!', { autoClose: 3000 });

    } catch (error) {
      console.error('Export error:', error);
      toast.error(`Export failed: ${error.message}`, { autoClose: 5000 });
    }
  };

  return (
    <div>
      <style>{`
        .valuation-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .export-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
            
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .export-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background-color: #1d6f42;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .export-button:hover {
          background-color: #165834;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .export-button:active {
          transform: translateY(0);
        }

        .export-hint {
          font-size: 14px;
          color: #6c757d;
        }

        .valuation-report {
          overflow-x: auto;
          background: white;
          border-radius: 8px;
          box-shadow: 0 0 20px rgba(0,0,0,0.05);
        }

        .valuation-report table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }

        .valuation-report td, .valuation-report th {
          padding: 8px 12px;
          border: 1px solid #dee2e6;
        }

        #catching {
          text-align: justify;
          line-height: 1.6;
        }
      `}</style>

      <ExcelHeader />
      <div className="export-controls">
        <button
          onClick={exportToExcel}
          className="export-button"
        >
          <i className="fas fa-file-excel"></i> Export to Excel
        </button>

        <div className="export-hint">
          <p>Click the button above to download the full valuation report in Excel format.</p>
        </div>
      </div>
<div className="valuation-report p-3">

      <table border="1"  cellSpacing="0" cellPadding="0">
        <colgroup>
          <col width="199" />
          <col width="194" />
          <col width="101" />
          <col width="117" />
          <col width="192" />
        </colgroup>
        <tbody>
          <tr>
            <td className='text-center' colSpan="5"><b>Aditya Birla Finance Limited Valuation Report</b></td>
          </tr>
          <tr>
            <td className='text-center'  colSpan="5"><b>Basic Details</b></td>
          </tr>
          <tr>
            <td>Name of the Valuer</td>
            <td className='text-center'  colSpan="4">MR.BHART SHARMA</td>
          </tr>
          <tr>
            <td>Name of the Client</td>
            <td width="194">MR. AMAN PATIDAR</td>
            <td>Initiation Date</td>
            <td colSpan="2">06.02.2025</td>
          </tr>
          <tr>
            <td>Vertical</td>
            <td>STSL+</td>
            <td>Visit Date</td>
            <td colSpan="2">06.02.2025</td>
          </tr>
          <tr>
            <td>Case Reference Number</td>
            <td>STSL00000054129</td>
            <td>Report Date</td>
            <td colSpan="2">06.02.2025</td>
          </tr>
          <tr>
            <td>Name of the Property Owner</td>
            <td colSpan="4" width="604">1.)MR.CHOGMAL PATIDAR S.O LT.MR.RAJARA PATIDAR ,2.) MR.AMAN PATIDAR S/O MR.SANTOSH PATIDAR , 3.) MR.ANMOL PATIDAR S/O MR.SANTOSH PATIDAR.</td>
          </tr>
          <tr>
            <td className='text-center'  colSpan="4"><b>Location Details</b></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Property Address as Per TRF</td>
            <td colSpan="4" width="604">PROPERTY IS PLOT NO.05(PART-1) AND PLOT NO. 05, IS LAND PART OF KHASRA NO.79,80,81,82,83/10/1/1K,(NEW KHASRA NO. 79/10/1/4(S),80,81,82,83/10/1/4), SITUATED AT GRAM-MISROD,WARD NO.52, TEHSIL-KOLAR,DIST-BHOPAL,MP,462047</td>
          </tr>
          <tr>
            <td>Property Address as Per Visit</td>
            <td colSpan="4" width="604">PROPERTY IS PLOT NO.05(PART-1) AND PLOT NO. 05, IS LAND PART OF KHASRA NO.79,80,81,82,83/10/1/1K,(NEW KHASRA NO. 79/10/1/4(S),80,81,82,83/10/1/4), SITUATED AT GRAM-MISROD,WARD NO.52, TEHSIL-KOLAR,DIST-BHOPAL,MP,462047</td>
          </tr>
          <tr>
            <td>Property Address as Per <br />
              &ldquo;Docs&rdquo; <br /></td>
            <td colSpan="4" width="604">PROPERTY IS PLOT NO.05(PART-1) AND PLOT NO. 05, IS LAND PART OF KHASRA NO.79,80,81,82,83/10/1/1K,(NEW KHASRA NO. 79/10/1/4(S),80,81,82,83/10/1/4), SITUATED AT GRAM-MISROD,WARD NO.52, TEHSIL-KOLAR,DIST-BHOPAL,MP,462047</td>
          </tr>
          <tr>
            <td>Main Locality</td>
            <td>MISROD</td>
            <td>Sub Locality</td>
            <td colSpan="2">MISROD ROAD</td>
          </tr>
          <tr>
            <td>Micro Location</td>
            <td>CORAL WOODS</td>
            <td>Landmark</td>
            <td colSpan="2">CORAL WOODS</td>
          </tr>
          <tr>
            <td>Latitude</td>
            <td>23.164204,</td>
            <td>Longitude</td>
            <td colSpan="2">77.464502</td>
          </tr>
          <tr>
            <td>Type of Property</td>
            <td>RESIDENTIAL</td>
            <td>Current Usage</td>
            <td colSpan="2">RESIDENTIAL</td>
          </tr>
          <tr>
            <td width="199">Has the Valuator Done Valuation for this property before?</td>
            <td>Yes/No</td>
            <td>If yes, when</td>
            <td>NA</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Property Type</td>
            <td   className='text-center'  colSpan="4">Residential//Commercial//Industrial//Institutional// Agriculture</td>
          </tr>
          <tr>
            <td>Property Sub Type</td>
            <td colSpan="4">HOUSE</td>
          </tr>
          <tr>
            <td>Locality</td>
            <td className='text-center'  width="194">Well Developed // Developing // Under Develop // Slum</td>
            <td width="101">Property Falling Within</td>
            <td colSpan="2" width="309">Municipal Corporation // Gram Panchayat // Town Planning Authority // Development Authority // Municipality</td>
          </tr>
          <tr>
            <td width="199">Occupancy Level of the <br />
              Surrounding <br /></td>
            <td colSpan="4" width="604">Densely Populated//Moderately Populated//Low Population density </td>
          </tr>
          <tr>
            <td width="199">Condition of the Site of the <br />
              Property <br /></td>
            <td colSpan="4" width="604">Well Developed//Developing//Under Developed</td>
          </tr>
          <tr>
            <td width="199">Distance to Railway/Metro <br />
              Station <br /></td>
            <td className='text-center'  colSpan="4" width="604">8 KM (RANIKAMLAPATI Railway station)</td>
          </tr>
          <tr>
            <td width="199">Distance to Bus Stop</td>
            <td colSpan="4" width="604">2 KM</td>
          </tr>
          <tr>
            <td width="199">Distance of Plot from Main <br />
              Road <br /></td>
            <td className='text-center'  colSpan="4" width="604">Not Applicable (Prop on Md Road) // Less than 200 m //200 to 500 m // above 500 m</td>
          </tr>
          <tr>
            <td width="199">Distance from City Centre</td>
            <td className='text-center'  colSpan="4" width="604">10 KMS</td>
          </tr>
          <tr>
            <td width="199">Distance from ABFL Branch</td>
            <td className='text-center'  colSpan="4" width="604">10 KMS</td>
          </tr>
          <tr>
            <td width="199">Width of the Approach Road</td>
            <td className='text-center'  colSpan="4" width="604">Width // Width is &gt;40 ft. // Width 20 to 40 ft. // Clear width&lt;10ft // Mud Road // Illegal Road (Without document)</td>
          </tr>
          <tr>
            <td width="199">Dimensions of the Property</td>
            <td width="194">NA</td>
            <td width="101">NA</td>
            <td width="117">Depth in Feet</td>
            <td width="192">NA</td>
          </tr>
          <tr>
            <td width="199">Physical Approach to the <br />
              Property <br /></td>
            <td className='text-center'  colSpan="3" width="412">Clear // Partially Clear // Not Clear</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td width="199">Legal Approach to the <br />
              Property <br /></td>
            <td colSpan="4" width="604">Clear // Partially Clear // Not Clear</td>
          </tr>
          <tr>
            <td colSpan="4" width="611">Any other features like board of other financier indicating mortgage, notice of Court/any authority which may affect the security</td>
            <td>YES / NO</td>
          </tr>
          <tr>
            <td className='text-center'  colSpan="5" width="803"><b>Property Details</b></td>
          </tr>
          <tr>
            <td width="199">Occupancy</td>
            <td width="194">Occupied</td>
            <td width="101">Occupied By</td>
            <td colSpan="2" width="309">self</td>
          </tr>
          <tr>
            <td width="199">Occupied Since</td>
            <td align="right" width="194">2024</td>
            <td className='text-center'  colSpan="2" width="218">Name of the <br />
              Occupant <br /></td>
            <td>AMAN PATIDAR</td>
          </tr>
          <tr>
            <td width="199">Property Demarcated</td>
            <td width="194">Yes // Partially // No</td>
            <td className='text-center'  colSpan="2" width="218">Property <br />
              Identification <br /></td>
            <td>YES / N</td>
          </tr>
          <tr>
            <td width="199">Identification through</td>
            <td className='text-center'  colSpan="4" width="604">LOCAL ENQUIRY.</td>
          </tr>
          <tr>
            <td width="199">Project Category</td>
            <td colSpan="2" width="295">A//B//C//D//A+ //Not Applicable</td>
            <td className='text-center'  width="117">Flat Type</td>
            <td width="192">Normal // Duplex // Not applicable</td>
          </tr>
          <tr>
            <td width="199">Flat Configuration</td>
            <td width="194">NA</td>
            <td colSpan="2" width="218">Property Holding <br /></td>
            <td>Freehold // Leasehold</td>
          </tr>
          <tr>
            <td width="199">Type of Structure</td>
            <td colSpan="2" width="295">RCC</td>
            <td width="117">Area of PLOT</td>
            <td>5000 SQFT</td>
          </tr>
          <tr>
            <td width="199">Total No of Floors</td>
            <td colSpan="2" width="295">G+2</td>
            <td width="117">Lift Facility</td>
            <td>YES / N</td>
          </tr>
          <tr>
            <td width="199">Amenities</td>
            <td width="194">Average // Excellent // Good // Low // NA</td>
            <td width="101">&nbsp;</td>
            <td width="117">Marketability</td>
            <td width="192">Average // Excellent // Good // Low</td>
          </tr>
          <tr>
            <td width="199">View of the Property</td>
            <td colSpan="2" width="295">NORMAL</td>
            <td width="117">Parking <br />
              Facility <br /></td>
            <td>YES / N</td>
          </tr>
          <tr>
            <td width="199">Quality of Construction</td>
            <td colSpan="2" width="295">Class A // Class B // Class C // Class D</td>
            <td width="117">Type of <br />
              Parking <br /></td>
            <td width="192">Open CP // Dependent CP // <br />
              Covered CP // Mechanical CP <br /></td>
          </tr>
          <tr>
            <td width="199">Shape of the Property</td>
            <td colSpan="2" width="295">Regular // Irregular</td>
            <td width="117">Placement of the Property</td>
            <td width="192">NE Facing Corner Plot // Corner <br />
              Plot // Intermittent Property //South Facing <br /></td>
          </tr>
          <tr>
            <td width="199">Exteriors of the Property</td>
            <td colSpan="2" width="295">Average // Poor // Excellent // Good // <br />
              Low <br /></td>
            <td width="117">Interiors of the <br />
              Property <br /></td>
            <td width="192">Average // Poor // Excellent // Good // Low</td>
          </tr>
          <tr>
            <td width="199">Age of the Property</td>
            <td align="right" width="194">1</td>
            <td width="101">&nbsp;</td>
            <td width="117">Residual Age</td>
            <td align="right" width="192">59</td>
          </tr>
          <tr>
            <td width="199">Source of age of Property</td>
            <td colSpan="4" width="604">COSTUMER</td>
          </tr>
          <tr>
            <td width="199">Maintenance of the Property</td>
            <td colSpan="2" width="295">Average // Excellent // Good // Low</td>
            <td width="117">Cautious <br />
              Location <br /></td>
            <td>NA</td>
          </tr>
          <tr>
            <td colSpan="5" width="803"><b>Accommodation/Unit Details </b></td>
          </tr>
          <tr>
            <td colSpan="5" width="803">Building</td>
          </tr>
          <tr>
            <td width="199">Ground Floor</td>
            <td colSpan="4" width="604">2R+2H+1K+3LB</td>
          </tr>
          <tr>
            <td width="199">FIRST FLOOR</td>
            <td colSpan="4" width="604">4R+1H+4LB</td>
          </tr>
          <tr>
            <td width="199">SECOND FLOOR</td>
            <td colSpan="4" width="604">1H</td>
          </tr>
          <tr>
            <td width="199">Sale Deed/allotment Letter</td>
            <td colSpan="2" width="295">Fully Available//Partially Available//Not <br />
              Available//Not Applicable <br /></td>
            <td width="117">Details</td>
            <td>NA</td>
          </tr>
          <tr>
            <td width="199">Sanctioned Plan</td>
            <td colSpan="2" width="295">Fully Available//Partially Available//Not <br />
              Available//Not Applicable <br /></td>
            <td width="117">Details</td>
            <td>NA</td>
          </tr>
          <tr>
            <td width="199">CC/OC</td>
            <td colSpan="2" width="295">Fully Available//Partially Available//Not <br />
              Available//Not Applicable <br /></td>
            <td width="117">Details</td>
            <td>NA</td>
          </tr>
          <tr>
            <td width="199">Agreement to Sale</td>
            <td colSpan="2" width="295">Fully Available//Partially Available//Not <br />
              Available//Not Applicable <br /></td>
            <td width="117">Details</td>
            <td>NA</td>
          </tr>
          <tr>
            <td width="199">Mutation/Possession Letter</td>
            <td colSpan="2" width="295">Fully Available//Partially Available//Not <br />
              Available//Not Applicable <br /></td>
            <td width="117">Details</td>
            <td>NA</td>
          </tr>
          <tr>
            <td width="199">Tax Receipt</td>
            <td colSpan="2" width="295">Fully Available//Partially Available//Not <br />
              Available//Not Applicable <br /></td>
            <td width="117">Details</td>
            <td>NA</td>
          </tr>
          <tr>
            <td width="199">Electricity Bill</td>
            <td colSpan="2" width="295">Fully Available//Partially Available//Not <br />
              Available//Not Applicable <br /></td>
            <td width="117">Details</td>
            <td>NA</td>
          </tr>
          <tr>
            <td width="199">Conversion</td>
            <td colSpan="2" width="295">Fully Available//Partially Available//Not <br />
              Available//Not Applicable <br /></td>
            <td width="117">Details</td>
            <td>NA</td>
          </tr>
          <tr>
            <td width="199">Built up area</td>
            <td width="194">As per Site</td>
            <td width="101">As per Plan/FAR</td>
            <td width="117">Deviations</td>
            <td>Remarks</td>
          </tr>
          <tr>
            <td width="199">Ground Floor</td>
            <td align="right" width="194">2600</td>
            <td width="101">&nbsp;</td>
            <td width="117">Yes // No</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td width="199">FIRST FLOOR</td>
            <td align="right" width="194">2600</td>
            <td width="101">&nbsp;</td>
            <td width="117">Yes // No</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td width="199">SECPND FLOOR</td>
            <td align="right" width="194">800</td>
            <td width="101">&nbsp;</td>
            <td width="117">&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td width="199">Total</td>
            <td align="right" width="194">6000</td>
            <td width="101">&nbsp;</td>
            <td width="117">Yes // No</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="5" width="803">Valuation</td>
          </tr>
          <tr>
            <td width="199">Detailing</td>
            <td width="194">Area in Sqft</td>
            <td colSpan="2" width="218">Rate per Sqft</td>
            <td>Value</td>
          </tr>
          <tr>
            <td width="199">Plot Area (in Deed)</td>
            <td>5000</td>
            <td colSpan="2" width="218">2400</td>
            <td align="right">12000000</td>
          </tr>
          <tr>
            <td width="199">Plot Area (as per physical)</td>
            <td>5000</td>
            <td colSpan="2" width="218">2400</td>
            <td align="right">12000000</td>
          </tr>
          <tr>
            <td width="199">Carpet Area (as per plan)</td>
            <td>0</td>
            <td colSpan="2" width="218">0</td>
            <td align="right">0</td>
          </tr>
          <tr>
            <td width="199">Carpet Area (as per measurement)</td>
            <td>0</td>
            <td colSpan="2" width="218">0</td>
            <td align="right">0</td>
          </tr>
          <tr>
            <td width="199">Built Up Area (as per Norms)</td>
            <td>&nbsp;</td>
            <td colSpan="2" width="218">0</td>
            <td align="right">0</td>
          </tr>
          <tr>
            <td width="199">Built Up Area (as per measurement)</td>
            <td>6000</td>
            <td colSpan="2" width="218">1500</td>
            <td align="right">9000000</td>
          </tr>
          <tr>
            <td width="199">Super Built-Up Area</td>
            <td>0</td>
            <td colSpan="2" width="218">0</td>
            <td align="right">0</td>
          </tr>
          <tr>
            <td width="199">Car Park</td>
            <td>0</td>
            <td colSpan="2" width="218">0</td>
            <td align="right">0</td>
          </tr>
          <tr>
            <td width="199">Amenities</td>
            <td>0</td>
            <td colSpan="2" width="218">0</td>
            <td align="right">0</td>
          </tr>
          <tr>
            <td colSpan="5" width="803"><b>Other Details</b></td>
          </tr>
          <tr>
            <td width="199">Setbacks</td>
            <td width="194">As per plan/ Bye laws</td>
            <td width="101">Actual at site</td>
            <td width="117">Deviation</td>
            <td width="192">Remarks, if any</td>
          </tr>
          <tr>
            <td width="199">Front</td>
            <td width="194">M</td>
            <td width="101">0 Ft</td>
            <td rowSpan="4" width="117">Usage Deviation</td>
            <td rowSpan="4">&nbsp;</td>
          </tr>
          <tr>
            <td width="199">Side1(Left)</td>
            <td width="194">M</td>
            <td width="101">0 Ft</td>
          </tr>
          <tr>
            <td width="199">Side2(Right)</td>
            <td width="194">M</td>
            <td width="101">0 Ft</td>
          </tr>
          <tr>
            <td width="199">Rear</td>
            <td width="194">M</td>
            <td width="101">0 Ft</td>
          </tr>
          <tr>
            <td width="199">Total Value</td>
            <td colSpan="4">21000000</td>
          </tr>
          <tr>
            <td width="199">Distress Value (80%)</td>
            <td colSpan="4">16800000</td>
          </tr>
          <tr>
            <td width="199">Insurance Value</td>
            <td colSpan="4">&nbsp;</td>
          </tr>
          <tr>
            <td width="199">Government Value</td>
            <td colSpan="4">&nbsp;</td>
          </tr>
          <tr>
            <td width="199">Percentage Completion</td>
            <td align="right">100%</td>
            <td colSpan="2">Percentage Recommendation</td>
            <td align="right">100%</td>
          </tr>
          <tr>
            <td colSpan="5"><b>Boundary Detailing</b></td>
          </tr>
          <tr>
            <td width="199">Detailing</td>
            <td><b>North</b></td>
            <td><b>South</b></td>
            <td><b>East</b></td>
            <td><b>West</b></td>
          </tr>
          <tr>
            <td width="199">As per docs.</td>
            <td width="194">HIMALAY RESIDENCY AND COLONY</td>
            <td width="101">ROAD</td>
            <td width="117">REMAINING LAND PART OF SELLER/ REMAINING LAND PART OF SELLER</td>
            <td width="192">PLOT NO.05/ OTHER PLOT</td>
          </tr>
          <tr>
            <td width="199">As per Actual</td>
            <td width="194">HIMALAY COLONY</td>
            <td width="101">ROAD</td>
            <td width="117">OPEN PLOT</td>
            <td width="192">OPEN PLOT</td>
          </tr>
          <tr>
            <td width="199">Boundary Matching</td>
            <td colSpan="4">NO</td>
          </tr>
          <tr>
            <td width="199"><b>Remarks:</b></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td id='catching' colSpan="5" rowSpan="3" width="803">1. GIVEN XEROX COPY OF TWO SALE DEED IN FAVOUR OF 1.)MR.CHOGMAL PATIDAR S.O LT.MR.RAJARA PATIDAR ,2.) MR.AMAN PATIDAR S/O MR.SANTOSH PATIDAR , 3.) MR.ANMOL PATIDAR S/O MR.SANTOSH PATIDAR.<br />
              2. DURING PROPERTY VISIT MR. AMAN JI WAS MET AT THE PROPERTY HE IS CUSTOMER HIS CONTACT NO. 7049804167.IT WAS CLEARLY EXPLAINED TO HIM/HER THAT THE PROPERTY VISIT IS BEING DONE FOR VALUATION PURPOSE IN RELATION WITH LOAN PROPOSAL.<br />
              3. RATE HAS BEEN CONFIRM FROM LOCAL MARKET ENQUIRY.<br />
              4. PROPERTY IS SITUATED AT SURROUNDING AREA OF LOCALITY IS RESIDENTIAL ZONING.<br />
              5. AT SITE PROPERTY IS G+2 RESIDENTIAL HOUSE WHICH IS OCCUPIED BY OWNER <br />
              6. OBTAIN T AND CP LAYOUT PLAN MEMO NO. BPLLP 8567/LP04/29 ON DATED 15.03.2022 PROPERTY IS IDENTIFIED BY T AND CP LAYOUT <br />
              7.AS PER SITE BUILT UP AREA OF GF IS 2600 SQFT , FF IS 2600 SQFT , SF IS 800 SQFT. TOTAL BUILT UP AREA OF G+2 IS 6000 SQFT. <br />
              8. AS PER BOTH DEED AND AT SITE LAND AREA OF THE PROPERTY IS 5000 SQFT. <br />
              9. BUILDING PERMISSION AND MAP NOT OBTAIN. SAME IS REQUIRED. <br />
              10. LATEST PTR REQUIRED. <br />
              11. AS PER DEED LAND USES IS RESIDENTIAL.<br />
              12. BUILT-UP IS TAKEN ACTUAL AT SITE <br />
              <br /></td>
          </tr>
          <tr> </tr>
          <tr> </tr>
          <tr>
            <td colSpan="2">Name of the Engineer visited</td>
            <td colSpan="3">ER.ARBAZ</td>
          </tr>
          <tr>
            <td colSpan="5">PHOTOGRAPHS OF PROPERTY</td>
          </tr>
          <tr>
            <td colSpan="2">Subject Property</td>
            <td colSpan="3">Subject Property</td>
          </tr>
        </tbody>
      </table>
    </div>





</div>

  );
};



export default Aditya;