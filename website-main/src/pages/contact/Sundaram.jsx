import React from 'react';

const Sundaram = () => {
  return (
    <div id='table' className="property-details-report">
      <table cellSpacing="0" cellPadding="0">
        <colgroup>
          <col width="64" span="3" />
        </colgroup>
        <tbody>
          {/* <tr>
            <td width="35"></td>
            <td width="533"></td>
            <td width="445"></td>
          </tr> */}
          {/* <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr> */}
          {/* <tr>
            <td width="35">&nbsp;</td>
            <td width="533">&nbsp;</td>
            <td width="445">&nbsp;</td>
          </tr> */}
          <tr>
            <td className='font-boldi' width="35">S. No</td>
            <td className='font-boldi' width="533">Description</td>
            <td className='font-boldi' width="445">Inputs</td>
          </tr>
          <tr>
            <td width="35">&nbsp;</td>
            <td rowSpan="2" width="533">Customer name</td>
            <td className='font-boldi' rowSpan="2" width="445">Rukmani Raman Singh Thakur</td>
          </tr>
          <tr>
            <td align="right" width="35">1</td>
          </tr>
          <tr>
            <td rowSpan="2" align="right" width="35">2</td>
            <td rowSpan="2" width="533">Requested date</td>
            <td width="445">&nbsp;</td>
          </tr>
          <tr>
            <td width="445">Feb 28, 2025,</td>
          </tr>
          <tr>
            <td rowSpan="2" align="right" width="35">3</td>
            <td rowSpan="2" width="533">Date of Visit</td>
            <td rowSpan="2" width="445">Feb 28, 2025,</td>
          </tr>
          <tr></tr>
          <tr>
            <td rowSpan="2" align="right" width="35">4</td>
            <td rowSpan="2" width="533">Property address</td>
            <td rowSpan="2" width="445">Property at plot no.r.v.-133-a is land part of khasra no.93-94/4/1,93-94/5/1…..93-94/2/3/6 is situated at indus garden,gram-bawadiya kalan,ward no.52,tehsil-huzur,dist-bhopal,mp,462016</td>
          </tr>
          <tr></tr>
          <tr>
            <td rowSpan="2" align="right" width="35">5</td>
            <td rowSpan="2" width="533">Product</td>
            <td className='font-boldi' rowSpan="2" width="445">HL BT+ TOP UP</td>
          </tr>
          <tr></tr>
          <tr>
            <td rowSpan="2" align="right" width="35">6</td>
            <td rowSpan="2" width="533">Type of loan</td>
            <td className='font-boldi' rowSpan="2" width="445">HL BT+ TOP UP</td>
          </tr>
          <tr></tr>
          <tr>
            <td rowSpan="2" align="right" width="35">7</td>
            <td rowSpan="2" width="533">Land Area</td>
            <td rowSpan="2" width="445">20.3 * 45 = 910 sqft</td>
          </tr>
          <tr></tr>
          <tr>
            <td rowSpan="2" align="right" width="35">8</td>
            <td rowSpan="2" width="533">Tentative Land rate</td>
            <td rowSpan="2" width="445">Rs.6000-6500 per sqft</td>
          </tr>
          <tr></tr>
          <tr>
            <td rowSpan="2" align="right" width="35">9</td>
            <td rowSpan="2" width="533">Built-up area as per plan/FAR</td>
            <td width="445">G.F- 540.04SQFT</td>
          </tr>
          <tr>
            <td width="445">F.F-489.68SQFT</td>
          </tr>
          <tr>
            <td rowSpan="2" align="right" width="35">10</td>
            <td rowSpan="2" width="533">Building value as per plan/FAR</td>
            <td rowSpan="2" width="445">&nbsp;</td>
          </tr>
          <tr></tr>
          <tr>
            <td rowSpan="2" align="right" width="35">11</td>
            <td rowSpan="2" width="533">Built-up area as per Site</td>
            <td width="445">G.F-700 SQFT</td>
          </tr>
          <tr>
            <td width="445">F.F-500 SQFT</td>
          </tr>
          <tr>
            <td rowSpan="2" align="right" width="35">12</td>
            <td rowSpan="2" width="533">Building value as per site</td>
            <td rowSpan="2" width="445">1300/-SQFT</td>
          </tr>
          <tr></tr>
          <tr>
            <td rowSpan="2" align="right" width="35">13</td>
            <td rowSpan="2" width="533">Total property value as per plan/FAR</td>
            <td rowSpan="2" width="445">1441608 RS</td>
          </tr>
          <tr></tr>
          <tr>
            <td rowSpan="2" align="right" width="35">14</td>
            <td rowSpan="2" width="533">Total property value as per Site</td>
            <td rowSpan="2" width="445">LAND VALUE-5915000+ BUILT-UP-1441608 = 7356608RS</td>
          </tr>
          <tr></tr>
          <tr>
            <td rowSpan="12" align="right" width="35">15</td>
            <td rowSpan="12" width="533">Remarks</td>
            <td width="445">1. GIVEN XEROX COPY OF SALE DEED IN FAVOUR OF MR.RUKMANI RAMAN SINGH THAKUR S/O LT MR.G.S THAKUR AND SMT.MANJULA THAKUR W/O MR.R.R.S THAKUR.</td>
          </tr>
          <tr>
            <td width="445">2. DURING PROPERTY VISIT MR.RAMAN JI MET AT THE PROPERTY WHO IS CUSTOMER AND HIS CONTACT NO. 9575695869. IT WAS CLEARLY EXPLAINED TO HIM THAT THE PROPERTY VISIT IS BEING DONE FOR VALUATION PURPOSE IN RELATION WITH LOAN PROPOSAL.</td>
          </tr>
          <tr>
            <td width="445">3. RATE HAS BEEN CONFIRM FORM MARKET ENQUIRY.</td>
          </tr>
          <tr>
            <td width="445">4. PROPERTY IS SITUATED AT SURROUNDING AREA OF LOCALITY IS RESI ZONING</td>
          </tr>
          <tr>
            <td width="445">ZONING SURROUNDING AREA DEVELOPMENT IS 70%.</td>
          </tr>
          <tr>
            <td width="445">5. AT SITE PROPERTY IS G+1 RESIDENTIAL DUPLEX WHICH IS OCCUPIED BY 1-TENNENT.</td>
          </tr>
          <tr>
            <td width="445">6. PROPERTY IS IDENTIFIED BY FOUR SIDE BOUNDARIES OF GIVEN SALE DEED AND LOCAL ENQUIRY.</td>
          </tr>
          <tr>
            <td width="445">7. AS PER ACTUAL BUILT UP AREA OF G.F. IS 700 SQFT, F.F. IS 500 SQFT.</td>
          </tr>
          <tr>
            <td width="445">8. OBTAINED G+1 BUILDING MAP ON TOTAL LAND AREA 987 SQFT WHERE BUILT UP AREA OF GF IS 540 SQFT, FF IS 489 SQFT SAME IS CONSIDER IN REPORT AND WHICH IS APPROVED BY MUNICIPAL CORPORATION BHOPAL.MP. BUILDING PERMISSION NO IS NOT CLEARLY VISIBLE.</td>
          </tr>
          <tr>
            <td width="445">9. PTR IS NOT OBTAINED.</td>
          </tr>
          <tr>
            <td width="445">10. AS PER DEED LAND USES IS RESIDENTIAL.</td>
          </tr>
          <tr>
            <td width="445">&nbsp;</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="3">Lat Long: 23.176056, 77.435556</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Sundaram;