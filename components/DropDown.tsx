import { useFetchServicesTitle } from '@/Hooks/useFetchData';
import { useState } from 'react'
// import "../pages/globals.css"

const DropDown = ({ onSelectService }: { onSelectService: (service: string) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");

    // const categories = ['web development', 'application development', 'branding', 'ecommerce development', 'socialmedia marketing', 'search engine optimization', 'mobile app development', 'IT suppot'];

    const { services, error, isLoading } = useFetchServicesTitle()

    if (error || isLoading) {
        return <div>Something went wrong</div>
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    console.log("selected: ", selected)
    const handleSelected = (category: string) => {
        onSelectService(category)
        setSelected(category)
        toggleDropdown()
    }

    return (
        <div className="drop-down-section">
            <button onClick={toggleDropdown} >
                <p>{selected || "service categories"}</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 8.41693L10.5866 15.0037C10.9633 15.375 11.471 15.5831 12 15.5831C12.529 15.5831 13.0367 15.375 13.4134 15.0037L20 8.41693" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>


            <ul className={`dropdown-menu ${isOpen ? "open" : ""}`}>
                {services?.map((category, index) => (
                    <li onClick={() => handleSelected(category?.name)} key={index}>{category?.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default DropDown
