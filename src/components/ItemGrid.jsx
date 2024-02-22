export const ItemGrid = ({ id, type, backgroundColor, description, gridColumn, gridRow, title, imageUrl }) => {
    const image = {
        background: `url(${imageUrl})`
    }
    return (
        <div className={`itemGrid ${gridColumn} ${gridRow}`} style={image}>
            {/* <video autoPlay muted loop className="background-video">
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            {/* <div className="content"> */}
            <h1 className="title">{title}</h1>
            <p className='description'>{description}</p>
            {/* </div> */}
        </div >
    )
}