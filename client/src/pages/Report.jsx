import { PDFViewer } from "@react-pdf/renderer";
import { useLocation } from "react-router-dom";
import Recibo from "../componects/Recibo";
const Report = () => {
  const location = useLocation();

  return (
    <>
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <Recibo confirmData={location.state.data} />
      </PDFViewer>
    </>
  );
};
export default Report;
