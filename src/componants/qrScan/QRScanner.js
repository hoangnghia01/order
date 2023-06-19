// import { useEffect, useState } from "react";

// import { useHistory } from "react-router-dom";

// export default function QRScanner() {
//   const [qrData, setQrData] = useState("");
//   const history = useHistory();

//   useEffect(() => {
//     // Check if table number is already saved in localStorage
//     const tableNumber = localStorage.getItem("tableNumber");
//     if (tableNumber) {
//       // Redirect to home page if table number exists
//       history.push("/home");
//     }
//   }, [history]);

//   const handleScan = (data) => {
//     if (data) {
//       setQrData(data);
//       // Save table number to localStorage
//       localStorage.setItem("tableNumber", data);
//       // Redirect to home page
//       history.push("/home");
//     }
//   };

//   const handleError = (err) => {
//     console.error(err);
//   };

//   return (
//     <div>
//       <h4>Quét mã QR để thêm số bàn</h4>
//       <QrReader
//         delay={300}
//         onError={handleError}
//         onScan={handleScan}
//         style={{ width: "100%" }}
//       />
//     </div>
//   );
// }
