import "./links.scss"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';

export default function links() {
    return (
        <div className ="links" id="links">
            <h1>Links</h1>
            <div className="itemContainer">
                <GitHubIcon className = "icon" onClick={event => window.location.href="https://github.com/alyssamui"}/>
                <span onClick={event => window.location.href="https://github.com/alyssamui"}> GitHub </span>

            </div> 
            <div className="itemContainer">
                <LinkedInIcon className = "icon" onClick={event => window.location.href="https://www.linkedin.com/in/alyssamui/"}/>
                <span onClick={event => window.location.href="https://www.linkedin.com/in/alyssamui/"}> LinkedIn</span>
            </div>
            <div className="itemContainer">
                <DescriptionIcon className = "icon" onClick={event => window.location.href="https://drive.google.com/file/d/1IISXIqvkPxBHkTvYrotDbar0Ig0FXo0w/view?usp=sharing"}/>
                <span onClick={event => window.location.href="https://drive.google.com/file/d/1IISXIqvkPxBHkTvYrotDbar0Ig0FXo0w/view?usp=sharing"}> Resume</span>
            </div>
            <div className="itemContainer">
                <img src="/assets/gitlab.png" className = "icon" onClick={event => window.location.href="https://gitlab.com/alyssamui"} alt=""/>
                <span onClick={event => window.location.href="https://gitlab.com/alyssamui"}> GitLab</span>
            </div>
        </div>
    )
}