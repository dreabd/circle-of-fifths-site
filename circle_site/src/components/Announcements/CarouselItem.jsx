function CarouselItem({ 
    announcement, 
    index,

 }) {
    return (
        <div className="ax-slide" key="slide1"
            style={{ transform: `translate(-${index * 100}%`, transition: "1s cubic-bezier(.78,.09,.76,1.02)" }}
        >
            <div>
                <img className="profile-img" src={announcement.member.pfp} />
            </div>
            <div className='ax-info-container'>
                <div className='top-ax-info'>
                    <p>{announcement.title}</p>
                    <p>{announcement.created_at}</p>
                </div>
                <div className='bot-ax-info'>
                    <p >{announcement.announcement.slice(0, 200)}{announcement.announcement.length > 300 && "..."}</p>

                </div>
            </div>
        </div >
    )
}

export default CarouselItem