import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import PropTypes from "prop-types";
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Helvetica",
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 50,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  institutionName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoText: {
    fontSize: 12,
    marginBottom: 8,
  },
  note: {
    fontSize: 10,
    marginTop: 30,
    textAlign: "center",
  },
  author: {
    fontSize: 8,
    marginTop: 40,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 10,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "30%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  cell: {
    margin: 5,
    fontSize: 10,
  },
});

const Recibo = ({ confirmData }) => {
  console.log(confirmData);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.institutionName}>Entrega Food</Text>
        <View>
          {confirmData.idFood && (
            <Text style={styles.infoText}>id: {confirmData.idFood}</Text>
          )}
          {confirmData.distance && (
            <Text style={styles.infoText}>
              Distancia: {(confirmData.distance / 1000).toFixed(2)} KM
            </Text>
          )}
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.cell}>Produto</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.cell}>Quantidade</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.cell}>Preco Unitario(mt)</Text>
              </View>
            </View>

            {confirmData.cart.map((item) => (
              <View key={item._id} style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.cell}>{item.name}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.cell}>{item.quantity}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.cell}>{item.price}.00MT</Text>
                </View>
              </View>
            ))}
          </View>
          {confirmData.total && (
            <Text style={styles.infoText}>
              Total a pagar:{confirmData.total}.00MT
            </Text>
          )}
        </View>
        {/* Nota informativa */}
        <Text style={styles.note}>
          Explorar a vastidão da existência humana é como desbravar um oceano de
          emoções e experiências. de você.
        </Text>
        <Text style={styles.author}>Atenciosamente, EntregaFood</Text>
      </Page>
    </Document>
  );
};
Recibo.propTypes = {
  confirmData: PropTypes.object,
};
export default Recibo;
