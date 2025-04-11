import React, { useState } from "react";
import Select from "react-select"; // Import React-Select
import "./DownLoadForm.css";
import { FaShieldAlt } from "react-icons/fa";

const countryPhoneLengths = {
  CH: 0,
  US: 10,
  IN: 10,
  UK: 11,
  AU: 9,
  CA: 10,
  AF: 9,
  AL: 9,
  DZ: 9,
  AS: 7,
  AD: 6,
  AO: 9,
  AI: 7,
  AG: 7,
  AR: 10,
  AM: 8,
  AW: 7,
  AT: 10,
  AZ: 9,
  BS: 7,
  BH: 8,
  BD: 10,
  BB: 7,
  BY: 9,
  BE: 9,
  BZ: 7,
  BJ: 8,
  BM: 7,
  BT: 8,
  BO: 8,
  BA: 8,
  BW: 7,
  BR: 11,
  IO: 7,
  VG: 7,
  BN: 7,
  BG: 9,
  BF: 8,
  BI: 8,
  KH: 9,
  CM: 9,
  CV: 7,
  KY: 7,
  CF: 8,
  TD: 8,
  CL: 9,
  CN: 11,
  CX: 9,
  CC: 9,
  CO: 10,
  KM: 7,
  CK: 5,
  CR: 8,
  HR: 9,
  CU: 8,
  CW: 7,
  CY: 8,
  CZ: 9,
  CD: 9,
  DK: 8,
  DJ: 6,
  DM: 7,
  DO: 7,
  TL: 7,
  EC: 9,
  EG: 10,
  SV: 8,
  GQ: 9,
  ER: 7,
  EE: 8,
  ET: 9,
  FK: 5,
  FO: 6,
  FJ: 7,
  FI: 10,
  FR: 9,
  PF: 6,
  GA: 7,
  GM: 7,
  // Add more countries and their phone number lengths here
};

  


// Options for the country dropdown
const countryOptions = [
  { value: "CH", label: "Select Country" },
  { value: "US", label: "United States" },
  { value: "IN", label: "India" },
  { value: "UK", label: "United Kingdom" },
  { value: "AU", label: "Australia" },
  { value: "CA", label: "Canada" },
  { value: "AF", label: "Afghanistan" },
  { value: "AL", label: "Albania" },
  { value: "DZ", label: "Algeria" },
  { value: "AS", label: "  American Samoa" },
  { value: "AD", label: "  Andorra" },
  { value: "AO", label: "  Angola" },
  { value: "AI", label: "  Anguilla" },
  { value: "AG", label: "   Antigua and Barbuda" },
  { value: "AR", label: "   Argentina" },
  { value: "AM", label: "   Armenia" },
  { value: "AW", label: "  Aruba" },
  { value: "AT", label: "  Austria" },
  { value: "AZ", label: " Azerbaijan" },
  { value: "BS", label: "  Bahamas" },
  { value: "BH", label: "  Bahrain" },
  { value: "BD", label: "  Bangladesh" },
  { value: "BB", label: "   Barbados" },
  { value: "BY", label: " Belarus" },
  { value: "BE", label: "  Belgium" },
  { value: "BZ", label: "  Belize" },
  { value: "BJ", label: "  Benin" },
  { value: "BM", label: "  Bermuda" },
  { value: "BT", label: "  Bhutan" },
  { value: "BO", label: "  Bolivia" },
  { value: "BA", label: "  Bosnia and Herzegovina" },
  { value: "BW", label: "  Botswana" },
  { value: "BR", label: "  Brazil" },
  { value: "IO", label: "  British Indian Ocean Territory" },
  { value: "VG", label: "  British Virgin Islands" },
  { value: "BN", label: "  Brunei" },
  { value: "BG", label: " Bulgaria" },
  { value: "BF", label: "  Burkina Faso" },
  { value: "BI", label: "  Burundi" },
  { value: "KH", label: " Cambodia" },
  { value: "CM", label: " Cameroon" },
  { value: "CV", label: "  Cape Verde" },
  { value: "KY", label: "   Cayman Islands" },
  { value: "CF", label: "   Central African Republic" },
  { value: "TD", label: " Chad" },
  { value: "CL", label: "  Chile" },
  { value: "CN", label: " China" },
  { value: "CX", label: " Christmas Island" },
  { value: "CC", label: "  Cocos Islands" },
  { value: "CO", label: "  Colombia" },
  { value: "KM", label: "  Comoros" },
  { value: "CK", label: " Cook Islands" },
  { value: "CR", label: "  Costa Rica" },
  { value: "HR", label: "  Croatia" },
  { value: "CU", label: "  Cuba" },
  { value: "CW", label: "  Curaçao" },
  { value: "CY", label: "  Cyprus" },
  { value: "CZ", label: "  Czech Republic" },
  { value: "CD", label: "  Democratic Republic of the Congo" },
  { value: "DK", label: "  Denmark" },
  { value: "DJ", label: "  Djibouti" },
  { value: "DM", label: "  Dominica" },
  { value: "DO", label: "  Dominican Republic" },
  { value: "TL", label: "  East Timor" },
  { value: "EC", label: "  Ecuador" },
  { value: "EG", label: "  Egypt" },
  { value: "SV", label: "  El Salvador" },
  { value: "GQ", label: "  Equatorial Guinea" },
  { value: "ER", label: "  Eritrea" },
  { value: "EE", label: "  Estonia" },
  { value: "ET", label: " Ethiopia" },
  { value: "FK", label: "  Falkland Islands" },
  { value: "FO", label: "  Faroe Islands" },
  { value: "FJ", label: "  Fiji" },
  { value: "FI", label: " Finland" },
  { value: "FR", label: " France" },
  { value: "PF", label: " French Polynesia" },
  { value: "GA", label: "  Gabon" },
  { value: "GM", label: " Gambia" } 
  // Add more countries here
];

const customStyles = {
  control: (base) => ({
 ...base,
 backgroundColor: "rgb(86,95,169)", // Dropdown background color
 borderColor: "black",
 color: "black", // Dropdown text color
 "&:hover": {
borderColor: "darkblue", // Border color on hover
 },
  }),
  singleValue: (base) => ({
 ...base,
 color: "white", // Selected value text color
  }),
  menu: (base) => ({
 ...base,
 backgroundColor: "white", // Dropdown menu background color
  }),
  option: (base, state) => ({
 ...base,
 backgroundColor: state.isFocused ? "darkblue" : "white", // Highlighted option background
 color: "black", // Options text color
 "&:hover": {
backgroundColor: "darkblue", // Option background on hover
color: "white", // Option text color on hover
 },
  }),
};

const DownloadForm = ({ whitepaperTitle, closeModal }) => {
  const [formData, setFormData] = useState({
 fullName: "",
 email: "",
 phone: "",
 organization: "",
 country: "CH", // Default country
  });

  const handleChange = (e) => {
 setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountryChange = (selectedOption) => {
 setFormData({ ...formData, country: selectedOption.value });
  };

  const handleSubmit = async (e) => {
 e.preventDefault();

 // Validate phone number length based on the selected country
 const phoneLength = countryPhoneLengths[formData.country];
 if (formData.phone.length !== phoneLength) {
alert(`Phone number must be exactly ${phoneLength} digits for the selected country.`);
return;
 }

 // Send user details to backend
 const response = await fetch("https://sapiencia.ai/api/submit-form.php", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ ...formData, whitepaperTitle }),
 });

 if (response.ok) {
alert("Thank you for submitting the form!");

// Download the whitepaper file
const fileUrl = `http://sapiencia.ai/whitepapers/${whitepaperTitle}.pdf`;
const link = document.createElement("a");
link.href = fileUrl;
link.setAttribute("download", `${whitepaperTitle}.pdf`);
document.body.appendChild(link);
link.click();
document.body.removeChild(link);

closeModal();
 } else {
alert("Error submitting form");
 }
  };

  return (
 <div className="modal-overlay">
<div className="modal">
  <FaShieldAlt className="modal-icon" />
  <h2 className="modal-title">Download {whitepaperTitle}</h2>
  <form onSubmit={handleSubmit}>
 <input
type="text"
name="fullName"
placeholder="Full Name"
required
onChange={handleChange}
 />
 <input
type="email"
name="email"
placeholder="Email Address"
required
onChange={handleChange}
 />
 {/* Searchable Country Dropdown */}
 <div className="label-selector">
 <Select
options={countryOptions}
defaultValue={countryOptions.find((option) => option.value === formData.country)}
onChange={handleCountryChange}
placeholder="Select Country"
styles={customStyles}
 />
 </div>
 <input
type="number"
name="phone"
placeholder="Phone Number"
required
onChange={handleChange}
 />
 <input
type="text"
name="organization"
placeholder="Organization"
required
onChange={handleChange}
 />
 <button type="submit">Download Whitepaper</button>
  </form>
</div>
 </div>
  );
};

export default DownloadForm;