import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { Document, Page, Text, Svg, Line, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFF",
    color: "black",
  },
  section1: {
    margin: 10,
    padding: 10,
    textAlign: 'center',
    fontSize: 14,
  },
  section2: {
    margin: 10,
    padding: 10,
    fontSize: 12,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  textBold: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  viewer: {
    width: window.innerWidth * 0.8, //the pdf viewer will take up 80% 
    height: window.innerHeight * 0.8,
  },
});

function PurchaseOrderPrintPage(props) {
  const renderView = () => {
    const { record } = props;
    const purchaseOrderEntries = record.entries;

    return (
        <PDFViewer style={styles.viewer}>
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section1}>
                <Text style={styles.textTitle}>Hello World</Text>
                <Svg height="2" width="500"><Line x1="0" y1="0" x2="500" y2="0" strokeWidth={2} stroke="rgb(0,0,0)" /></Svg>
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
