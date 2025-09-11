import React from 'react';

const ShubhamHfc = () => {
  return (
    <div id='radio' className="property-valuation-report">
      <table cellSpacing="0" cellPadding="0">
        <colgroup>
          <col width="159" />
          <col width="211" />
          <col width="225" />
          <col width="251" />
          {[...Array(8)].map((_, i) => (
            <col key={i} width="64" />
          ))}
        </colgroup>
        <tbody>
          <tr>
            <td colSpan="2" width="370"><a name="RANGE!A1:D116">Application Details</a></td>
            <td width="225">Date of Report</td>
            <td  className='font-boldi' width="251">29.05.2024</td>
          </tr>
          <tr>
            <td width="159">Application Number</td>
            <td width="211">APPL05348418</td>
            <td>Branch</td>
            <td  className='font-boldi'>JABALPUR</td>
          </tr>
          <tr>
            <td width="159">Name of Applicant</td>
            <td colSpan="3" width="687">SALMAN HUSAIN,NIYAZ AHAMAD</td>
          </tr>
          <tr>
            <td width="159">Property Owner Name as per legal documents</td>
            <td colSpan="3" width="687">MR SALMAN HUSSAIN S/O MR NIYAZ AHMED</td>
          </tr>
          <tr>
            <td width="159">Loan Type/Product</td>
            <td colSpan="3" width="687">HL READY PURCHASE</td>
          </tr>
          <tr>
            <td width="159">Documents Provided</td>
            <td colSpan="3">LINK SALE DEED, ATS, KHASRA</td>
          </tr>
          <tr>
            <td width="159">Contact Person name &amp; No.</td>
            <td colSpan="3" width="687">SALMAN HUSAIN,NIYAZ AHAMAD</td>
          </tr>
          <tr>
            <td width="159">Person met at site</td>
            <td colSpan="3" width="687">SALMAN HUSSAIN<br />
              CONT-7828798734</td>
          </tr>
          <tr>
            <td width="159">Property Address as per Site</td>
            <td colSpan="3" width="687">PROPERTY AT PART OF KH.NO.    412/342/1/1, PH.KATHONDA, RNM , MOUJA KATHONDA , DADA THANTHANPAL WARD NO.    72, TEHSIL ADHARTAL DIST. JABALPUR M.P.-482004</td>
          </tr>
          <tr>
            <td width="159">Property Address as per legal documents</td>
            <td colSpan="3" width="687">PROPERTY AT PART OF KH.NO. 412/342/1/1, PH.KATHONDA, RNM , MOUJA    KATHONDA , DADA THANTHANPAL WARD NO. 72, TEHSIL ADHARTAL DIST. JABALPUR    M.P.-482004</td>
          </tr>
          <tr>
            <td width="159">Landmark</td>
            <td colSpan="3">INDIAN OIL PETROL PUMP</td>
          </tr>
          <tr>
            <td width="159">Address Matching</td>
            <td><span className='font-boldi'> Yes</span> /No</td>
            <td>Jurisdiction/ Local    Municipal body</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td width="159">Geographical Coordinates</td>
            <td>23.214250, 79.930833</td>
            <td>Geo Tag (Urban/Rural)</td>
            <td>URBAN</td>
          </tr>
          <tr>
            <td width="159">Property holding type</td>
            <td><span className='font-boldi'>Freehold</span>/Leasehold</td>
            <td>Marketability</td>
            <td>Poor / <span className='font-boldi'>Average</span>  / Good</td>
          </tr>
          <tr>
            <td width="159">Type of the property</td>
            <td colSpan="3">Flat / <span className='font-boldi'> Independent house</span>    / Commercial building/ Commercial unit / Industrial / Plot</td>
          </tr>
          <tr>
            <td width="159">Occupancy status</td>
            <td></td>
            <td width="225">Development of    Surroundings</td>
            <td className='font-boldi'>45%</td>
          </tr>
          <tr>
            <td width="159">Name of Tenants if any</td>
            <td width="211">SORP / SOCP / Rented / Vacant / UC    /Mixed</td>
            <td width="225">Number    of Units in Building</td>
            <td className='font-boldi' width="251">1</td>
          </tr>
          <tr>
            <td width="159">Third Party Check</td>
            <td width="211">YES/NO</td>
            <td>Occupancy Percentage    in Building</td>
            <td className='font-boldi' width="251">100%</td>
          </tr>
          <tr>
            <td colSpan="4" width="846">Schedule of the property</td>
          </tr>
          <tr>
            <td className='font-boldi' colSpan="2" width="370">As Per Legal Documents (DEED     / AGREEMENT)</td>
            <td colSpan="2">As Per Site Visit</td>
          </tr>
          <tr>
            <td width="159">EAST</td>
            <td width="211">PROPERTY    OF PAHARIYA JI</td>
            <td>EAST</td>
            <td width="251">PROPERTY    OF PAHARIYA JI</td>
          </tr>
          <tr>
            <td width="159">WEST</td>
            <td width="211">SIDE    ROAD</td>
            <td>WEST</td>
            <td width="251">SIDE    ROAD</td>
          </tr>
          <tr>
            <td width="159">NORTH</td>
            <td width="211">BLOCK    NO. 05</td>
            <td>NORTH</td>
            <td width="251">BLOCK    NO. 05</td>
          </tr>
          <tr>
            <td width="159">SOUTH</td>
            <td width="211">PLOT    NO. 04 / HOUSE</td>
            <td>SOUTH</td>
            <td width="251">PLOT    NO. 04 (HOUSE OF SAHU JI)</td>
          </tr>
          <tr>
            <td width="159">Boundaries matching</td>
            <td><span className='font-boldi'>Yes</span>/No</td>
            <td>Property Identified</td>
            <td className='font-boldi'>YES</td>
          </tr>
          <tr>
            <td width="159">Access Road Width</td>
            <td className='font-boldi'>MORE THAN 10 FT</td>
            <td>Road Type</td>
            <td>CC/<span className='font-boldi'>Kutchaa</span>    etc</td>
          </tr>
          <tr>
            <td width="159">Construction Quality</td>
            <td>Good/<span className='font-boldi'> Average</span>/ Poor</td>
            <td>Type of Construction</td>
            <td><span className='font-boldi'>RCC</span>    / Loadbearing</td>
          </tr>
          <tr>
            <td colSpan="4" width="846">Stage of     Construction </td>
          </tr>
          <tr>
            <td width="159">Floors</td>
            <td width="211">Approved</td>
            <td width="225">Actual/Proposed</td>
            <td width="251">Remarks    about Wing/Block etc</td>
          </tr>
          <tr>
            <td width="159">No Of Basement</td>
            <td width="211">0</td>
            <td width="225">0</td>
            <td className='font-boldi' rowSpan="4" width="251">G.F. HOUSE</td>
          </tr>
          <tr>
            <td width="159">No of Ground/Stilt/Parking</td>
            <td width="211">0</td>
            <td width="225">1</td>
          </tr>
          <tr>
            <td width="159">No Of Upper floors</td>
            <td width="211">0</td>
            <td width="225">0</td>
          </tr>
          <tr>
            <td width="159">Total</td>
            <td width="211">0</td>
            <td width="225" align="left" valign="top">
              <img width="218" height="229" src="IDFC Bank_clip_image002.png" alt="Construction image" />
              <table cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td width="225">1</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr className='font-boldi'>
            <td width="159">Stage of Construction</td>
            <td width="211">Alloted<br />
              %  For  stage of construction</td>
            <td width="225">Actual    Stage of construction as per Site obseravtion</td>
            <td width="251">No    Of Floors Completed</td>
          </tr>
          <tr>
            <td width="159">Plinth</td>
            <td width="211">25%</td>
            <td width="225">25.00%</td>
            <td width="251">1</td>
          </tr>
          <tr>
            <td width="159">Brick Work</td>
            <td width="211">15%</td>
            <td width="225">15.00%</td>
            <td width="251">1</td>
          </tr>
          <tr>
            <td width="159">RCC/Slab Completion</td>
            <td width="211">20%</td>
            <td width="225">20.00%</td>
            <td width="251">1</td>
          </tr>
          <tr>
            <td width="159">Inside/Outside Plaster</td>
            <td width="211">10%</td>
            <td width="225">10.00%</td>
            <td width="251">1</td>
          </tr>
          <tr>
            <td width="159">Flooring</td>
            <td width="211">10%</td>
            <td width="225">10.00%</td>
            <td width="251">1</td>
          </tr>
          <tr>
            <td width="159">Electrification</td>
            <td width="211">10%</td>
            <td width="225">10.00%</td>
            <td width="251">1</td>
          </tr>
          <tr>
            <td width="159">Woodwork/Painting etc</td>
            <td width="211">10%</td>
            <td width="225">10.00%</td>
            <td width="251">1</td>
          </tr>
          <tr>
            <td width="159">Stage of construction</td>
            <td width="211">100%</td>
            <td width="225">100.00%</td>
            <td width="251">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="4" width="846">Area Details</td>
          </tr>
          <tr>
            <td width="159">Plot Area details</td>
            <td>As Per legal    documents</td>
            <td>As per Plan</td>
            <td>As per Site vist</td>
          </tr>
          <tr>
            <td width="159">East to west</td>
            <td className='font-boldi'>50</td>
            <td className='font-boldi'>0</td>
            <td className='font-boldi'>50</td>
          </tr>
          <tr>
            <td width="159">North to South</td>
            <td className='font-boldi'>15</td>
            <td className='font-boldi'>0</td>
            <td className='font-boldi'>15</td>
          </tr>
          <tr>
            <td width="159">Total Plot area in Sq Ft</td>
            <td className='font-boldi'>750</td>
            <td className='font-boldi'>0</td>
            <td className='font-boldi'>750</td>
          </tr>
          <tr>
            <td width="159">Built up area details</td>
            <td width="211">As    Per legal documents</td>
            <td>As per Site vist</td>
            <td width="251">As    per Plan/Permissible</td>
          </tr>
          <tr>
            <td width="159">Ground floor</td>
            <td className='font-boldi'>0</td>
            <td className='font-boldi'>750</td>
            <td className='font-boldi'>0</td>
          </tr>
          <tr>
            <td width="159">First floor</td>
            <td className='font-boldi'>0</td>
            <td className='font-boldi'>0</td>
            <td className='font-boldi'>0</td>
          </tr>
          <tr>
            <td width="159">Second floor etc</td>
            <td className='font-boldi'>0</td>
            <td className='font-boldi'>0</td>
            <td className='font-boldi'>0</td>
          </tr>
          <tr>
            <td width="159">Total Built up area in Sq Ft</td>
            <td className='font-boldi'>0</td>
            <td className='font-boldi'>750</td>
            <td className='font-boldi'>0</td>
          </tr>
          <tr>
            <td width="159">% Completed</td>
            <td>100%</td>
            <td>% Recommended as per    policy</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>Current age of    Property</td>
            <td>4</td>
            <td>Residual Age</td>
            <td>46</td>
          </tr>
          <tr>
            <td width="159">Carpet Area details</td>
            <td>600</td>
            <td rowSpan="2">SBUA Details</td>
            <td rowSpan="2">0</td>
          </tr>
          <tr>
            <td>Built Up area    details</td>
            <td>750</td>
          </tr>
          <tr>
            <td width="159">Risk of demolition</td>
            <td>High / Medium / Low</td>
            <td>No. of lifts</td>
            <td>NA</td>
          </tr>
          <tr>
            <td colSpan="4" width="846">Value Details</td>
          </tr>
          <tr>
            <td width="159">Item</td>
            <td>Area Details in Sq Ft</td>
            <td>Rate Per Sq Ft</td>
            <td>Total Value</td>
          </tr>
          <tr>
            <td width="159">(A)Land/Plot Area</td>
            <td>750</td>
            <td>1500</td>
            <td>1125000</td>
          </tr>
          <tr>
            <td width="159">(B)Total Built Up Area/SBUA</td>
            <td>750</td>
            <td>1300</td>
            <td>975000</td>
          </tr>
          <tr>
            <td width="159">(C)Depreciation </td>
            <td className='font-boldi'>0</td>
            <td className='font-boldi'>0</td>
            <td className='font-boldi'>0</td>
          </tr>
          <tr>
            <td colSpan="2" width="370">Estimate    submitted for renovation / Construction</td>
            <td colSpan="2">0</td>
          </tr>
          <tr>
            <td colSpan="2" width="370">Car    Parking Nos/Amenities/Other</td>
            <td colSpan="2">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="2">Final Market Value    (A)+(B)-(C).</td>
            <td colSpan="2">2100000</td>
          </tr>
          <tr>
            <td colSpan="2" width="370">Final Market Value as on date (If UC) as per stage of    construction</td>
            <td colSpan="2">2100000</td>
          </tr>
          <tr>
            <td colSpan="2" width="370">Realizable Value</td>
            <td colSpan="2">1680000</td>
          </tr>
          <tr>
            <td className='font-boldi' colSpan="4" width="846">Govt. value/Circle rate</td>
          </tr>
          <tr>
            <td width="159">Item</td>
            <td>Area Details in Sq Ft</td>
            <td>Rate Per Sq Ft</td>
            <td>Total Value</td>
          </tr>
          <tr>
            <td width="159">Land/Plot Area</td>
            <td>750</td>
            <td>856</td>
            <td className='font-boldi'>642000</td>
          </tr>
          <tr>
            <td width="159">Total Built Up Area/SBUA</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td className='font-boldi'>0</td>
          </tr>
          <tr>
            <td colSpan="3" width="595">Total    Govt. Value</td>
            <td>642000</td>
          </tr>
          <tr>
            <td colSpan="4" width="846">Additional checks</td>
          </tr>
          <tr>
            <td className='font-boldi' width="159">Location/Zone</td>
            <td className='font-boldi'>Residential</td>
            <td>Sewer provision</td>
            <td className='font-boldi'>Yes/No</td>
          </tr>
          <tr>
            <td width="159">Distance from city center in Kms</td>
            <td className='font-boldi'>3 Km</td>
            <td width="225">Sewer    line connected to main sewer</td>
            <td className='font-boldi'>Yes/No</td>
          </tr>
          <tr>
            <td width="159">Distance from corporation limits in Kms/Bus stop in case where    there is no Municipal body</td>
            <td className='font-boldi'>2 Km</td>
            <td width="225">Any    demolition threat in future development/ expansion</td>
            <td className='font-boldi'>Yes/No</td>
          </tr>
          <tr>
            <td width="159">Electricity</td>
            <td className='font-boldi'>Available/Not    Available</td>
            <td>Electricity    Distributor</td>
            <td className='font-boldi'>Govt/Semi    Govt/Private</td>
          </tr>
          <tr>
            <td width="159">Water supply</td>
            <td className='font-boldi'>Available/Not    Available</td>
            <td>Water Distributor</td>
            <td className='font-boldi'>Govt/Self/Boring    water</td>
          </tr>
          <tr>
            <td colSpan="4" width="846">NDMA PARAMETERS</td>
          </tr>
          <tr>
            <td width="159">NATURE OF BUILDING/WING</td>
            <td className='font-boldi'>RESIDENTIAL</td>
            <td>SHAPE OF BUILDING</td>
            <td className='font-boldi'>REGULAR</td>
          </tr>
          <tr>
            <td  width="159">CONCRETE GRADE</td>
            <td className='font-boldi'>AS PER NORMS</td>
            <td>ROOF TYPE</td>
            <td className='font-boldi'>FLAT</td>
          </tr>
          <tr>
            <td width="159">SOIL STRATA</td>
            <td className='font-boldi'>AS PER NORMS</td>
            <td>SEISMIC ZONE</td>
            <td className='font-boldi'>Zone 3</td>
          </tr>
          <tr>
            <td width="159">PLAN ASPECT RATIO</td>
            <td className='font-boldi'>AS PER NORMS</td>
            <td width="225">SOIL    SLOPE VULNERABLE TO LANDSLIDE</td>
            <td className='font-boldi'>No</td>
          </tr>
          <tr>
            <td width="159">STRUCTURAL SYSTEM</td>
            <td className='font-boldi'>Regular Frame</td>
            <td>TYPE OF MASONARY</td>
            <td className='font-boldi'>BRICK MASONARY</td>
          </tr>
          <tr>
            <td width="159">SOIL LIQUEFIABLE</td>
            <td className='font-boldi'>Yes</td>
            <td>STEEL GRADE</td>
            <td className='font-boldi'>AS PER NORMS</td>
          </tr>
          <tr>
            <td width="159">FLOOD PRONE AREA</td>
            <td className='font-boldi'>No</td>
            <td>CYCLONE ZONE- WIND    SPEED (M/S)</td>
            <td className='font-boldi'>-</td>
          </tr>
          <tr>
            <td width="159">STRUCTURE TYPE</td>
            <td className='font-boldi'>RCC</td>
            <td>ENVIRONMENT EXPOSURE    CONDITION</td>
            <td className='font-boldi'>AS PER NORMS</td>
          </tr>
          <tr>
            <td width="159">FOOTING TYPE</td>
            <td className='font-boldi'>FOOTING</td>
            <td>EXPANSION JOINT    AVAILABLE</td>
            <td className='font-boldi'>Yes</td>
          </tr>
          <tr>
            <td width="159">SOIL TYPE</td>
            <td className='font-boldi'>Soft</td>
            <td>MORTAR TYPE</td>
            <td className='font-boldi'>Cement</td>
          </tr>
          <tr>
            <td width="159">FIRE EXIT</td>
            <td className='font-boldi'>No</td>
            <td>COSTAL REGULATORY    ZONE</td>
            <td className='font-boldi'>NA</td>
          </tr>
          <tr>
            <td width="159">GROUND SLOPE MORE THAN 20%</td>
            <td className='font-boldi'>No</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className='font-boldi' colSpan="4" width="846">Remarks/Deviation/Obsevation</td>
          </tr>
          <tr>
            <td id='catching' colSpan="4" width="846">
              <img width="191" height="211" src="IDFC Bank_clip_image004.png" alt="Property image" />
              <p>1. GIVEN XEROX COPY OF SALE DEED    IN FAVOUR OF MR SALMAN HUSSAIN S/O MR NIYAZ AHMED.</p>
              <p>2. DURING PROPERTY VISIT MR. SALMAN HUSSAIN JI WAS MET AT THE PROPERTY HE    IS CUSTOMER CONTACT</p>
              <p>NO. 7828798734. IT WAS CLEARLY EXPLAINED TO HIM/HER THAT THE PROPERTY VISIT    IS BEING</p>
              <p>DONE FOR VALUATION PURPOSE IN RELATION WITH LOAN PROPOSAL.</p>
              <p>3. RATE HAS BEEN CONFIRM FROM LOCAL MARKET ENQUIRY.</p>
              <p>4. PROPERTY IS G.F. RESIDENTIAL HOUSE WHICH IS OCCUPIED BY CUSTOMER AT    SITE.</p>
              <p>5. PROPERTY IS SITUATED AT SURROUNDING AREA OF LOCALITY    IS RESIDENTIAL ZONING.</p>
              <p>6 PROPERTY IS IDENTIFIED BY FOUR SIDE BOUNDARIES OF GIVEN SALE ATS AND    LOCAL ENQUIRY AT SITE.</p>
              <p className='font-boldi'>7. PTR, BUILDING PERMISSION AND MAP NOT OBTAIN. SAME SHOULD BE TAKEN PRIOR    FUNDING.</p>
              <p>8. SUGGEST TO CREDIT TEAM TO BE CHECK PROPER OWNERSHIP DOCUMENT PRIOR</p>
              <p>DISBURSEMENT.</p>
            </td>
          </tr>
          <tr>
            <td width="159">I hereby declare that:</td>
            <td colSpan="3">&nbsp;</td>
          </tr>
          <tr>
            <td id='catching' colSpan="4" width="846">
              <p>•The final valuation has been concluded basis comparative market valuation    approach and rates are cross-verified with the rates prevalent in the nearby    localities.</p>
              <p>•We have no direct/indirect interest in the property valued.</p>
              <p>• The information furnished in the report is true and correct to the best    of my knowledge.</p>
              <p>• In Our View The Work Being Done For Construction/Extension/Improvement    In Dwelling Unit Does Not Endanger The Resident In The Dwelling Unit And Also    The Structure Of The Building Is Suitable For The Aforesaid Work In The    Dwelling Unit</p>
            </td>
          </tr>
          <tr>
            <td width="159">Date:-</td>
            <td className='font-boldi'>29.05.2024</td>
            <td colSpan="2">For Seal with Signature</td>
          </tr>
          <tr>
            <td width="159">Place</td>
            <td className='font-boldi'>JABALPUR</td>
            <td colSpan="2">RTM Sign</td>
          </tr>
          <tr>
            <td colSpan="2" width="370">Technical Manager Name &amp; Emp    ID</td>
            <td colSpan="2">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="4" width="846">Google Map/Route Map</td>
          </tr>
          <tr>
            <td colSpan="2">Geographical Coordinates</td>
            <td className='font-boldi' colSpan="2" width="476">23.214250, 79.930833</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShubhamHfc;