import { NavLink } from "react-router-dom"
import { musicLib } from "./exampleMusicLibrary"

function MusicLibrary() {

    return (
        <div>
            <h1> Music Library</h1>
            <div>
                {musicLib.map(music => {
                    return (
                        <>
                        <h1>{music.id}</h1>
                        <NavLink style={{color:"white"}} to={`/music/${music.id}`}>{music.name}</NavLink>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default MusicLibrary