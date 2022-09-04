import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { Document, Page, Text, Svg, Line, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFF",
    color: "black",
    flex: 1,
    padding: 10,
  },
  section1: {
    margin: 10,
    padding: 10,
    textAlign: 'center',
    align: 'center',
    fontSize: 14,
  },
  section2: {
    margin: 10,
    padding: 10,
    fontSize: 12,
    align: 'center',
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  textBold: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  textNormal: {
    fontSize: 12,
    align: 'left',
    padding: 2, 
  },
  viewer: {
    width: window.innerWidth * 0.8, //the pdf viewer will take up 80% 
    height: window.innerHeight * 0.8,
  },

  tableColHeaderStyle1: {
    width: "50%",
    borderStyle: "solid",
    borderColor: "#000",
    borderBottomColor: "#000",
    borderWidth: 0,
    borderLeftWidth: 0,
    backgroundColor: "#bdbdbd"
  },
  tableColHeaderStyle2: {
    width: "10%",
    borderStyle: "solid",
    borderColor: "#000",
    borderBottomColor: "#000",
    borderWidth: 1,
    borderLeftWidth: 0,
    backgroundColor: "#bdbdbd"
  },
  tableColHeaderStyle3: {
    width: "50%",
    borderStyle: "solid",
    borderColor: "#000",
    borderBottomColor: "#000",
    borderWidth: 1,
    borderLeftWidth: 0,
    backgroundColor: "#bdbdbd"
  },
  tableColStyle1: {
    width: "50%",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableColStyle2: {
    width: "10%",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableColStyle3: {
    width: "50%",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    align: "left",
  },
  tableCellHeaderStyle: {
    textAlign: "center",
    margin: 4,
    fontSize: 12,
    fontWeight: "bold"
  },
  tableCellStyle: {
    textAlign: "center",
    margin: 5,
    fontSize: 10,
  },
  tableCellStyle4: {
    textAlign: "left",
    margin: 5,
    fontSize: 10,
  },
  tableColStyle4: {
    width: "50%",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    align: "right",
  },
  tableColStyle5: {
    width: "40%",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    align: "left",
  },
  tableCellRStyle: {
    textAlign: "right",
    margin: 5,
    fontSize: 10,
  },
  tableCellLStyle: {
    textAlign: "left",
    margin: 5,
    fontSize: 10,
  },
  tableRowStyle: {
    flexDirection: "row"
  },
  tableStyle: {
    padding: 10,
    width: "530px",
  },
  tableStyle2: {
    width: "530px",
    textAlign: "left",
  }
  
});

const createTableHeader = () => {
  return (
    <View style={styles.tableRowStyle} fixed>

      <View style={styles.tableColHeaderStyle3}>
        <Text style={styles.tableCellHeaderStyle}>Order</Text>
      </View>

      <View style={styles.tableColHeaderStyle2}>
        <Text style={styles.tableCellHeaderStyle}>Qty</Text>
      </View>

      <View style={styles.tableColHeaderStyle2}>
        <Text style={styles.tableCellHeaderStyle}>Price</Text>
      </View>
      
      <View style={styles.tableColHeaderStyle2}>
      <Text style={styles.tableCellHeaderStyle}>Cost</Text>
      </View>

      <View style={styles.tableColHeaderStyle2}>
        <Text style={styles.tableCellHeaderStyle}>C-GST</Text>
      </View>

      <View style={styles.tableColHeaderStyle2}>
        <Text style={styles.tableCellHeaderStyle}>S-GST</Text>
      </View>
    </View>
  );
};

const createTableRow = (entry) => {
  return (
    <View style={styles.tableRowStyle}>

      <View style={styles.tableColStyle3}>
        <Text style={styles.tableCellStyle}>{entry.medicineId}</Text>
      </View>

      <View style={styles.tableColStyle2}>
        <Text style={styles.tableCellRStyle}>{entry.unitCost}</Text>
      </View>

      <View style={styles.tableColStyle2}>
        <Text style={styles.tableCellRStyle}>{entry.quantity}</Text>
      </View>
      
      <View style={styles.tableColStyle2}>
        <Text style={styles.tableCellRStyle}>{entry.totalCost}</Text>
      </View>

      <View style={styles.tableColStyle2}>
        <Text style={styles.tableCellRStyle}>{entry.centralGST}</Text>
      </View>

      <View style={styles.tableColStyle2}>
        <Text style={styles.tableCellRStyle}>{entry.stateGST}</Text>
      </View>

    </View>
  );
};

const createTitle = (record) => {
  return (
    <View style={styles.tableRowStyle}>

      <View style={styles.tableColStyle1}>
       <Text style={styles.textBold}>From: {record.tenantId}</Text>
       <Text style={styles.textNormal}>PO Number:  {record.purchaseOrderNumber}</Text>
       <Text style={styles.textNormal}>Created: {record.purchaseOrderNumber}</Text>
       <Text style={styles.textNormal}>Net Amount: Rs. {record.netAmount}</Text>
      </View>
      <View style={styles.tableColStyle1}>
          <Text style={styles.textBold}>For:{record.vendor.vendorName}</Text>
          <Text style={styles.textNormal}>Address: {record.vendor.address}</Text>
          <Text style={styles.textNormal}>Phone: {record.vendor.phone}</Text>
          <Text style={styles.textNormal}>Email: {record.vendor.email}</Text>
          <Text style={styles.textNormal}>TIN: {record.vendor.tin}</Text>
          <Text style={styles.textNormal}>DL Number: {record.vendor.dlNumber}</Text>
      </View>
    </View>
  );
};

const createPurchaseOrderExtras = (field, value) => {
  return(
    <View style={styles.tableRowStyle}>
      <View style={styles.tableColStyle1}>
       <Text style={styles.textBold}></Text>
      </View>

      <View style={styles.tableColStyle5}>
        <Text style={styles.tableCellLStyle}>{field}</Text>
      </View>

      <View style={styles.tableColStyle4}>
        <Text style={styles.tableCellRStyle}>Rs {value}</Text>
      </View>

    </View>
  );
};

function PurchaseOrderPrintPage(props) {
  const renderView = () => {
    const { record } = props;
    const purchaseOrderEntries = record.entries;

    return (
        <PDFViewer style={styles.viewer}>
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section1}>
                <View style={styles.tableStyle2}>
                  {createTitle(record)}
                </View>
                <Svg height="2" width="530"><Line x1="0" y1="0" x2="530" y2="0" strokeWidth={2} stroke="rgb(0,0,0)" /></Svg>
                <View style={styles.tableStyle}>
                  {createTableHeader()}
                  {purchaseOrderEntries.map((entry) => createTableRow(entry))}
                </View>
                <View style={styles.tableStyle}>
                  {createPurchaseOrderExtras(' ', ' ')}
                  {createPurchaseOrderExtras('Total cost of Entries', record.sumEntriesCost)}
                  {createPurchaseOrderExtras('Total GST', record.totalGST)}
                  {createPurchaseOrderExtras('Freight Amount', record.freightAmount)}
                  {createPurchaseOrderExtras('WriteOff Amount', record.writeOffAmount)}
                  {createPurchaseOrderExtras('Discount', record.discount)}
                  {createPurchaseOrderExtras('Final Cost', record.netAmount)}
               </View>
              </View>
            </Page>
          </Document>
        </PDFViewer>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}
export default PurchaseOrderPrintPage;
