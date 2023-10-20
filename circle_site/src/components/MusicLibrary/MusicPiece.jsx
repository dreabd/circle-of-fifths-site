import parse from 'html-react-parser';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { musicLib } from './exampleMusicLibrary';
// const MyComponent = () => {
//  const htmlString = '<div>A simple HTML string</div>';
// return <div>{parse(htmlString)}</div>
// }

function MusicPiece() {
    const { id } = useParams()
    const piece = musicLib.find(music => music.id == id)
    console.log(piece.name)

    const htmlString = parse(piece?.museScore)

    return (
        <div style={{ width: "100%",height:"85%"}}>
            <h1>{piece.name}</h1>
            {htmlString}
        </div>

    )
}

export default MusicPiece
