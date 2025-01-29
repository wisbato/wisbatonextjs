const FooterSection = () => {

    const handleLocation = (location: string) => {
        window.open(`https://maps.app.goo.gl/${location}`, '_blank');
    };

    const handleCall = (phoneNumber: string) => {
        const telLink = `tel:${phoneNumber}`;
        window.open(telLink, '_blank');
    };

    const handleMailto = (email: string) => {
        window.open(`mailto:${email}`);
    };

    const handleSocialMedia = (url: string) => {
        window.open(url, '_blank')
    }

    return (
        <div className='footer-section'>
            <h2 className="footer-title" >Let&apos;s Make Something Great Together</h2>

            <div className="footer-main-contents" >
                <div className="address-cards">
                    <div className="address-card">
                        <div className="address-title">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="#F2F2F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#F2F2F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p>Mumbai</p>
                        </div>
                        <div className="address-details">
                            <p>103, 1 St Floor, A wing, Greenscape Technocity Tower 3, Mahape, Navi Mumbai, Maharashtra PIN:400710</p>
                            <button onClick={() => handleLocation("v8jFXasg5oSG2wZt8")} >
                                <span>Get Direction</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5 10.8333V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H9.16667" stroke="#E8E8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17.5 2.5L10 10" stroke="#E8E8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.5 2.5H17.5V7.5" stroke="#E8E8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="address-card">
                        <div className="address-title">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="#F2F2F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#F2F2F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p>Kozhikode</p>
                        </div>
                        <div className="address-details">
                            <p>4th Floor, City Corner Building, West Nadakkave, Vandipetta, West Hill, Kozhikode, Kerala 673011</p>
                            <button onClick={() => handleLocation("Bjc9fNqUHhddqfKD8")} >
                                <span>Get Direction</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5 10.8333V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H9.16667" stroke="#E8E8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17.5 2.5L10 10" stroke="#E8E8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.5 2.5H17.5V7.5" stroke="#E8E8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>

                <div className="footer-desc" >
                    <p>We&apos;re here to help. Whether you have questions about our services, need a consultation, or are ready to start your next project, don&apos;t hesitate to contact us.</p>

                    <div className="footer-contact-btns">
                        <button onClick={() => handleMailto("hello@wisbato.com")} >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.667 3.3335H3.33366C2.41318 3.3335 1.66699 4.07969 1.66699 5.00016V15.0002C1.66699 15.9206 2.41318 16.6668 3.33366 16.6668H16.667C17.5875 16.6668 18.3337 15.9206 18.3337 15.0002V5.00016C18.3337 4.07969 17.5875 3.3335 16.667 3.3335Z" stroke="#F2F2F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18.3337 5.8335L10.8587 10.5835C10.6014 10.7447 10.3039 10.8302 10.0003 10.8302C9.69673 10.8302 9.39927 10.7447 9.14199 10.5835L1.66699 5.8335" stroke="#F2F2F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>hello@wisbato.com</span>
                        </button>
                        <button onClick={() => handleCall("0495 490 0077")} >
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.8332 14.0999V16.5999C18.8341 16.832 18.7866 17.0617 18.6936 17.2744C18.6006 17.487 18.4643 17.6779 18.2933 17.8348C18.1222 17.9917 17.9203 18.1112 17.7005 18.1855C17.4806 18.2599 17.2477 18.2875 17.0165 18.2666C14.4522 17.988 11.989 17.1117 9.82486 15.7083C7.81139 14.4288 6.10431 12.7217 4.82486 10.7083C3.41651 8.53426 2.54007 6.05908 2.26653 3.48325C2.2457 3.25281 2.27309 3.02055 2.34695 2.80127C2.4208 2.58199 2.53951 2.38049 2.6955 2.2096C2.8515 2.03871 3.04137 1.90218 3.25302 1.80869C3.46468 1.7152 3.69348 1.6668 3.92486 1.66658H6.42486C6.82928 1.6626 7.22136 1.80582 7.528 2.06953C7.83464 2.33324 8.03493 2.69946 8.09153 3.09992C8.19705 3.89997 8.39274 4.68552 8.67486 5.44158C8.78698 5.73985 8.81125 6.06401 8.74478 6.37565C8.67832 6.68729 8.52392 6.97334 8.29986 7.19992L7.24153 8.25825C8.42783 10.3445 10.1552 12.072 12.2415 13.2583L13.2999 12.1999C13.5264 11.9759 13.8125 11.8215 14.1241 11.755C14.4358 11.6885 14.7599 11.7128 15.0582 11.8249C15.8143 12.107 16.5998 12.3027 17.3999 12.4083C17.8047 12.4654 18.1744 12.6693 18.4386 12.9812C18.7029 13.2931 18.8433 13.6912 18.8332 14.0999Z" stroke="#F2F2F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>0495 490 0077</span>
                        </button>
                    </div>

                    <div className="socail-medias-footer">
                        <svg onClick={() => handleSocialMedia("https://www.instagram.com/wisbatosoftwares/")} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#F2F2F2" />
                            <g clip-path="url(#clip0_2177_707)">
                                <path d="M24.167 11.6665H15.8337C13.5325 11.6665 11.667 13.532 11.667 15.8332V24.1665C11.667 26.4677 13.5325 28.3332 15.8337 28.3332H24.167C26.4682 28.3332 28.3337 26.4677 28.3337 24.1665V15.8332C28.3337 13.532 26.4682 11.6665 24.167 11.6665Z" stroke="#F2F2F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M23.3337 19.4748C23.4366 20.1683 23.3181 20.8766 22.9952 21.4989C22.6723 22.1213 22.1614 22.6259 21.5351 22.9412C20.9088 23.2564 20.1991 23.3661 19.5069 23.2547C18.8147 23.1433 18.1752 22.8165 17.6794 22.3207C17.1837 21.825 16.8569 21.1855 16.7455 20.4933C16.6341 19.8011 16.7438 19.0913 17.059 18.4651C17.3742 17.8388 17.8789 17.3279 18.5012 17.005C19.1236 16.682 19.8319 16.5636 20.5254 16.6664C21.2328 16.7713 21.8878 17.101 22.3935 17.6067C22.8992 18.1124 23.2288 18.7673 23.3337 19.4748Z" stroke="#F2F2F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M24.583 15.4165H24.5913" stroke="#F2F2F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2177_707">
                                    <rect width="20" height="20" fill="white" transform="translate(10 10)" />
                                </clipPath>
                            </defs>
                        </svg>

                        <svg onClick={() => handleSocialMedia("https://www.facebook.com/wisbato")} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#F2F2F2" />
                            <path d="M24.9997 11.6665H22.4997C21.3946 11.6665 20.3348 12.1055 19.5534 12.8869C18.772 13.6683 18.333 14.7281 18.333 15.8332V18.3332H15.833V21.6665H18.333V28.3332H21.6663V21.6665H24.1663L24.9997 18.3332H21.6663V15.8332C21.6663 15.6122 21.7541 15.4002 21.9104 15.2439C22.0667 15.0876 22.2787 14.9998 22.4997 14.9998H24.9997V11.6665Z" stroke="#F2F2F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <svg onClick={() => handleSocialMedia("https://www.linkedin.com/company/wisbato/")} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.5 20C39.5 9.23045 30.7696 0.5 20 0.5C9.23045 0.5 0.5 9.23045 0.5 20C0.5 30.7696 9.23045 39.5 20 39.5C30.7696 39.5 39.5 30.7696 39.5 20Z" stroke="#F2F2F2" />
                            <path d="M20.0012 17.7541C20.8418 16.8954 21.9363 16.3333 23.2095 16.3333C25.9938 16.3333 28.2512 18.5905 28.2512 21.3749V28.2499H26.4178V21.3749C26.4178 19.603 24.9814 18.1666 23.2095 18.1666C21.4376 18.1666 20.0012 19.603 20.0012 21.3749V28.2499H18.1678V16.7916H20.0012V17.7541ZM13.5845 14.9583C12.8251 14.9583 12.2095 14.3426 12.2095 13.5833C12.2095 12.8239 12.8251 12.2083 13.5845 12.2083C14.3439 12.2083 14.9595 12.8239 14.9595 13.5833C14.9595 14.3426 14.3439 14.9583 13.5845 14.9583ZM12.6678 16.7916H14.5011V28.2499H12.6678V16.7916Z" fill="white" />
                        </svg>

                        <svg onClick={() => handleSocialMedia("https://twitter.com/wisbato")} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_108_18)">
                                <path d="M39.5 20C39.5 9.23045 30.7696 0.5 20 0.5C9.23045 0.5 0.5 9.23045 0.5 20C0.5 30.7696 9.23045 39.5 20 39.5C30.7696 39.5 39.5 30.7696 39.5 20Z" stroke="#F2F2F2" />
                                <path d="M24.6536 12.6875H27.1346L21.7144 18.8825L28.0909 27.3125H23.0981L19.1876 22.1998L14.7131 27.3125H12.2306L18.0281 20.6862L11.9111 12.6875H17.0306L20.5654 17.3607L24.6536 12.6875ZM23.7829 25.8275H25.1576L16.2836 14.0945H14.8084L23.7829 25.8275Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_108_18">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection;

// old footer code

// // import MapComponent from '../MapLocation/MapLocation';
// // import './Footer.css'

// const FooterSection = () => {

//     // const accessToken = "pk.eyJ1IjoianVuYWlkOTk2IiwiYSI6ImNsZXBmNHg2cDBibWkzdW8xMXg1N3cxcnoifQ.tfWyfgi6pjLL0mHhAL4BIg"
//     // const locations = [
//     //     { latitude: 11.273404842731598, longitude: 75.7749505932938 },
//     //     { latitude: 11.273404842731598, longitude: 75.7749505932938 },
//     // ];

//     return (
//         <div className='footer-section'>

//             {/* <MapComponent accessToken={accessToken} locations={locations} /> */}

//             {/* <div className="map-frame">
//                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197.9047478278737!2d75.77490229024171!3d11.273511239982675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65f32732f18a7%3A0xf2c3846272a4ddcd!2sWisbato%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1708669758094!5m2!1sen!2sin" width="100%" height="400" style={{ border: "0" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//             </div> */}

//             <div className="contact-info-footer">
//                 <div className='contact-qoutes-footer' >
//                     <p>Let’s make something great together</p>
//                 </div>
//                 <div className='contact-socialmedia-footer' >
//                     {/* <div className='social-medias' ></div> */}

//                     <div className='adress-section'>
//                         <div className='adress-div' >
//                             <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M15.9998 17.0664C18.4667 17.0664 20.4663 15.0668 20.4663 12.5999C20.4663 10.1331 18.4667 8.1333 15.9998 8.1333C13.5329 8.1333 11.5332 10.1331 11.5332 12.5999C11.5332 15.0668 13.5329 17.0664 15.9998 17.0664Z" stroke="#878787" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
//                                 <path d="M16.0002 3.66663C7.06696 3.66663 5.57809 11.111 7.06696 16.7538C8.37716 21.6968 12.3078 25.0765 14.8984 27.8458C15.0379 27.9993 15.208 28.122 15.3978 28.206C15.5875 28.29 15.7927 28.3333 16.0002 28.3333C16.2076 28.3333 16.4128 28.29 16.6026 28.206C16.7922 28.122 16.9624 27.9993 17.1019 27.8458C19.6926 25.0765 23.6231 21.6968 24.9334 16.7538C26.4222 11.111 24.9334 3.66663 16.0002 3.66663Z" stroke="#878787" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
//                             </svg>
//                             <p className='address-text' >
//                                 4th Floor, City Corner Building <br />
//                                 West Nadakkave, Vandipetta<br />
//                                 West Hill, Kozhikode, 673011<br />
//                                 Kerala
//                                 <br /> 0495 490 0077
//                             </p>
//                         </div>
//                         <div className='adress-div' >
//                             <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M15.9998 17.0664C18.4667 17.0664 20.4663 15.0668 20.4663 12.5999C20.4663 10.1331 18.4667 8.1333 15.9998 8.1333C13.5329 8.1333 11.5332 10.1331 11.5332 12.5999C11.5332 15.0668 13.5329 17.0664 15.9998 17.0664Z" stroke="#878787" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
//                                 <path d="M16.0002 3.66663C7.06696 3.66663 5.57809 11.111 7.06696 16.7538C8.37716 21.6968 12.3078 25.0765 14.8984 27.8458C15.0379 27.9993 15.208 28.122 15.3978 28.206C15.5875 28.29 15.7927 28.3333 16.0002 28.3333C16.2076 28.3333 16.4128 28.29 16.6026 28.206C16.7922 28.122 16.9624 27.9993 17.1019 27.8458C19.6926 25.0765 23.6231 21.6968 24.9334 16.7538C26.4222 11.111 24.9334 3.66663 16.0002 3.66663Z" stroke="#878787" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
//                             </svg>

//                             <p className='address-text' >
//                                 5th Floor,Office No 513 <br />
//                                 Rajhans Helix 3, <br /> LBS Rd,  Ghatkopar West, Mumbai, <br /> Maharashtra 400086 <br /> +91 91360 24438
//                             </p>
//                         </div>
//                     </div>

//                     <div style={{ display: "grid", gap: "10px" }} >
//                         <p>hello@wisbato.com</p>
//                         {/* <p>+91 8714703354</p> */}
//                         <div style={{ display: "flex", gap: "30px" }} >
//                             <ul>
//                                 <li><a title='instagram' target='_blank' href="https://www.instagram.com/wisbatosoftwares/">
//                                     <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M18.0015 13.5C15.5154 13.5 13.5015 15.5147 13.5015 18C13.5015 20.486 15.5161 22.5 18.0015 22.5C20.4874 22.5 22.5015 20.4854 22.5015 18C22.5015 15.5141 20.4868 13.5 18.0015 13.5ZM18.0015 10.5C22.1421 10.5 25.5015 13.8557 25.5015 18C25.5015 22.1408 22.1458 25.5 18.0015 25.5C13.8608 25.5 10.5015 22.1444 10.5015 18C10.5015 13.8593 13.8571 10.5 18.0015 10.5ZM27.7515 10.1237C27.7515 11.1589 26.9103 11.9988 25.8765 11.9988C24.8413 11.9988 24.0015 11.1576 24.0015 10.1237C24.0015 9.08985 24.8425 8.25 25.8765 8.25C26.9089 8.2487 27.7515 9.08985 27.7515 10.1237ZM18.0015 6C14.2897 6 13.6848 6.00983 11.9584 6.0867C10.7822 6.14192 9.99379 6.30011 9.26123 6.58451C8.61023 6.83699 8.14063 7.13847 7.64028 7.63883C7.138 8.1411 6.83705 8.60945 6.58559 9.26075C6.30053 9.99498 6.14239 10.7822 6.08817 11.9567C6.01054 13.6128 6.00146 14.1916 6.00146 18C6.00146 21.7118 6.01129 22.3167 6.08815 24.0429C6.14339 25.2186 6.30179 26.0082 6.5855 26.739C6.83864 27.3909 7.14074 27.8616 7.63868 28.3596C8.14294 28.8632 8.61268 29.1651 9.2578 29.4141C9.99928 29.7008 10.7872 29.8592 11.9582 29.9133C13.6143 29.9909 14.193 30 18.0015 30C21.7132 30 22.3182 29.9901 24.0444 29.9133C25.2175 29.8583 26.0077 29.6994 26.7405 29.4159C27.3906 29.1635 27.8628 28.8603 28.3611 28.3628C28.8654 27.8577 29.1667 27.3891 29.416 26.7425C29.7019 26.0037 29.8606 25.2147 29.9148 24.0434C29.9923 22.3872 30.0015 21.8084 30.0015 18C30.0015 14.2883 29.9916 13.6833 29.9148 11.9571C29.8596 10.7836 29.7007 9.99224 29.4169 9.25977C29.1651 8.61057 28.8625 8.13953 28.3626 7.63883C27.8595 7.13573 27.3924 6.8354 26.7406 6.58413C26.007 6.29931 25.2186 6.14094 24.0447 6.08672C22.3887 6.00908 21.8098 6 18.0015 6ZM18.0015 3C22.0764 3 22.5852 3.015 24.1852 3.09C25.7814 3.16375 26.8702 3.41625 27.8265 3.7875C28.8151 4.16876 29.6502 4.68375 30.4839 5.5175C31.3164 6.35126 31.8315 7.18875 32.214 8.175C32.5839 9.13001 32.8365 10.22 32.9115 11.8163C32.9827 13.4163 33.0015 13.925 33.0015 18C33.0015 22.0751 32.9865 22.5837 32.9115 24.1838C32.8377 25.7801 32.5839 26.8688 32.214 27.825C31.8327 28.8138 31.3164 29.6487 30.4839 30.4826C29.6502 31.3151 28.8114 31.83 27.8265 32.2125C26.8702 32.5826 25.7814 32.835 24.1852 32.91C22.5852 32.9813 22.0764 33 18.0015 33C13.9265 33 13.4177 32.985 11.8177 32.91C10.2215 32.8362 9.13396 32.5826 8.17647 32.2125C7.18895 31.8312 6.3527 31.3151 5.51896 30.4826C4.68521 29.6487 4.17146 28.8101 3.78896 27.825C3.41771 26.8688 3.16647 25.7801 3.09147 24.1838C3.02022 22.5837 3.00146 22.0751 3.00146 18C3.00146 13.925 3.01647 13.4163 3.09147 11.8163C3.16521 10.2188 3.41771 9.13125 3.78896 8.175C4.1702 7.18751 4.68521 6.35126 5.51896 5.5175C6.3527 4.68375 7.19022 4.17 8.17647 3.7875C9.13271 3.41625 10.2202 3.165 11.8177 3.09C13.4177 3.01875 13.9265 3 18.0015 3Z" fill="white" />
//                                     </svg>
//                                 </a></li>
//                                 <li><a title='facebook' target='_blank' href="https://www.facebook.com/wisbato">
//                                     <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M19.5 13.5H26.25L25.5 16.5H19.5V30H16.5V16.5H10.5V13.5H16.5V10.6917C16.5 8.01709 16.7785 7.04724 17.3014 6.06946C17.8243 5.09169 18.5918 4.32432 19.5695 3.80141C20.5473 3.27848 21.517 3 24.1917 3C24.9747 3 25.6608 3.075 26.25 3.225V6H24.1917C22.2062 6 21.6015 6.11676 20.9843 6.44684C20.5293 6.69017 20.1902 7.02928 19.9468 7.48427C19.6167 8.10144 19.5 8.70611 19.5 10.6917V13.5Z" fill="white" />
//                                     </svg>
//                                 </a></li>
//                             </ul>
//                             <ul>
//                                 <li><a title='linkedin' target='_blank' href="https://www.linkedin.com/company/wisbato/">
//                                     <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M18.0015 14.3251C19.3771 12.9199 21.1681 12 23.2515 12C27.8078 12 31.5015 15.6936 31.5015 20.25V31.5H28.5015V20.25C28.5015 17.3505 26.151 15 23.2515 15C20.352 15 18.0015 17.3505 18.0015 20.25V31.5H15.0015V12.75H18.0015V14.3251ZM7.50147 9.75C6.25882 9.75 5.25146 8.74264 5.25146 7.5C5.25146 6.25735 6.25882 5.25 7.50147 5.25C8.7441 5.25 9.75147 6.25735 9.75147 7.5C9.75147 8.74264 8.7441 9.75 7.50147 9.75ZM6.00146 12.75H9.00147V31.5H6.00146V12.75Z" fill="white" />
//                                     </svg>

//                                 </a></li>
//                                 <li><a title='X' target='_blank' href="https://twitter.com/wisbato">
//                                     <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M24.2729 3H28.6836L19.0476 14.0133L30.3836 29H21.5076L14.5556 19.9107L6.60096 29H2.18763L12.4943 17.22L1.61963 3H10.721L17.0049 11.308L24.2729 3ZM22.7249 26.36H25.1689L9.39296 5.50133H6.77029L22.7249 26.36Z" fill="white" />
//                                     </svg>
//                                 </a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='copyright-div' >
//                 <p>Copyright &copy; 2024 Wisbato Pvt. Ltd</p>
//             </div>
//         </div>
//     )
// }

// export default FooterSection