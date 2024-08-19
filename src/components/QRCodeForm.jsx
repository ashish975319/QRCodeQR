// import QRCode from "qrcode.react";
// import React, { useState } from "react";

// const QRCodeForm = () => {
//   const [details, setDetails] = useState({
//     name: "",
//     landline: "",
//     mobile: "",
//     email: "",
//     website: "",
//     address1: "",
//     address2: "",
//     address3: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [qrValue, setQrValue] = useState("");
//   const [qrImageUrl, setQrImageUrl] = useState("");

//   const validate = () => {
//     const newErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const mobileRegex = /^\d{10}$/;
//     const landlineRegex = /^\d{10}$/; // Adjust regex if landline numbers have a different format

//     if (!details.name.trim()) newErrors.name = "Name is required.";
//     if (!landlineRegex.test(details.landline))
//       newErrors.landline = "Invalid landline number. It should be 10 digits.";
//     if (!mobileRegex.test(details.mobile))
//       newErrors.mobile = "Invalid mobile number. It should be 10 digits.";
//     if (!emailRegex.test(details.email))
//       newErrors.email = "Invalid email address.";
//     if (!details.address1.trim()) newErrors.address1 = "Address1 is required.";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       const formattedDetails = `Name: ${details.name}\nLandline: ${details.landline}\nMobile: ${details.mobile}\nEmail: ${details.email}\nWebsite: ${details.website}\nAddress1: ${details.address1}\nAddress2: ${details.address2}\nAddress3: ${details.address3}`;
//       const qrUrl = `${
//         window.location.origin
//       }/scanned-data?data=${encodeURIComponent(formattedDetails)}`;
//       setQrValue(qrUrl);

//       // Convert QR code to base64 data URL
//       setTimeout(() => {
//         const canvas = document.querySelector("#qrcode canvas");
//         if (canvas) {
//           const qrImageUrl = canvas.toDataURL("image/png");
//           setQrImageUrl(qrImageUrl);
//         }
//       }, 100);
//     }
//   };

//   const downloadQRCode = () => {
//     const canvas = document.querySelector("#qrcode canvas");
//     if (canvas) {
//       const image = canvas.toDataURL("image/png");
//       const link = document.createElement("a");
//       link.href = image;
//       link.download = "qrcode.png";
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } else {
//       console.error("Canvas element not found.");
//     }
//   };

//   return (
//     <div className="container mx-auto p-6 max-w-lg">
//       <h3 className="text-2xl font-bold text-center text-blue-700 mb-6">
//         QR Profile Generator
//       </h3>
//       {!qrValue ? (
//         <form
//           method="post"
//           className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
//           onSubmit={handleSubmit}
//         >
//           <div className="space-y-4">
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-gray-700 font-semibold"
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={details.name}
//                 onChange={handleChange}
//                 className={`border p-3 w-full rounded-md focus:outline-none focus:ring-2 ${
//                   errors.name
//                     ? "border-red-500 focus:ring-red-500"
//                     : "border-gray-300 focus:ring-blue-500"
//                 }`}
//               />
//               {errors.name && (
//                 <p className="text-red-500 text-sm">{errors.name}</p>
//               )}
//             </div>
//             <div>
//               <label
//                 htmlFor="landline"
//                 className="block text-gray-700 font-semibold"
//               >
//                 Landline Number
//               </label>
//               <input
//                 type="text"
//                 id="landline"
//                 name="landline"
//                 value={details.landline}
//                 onChange={handleChange}
//                 className={`border p-3 w-full rounded-md focus:outline-none focus:ring-2 ${
//                   errors.landline
//                     ? "border-red-500 focus:ring-red-500"
//                     : "border-gray-300 focus:ring-blue-500"
//                 }`}
//               />
//               {errors.landline && (
//                 <p className="text-red-500 text-sm">{errors.landline}</p>
//               )}
//             </div>
//             <div>
//               <label
//                 htmlFor="mobile"
//                 className="block text-gray-700 font-semibold"
//               >
//                 Mobile Number
//               </label>
//               <input
//                 type="text"
//                 id="mobile"
//                 name="mobile"
//                 value={details.mobile}
//                 onChange={handleChange}
//                 className={`border p-3 w-full rounded-md focus:outline-none focus:ring-2 ${
//                   errors.mobile
//                     ? "border-red-500 focus:ring-red-500"
//                     : "border-gray-300 focus:ring-blue-500"
//                 }`}
//               />
//               {errors.mobile && (
//                 <p className="text-red-500 text-sm">{errors.mobile}</p>
//               )}
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-gray-700 font-semibold"
//               >
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={details.email}
//                 onChange={handleChange}
//                 className={`border p-3 w-full rounded-md focus:outline-none focus:ring-2 ${
//                   errors.email
//                     ? "border-red-500 focus:ring-red-500"
//                     : "border-gray-300 focus:ring-blue-500"
//                 }`}
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm">{errors.email}</p>
//               )}
//             </div>
//             <div>
//               <label
//                 htmlFor="website"
//                 className="block text-gray-700 font-semibold"
//               >
//                 Website
//               </label>
//               <input
//                 type="url"
//                 id="website"
//                 name="website"
//                 value={details.website}
//                 onChange={handleChange}
//                 className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="address1"
//                 className="block text-gray-700 font-semibold"
//               >
//                 Address1
//               </label>
//               <textarea
//                 id="address1"
//                 name="address1"
//                 value={details.address1}
//                 onChange={handleChange}
//                 className={`border p-3 w-full rounded-md focus:outline-none focus:ring-2 ${
//                   errors.address1
//                     ? "border-red-500 focus:ring-red-500"
//                     : "border-gray-300 focus:ring-blue-500"
//                 }`}
//               ></textarea>
//               {errors.address1 && (
//                 <p className="text-red-500 text-sm">{errors.address1}</p>
//               )}
//             </div>
//             <div>
//               <label
//                 htmlFor="address2"
//                 className="block text-gray-700 font-semibold"
//               >
//                 Address2
//               </label>
//               <textarea
//                 id="address2"
//                 name="address2"
//                 value={details.address2}
//                 onChange={handleChange}
//                 className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500"
//               ></textarea>
//             </div>
//             <div>
//               <label
//                 htmlFor="address3"
//                 className="block text-gray-700 font-semibold"
//               >
//                 Address3
//               </label>
//               <textarea
//                 id="address3"
//                 name="address3"
//                 value={details.address3}
//                 onChange={handleChange}
//                 className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500"
//               ></textarea>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 mt-4"
//           >
//             Generate QR Code
//           </button>
//         </form>
//       ) : (
//         <div className="flex flex-col items-center mt-8">
//           <div id="qrcode" className="mb-4">
//             <QRCode value={qrValue} size={180} level="H" includeMargin={true} />
//           </div>
//           <button
//             onClick={downloadQRCode}
//             className="bg-green-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-600 transition duration-300"
//           >
//             Download QR Code
//           </button>
//           {/* Uncomment this section to enable social sharing buttons */}
//           {/* <div className="flex justify-center space-x-4 mt-3">
//             <FacebookShareButton
//               url={qrImageUrl}
//               quote={"Check out my QR code!"}
//               className="text-gray-600 hover:text-gray-800 transition duration-300"
//             >
//               <FacebookIcon size={32} round />
//             </FacebookShareButton>
//             <TwitterShareButton
//               url={qrImageUrl}
//               title={"Check out my QR code!"}
//               className="text-gray-600 hover:text-gray-800 transition duration-300"
//             >
//               <TwitterIcon size={32} round />
//             </TwitterShareButton>
//             <WhatsappShareButton
//               url={qrImageUrl}
//               title={"Check out my QR code!"}
//               className="text-gray-600 hover:text-gray-800 transition duration-300"
//             >
//               <WhatsappIcon size={32} round />
//             </WhatsappShareButton>
//           </div> */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default QRCodeForm;

import QRCode from "qrcode.react";
import React, { useState } from "react";

const QRCodeForm = () => {
  const [details, setDetails] = useState({
    name: "",
    landline: "",
    mobile: "",
    email: "",
    website: "",
    address: "", // Updated field name
  });
  const [errors, setErrors] = useState({});
  const [qrValue, setQrValue] = useState("");
  const [qrImageUrl, setQrImageUrl] = useState("");

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;

    if (!details.name.trim()) newErrors.name = "Name is required.";
    if (!mobileRegex.test(details.mobile))
      newErrors.mobile = "Invalid mobile number. It should be 10 digits.";
    if (!emailRegex.test(details.email))
      newErrors.email = "Invalid email address.";
    if (!details.address.trim()) newErrors.address = "Address is required."; // Updated field name

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      let formattedDetails = `Name: ${details.name}\nMobile: ${details.mobile}\nEmail: ${details.email}\nWebsite: ${details.website}\nAddress: ${details.address}`; // Updated field name

      if (details.landline.trim()) {
        formattedDetails += `\nLandline: ${details.landline}`;
      }

      const qrUrl = `${
        window.location.origin
      }/scanned-data?data=${encodeURIComponent(formattedDetails)}`;
      setQrValue(qrUrl);

      // Convert QR code to base64 data URL
      setTimeout(() => {
        const canvas = document.querySelector("#qrcode canvas");
        if (canvas) {
          const qrImageUrl = canvas.toDataURL("image/png");
          setQrImageUrl(qrImageUrl);
        }
      }, 100);
    }
  };

  const downloadQRCode = () => {
    const canvas = document.querySelector("#qrcode canvas");
    if (canvas) {
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "qrcode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error("Canvas element not found.");
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <h3 className="text-2xl font-bold text-center text-blue-700 mb-6">
        QR Profile Generator
      </h3>
      {!qrValue ? (
        <form
          method="post"
          className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={details.name}
                onChange={handleChange}
                className={`border p-3 w-full rounded-md focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="landline"
                className="block text-gray-700 font-semibold"
              >
                Landline Number
              </label>
              <input
                type="text"
                id="landline"
                name="landline"
                value={details.landline}
                onChange={handleChange}
                className={`border p-3 w-full rounded-md focus:outline-none focus:ring-2 ${
                  errors.landline
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.landline && (
                <p className="text-red-500 text-sm">{errors.landline}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block text-gray-700 font-semibold"
              >
                Mobile Number
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={details.mobile}
                onChange={handleChange}
                className={`border p-3 w-full rounded-md focus:outline-none focus:ring-2 ${
                  errors.mobile
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={details.email}
                onChange={handleChange}
                className={`border p-3 w-full rounded-md focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="website"
                className="block text-gray-700 font-semibold"
              >
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={details.website}
                onChange={handleChange}
                className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-gray-700 font-semibold"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={details.address}
                onChange={handleChange}
                className={`border p-3 w-full rounded-md focus:outline-none focus:ring-2 ${
                  errors.address
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              ></textarea>
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 mt-4"
          >
            Generate QR Code
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center mt-8">
          <div id="qrcode" className="mb-4">
            <QRCode value={qrValue} size={180} level="H" includeMargin={true} />
          </div>
          <button
            onClick={downloadQRCode}
            className="bg-green-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-600 transition duration-300"
          >
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
};

export default QRCodeForm;
