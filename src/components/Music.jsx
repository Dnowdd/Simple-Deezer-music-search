export default function Music(props) {
  return (
    <>
        <div className='music'>
            <div>
                <img src={props.music.album.cover} alt="Album Cover"/>
            </div>
            <div>
                <h1>{props.music.title}</h1>
                <h2>{props.music.artist.name}</h2>
                <a target='_blank' rel="noreferrer" href={props.music.link}>Go to Deezer.</a>
            </div>
        </div>
    </>
  );
}
