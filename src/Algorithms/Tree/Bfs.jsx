import { useEffect } from "react";
import AppendScript from "../../Components/AppendScript";
import { RemoveScript } from "../../Components/AppendScript";
import "../../Styles/Tree.css"
const Bfs = () => {
    useEffect(() => {
        AppendScript('bfs.js');
        return () => RemoveScript('bfs.js')
    }, []);
    return (
        <>
            <div className="tree-taskbar">
                <input id="edit-node" type="text" placeholder="Enter Node Value" />
                <button id="change-value-btn">Change Value</button>
                <button id="delete-node-btn">Delete Node</button>
            </div>
            <svg id="tree" >
                <g id="tree-parent"></g>
            </svg>
        </>


    );

}

export default Bfs;