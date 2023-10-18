import { useEffect } from "react";
import AppendScript from "../../Components/AppendScript";
import { RemoveScript } from "../../Components/AppendScript";
import "../../Styles/Tree.css"
const Bfs = () => {

    useEffect(() => {
        AppendScript('bfs.js');
        return () => RemoveScript('bfs.js'
        )
    }, []);
    return (
        <>
            <div className="tree-taskbar">
                <button id="delete-node-btn">Delete Node</button>
                <button id="edit-node-btn">Edit Node</button>
            </div>
            <svg id="tree" >
                <g id="tree-parent"></g>
            </svg>
        </>


    );

}

export default Bfs;