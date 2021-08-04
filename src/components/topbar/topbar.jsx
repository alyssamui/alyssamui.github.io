import "./topbar.scss"

export default function topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">

                <div className="left">
                    <a href="#intro" className="logo"> AM </a>
                </div>
                <div className="right"> 
                    <a href="#intro" className="label"> About Me </a>
                    <a href="#portfolio" className="label"> Projects </a>
                    <a href="#links" className="label"> Links</a>
                </div>
            </div>
        </div>
    )
}
