import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const DefaultPhoneInput = ({ value, onChange }: { value?: any, onChange?: any }) => {
    const handlePhoneChange = (phoneValue: any) => {
        onChange(phoneValue);
    }

    return (
        <div className='default-input with-icon'>
            <label htmlFor="">Phone</label>
            <div className="input-container">
                <div className="country-icon">
                    <PhoneInput
                        className="flag-border-checkout"
                        defaultCountry="IN"
                        value={value}
                        onChange={handlePhoneChange}
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