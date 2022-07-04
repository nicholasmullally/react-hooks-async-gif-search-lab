function GifList({ theGifs }) {
    console.log(theGifs)
    return (
        <ul>
            {theGifs.map(({ url }, index) => {
                <li key={index}>
                    <img src={url}></img>
                </li>
            })}
        </ul>
    );
}
export default GifList