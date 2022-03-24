// import xml2csv for easy file conversion.
const xml2csv = require("@wmfs/xml2csv");

// invoke xml2csv with an object and enter the values for each key given.
xml2csv(
    {
        //xml path is the location of the .xml file that you wish to convert/extract data from.
        xmlPath: './facility.xml',
         //csvPath is the destination you want your new file to go. 
        csvPath: './facility.csv',
        //rootXMLElement is the .xml name of the entity that all of the properties desired are in reference to.
        rootXMLElement: 'T_Facility',
        /*
        headerMap is a 2d array of each table column in the final .csv file. each subarray has 3 indices.
        The first index is the property name as written in the .xml file.
        The second index is the desired property name in the soon-to-be .csv file.
        The third index (optional) is the data type expected. Possible choices are date, integer or string.
        */
        headerMap: [
            ['Facility_ID', 'property_id', 'integer'],
            ['Facility_Account_Number', 'account_number', 'integer'],
            ['Facility_Name', 'name', 'string'],
            ['Service_Address_Street_Name', 'address1', 'string'],
            ['Service_Address_City', 'city', 'string'],
            ['Service_Address_State', 'state_prov', 'string'],
            ['Service_Address_Zip_Code', 'postal_code', 'integer'],
            ['Facility_Contact_Mgr_ID', 'primary_contact_id', 'integer']
        ]
    },
    // Logs error message (Null if no error.) and an expanded version of the result (successful result returns an entry count.)
    (error, result) => console.log(`ERROR: ${error}, RESULT: ${JSON.stringify(result)}`)
);
// After all of your values are entered, to create your .csv file, open your terminal and type node index.js