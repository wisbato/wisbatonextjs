
const TestimonialsCard = ({ item }: { item: { text: string; name: string; jobTitle: string }, width: string }) => {
    return (
        <div className='testimonials-card'>
            <p>“</p>
            <p>{item?.text}</p>
            <p>{item?.name}, <span>{item?.jobTitle}</span></p>
        </div>
    )
}

export default TestimonialsCard