// "use client"

import React from 'react';
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const DefaultPhoneInput = ({
    value,
    onChange
}: {
    value?: string;
    onChange: (phoneValue: string | undefined) => void;
}) => {
    return (
        <div className='default-input with-icon'>
            <label htmlFor="">Phone</label>
            <div className="input-container">
                <div className="country-icon">
                    <PhoneInput
                        className="flag-border-checkout"
                        defaultCountry="IN"
                        value={value}
                        onChange={onChange}
                        placeholder="Mobile Number"
                        name="contact_number"
                        id=""
                    />
                </div>
            </div>
        </div>
    )
}

export default DefaultPhoneInput;

// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";

// const DefaultPhoneInput = ({ value, onChange }: { value?: string, onChange?: (phoneValue: string) => void }) => {
//     const handlePhoneChange = (phoneValue: string) => {
//         onChange?.(phoneValue);
//     }

//     return (
//         <div className='default-input with-icon'>
//             <label htmlFor="">Phone</label>
//             <div className="input-container">
//                 <div className="country-icon">
//                     <PhoneInput
//                         className="flag-border-checkout"
//                         defaultCountry="IN"
//                         value={value}
//                         onChange={handlePhoneChange}
//                         placeholder="Mobile Number"
//                         name="contact_number"
//                         id=""
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default DefaultPhoneInput;