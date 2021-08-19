import "./portfolio.scss"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useState } from "react";

export default function Portfolio() {
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            title: "Drone Pose Plot Generator",
            desc: "I developed a script in Python that takes in a bag file and reads the ROS2 message data. The script outputs a 3D plot based on the coordinate position of the drone during its flight.",
            img: "assets/pose_plot.png",
        },
        {
            id: "2",
            title: "MATLAB Escape Room",
            desc: "I worked with a team to develop an interactive virtual escape room in MATLAB. I had developed the infrastructure that compiles all the puzzles into one cohesive program, and also modeled the 3D parts that are used in the virtual room.",
            img: "assets/escape_room.png",
        },
        {
            id: "3",
            title: "Memory Card Game",
            desc: "I created the card game \"Concentration\" in Java. The game starts with a deck of cards flipped face down on a table. The player can flip over two cards at a time, and wins by matching all cards of the same value.",
            img: "assets/card_game.png",
        },
        {
            id: "4",
            title: "Fishy Game",
            desc: "I created a simple game in Java where the player controls a fish that has to grow by each other randomly spawning fish. The game ends if the player is eaten by a larger fish or if the player becomes the largest fish in the game.",
            img: "assets/fishy.png",
        },
    ]

    const handleClick = (dir)=>{
        dir === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : 
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }
    return (
        <div className="portfolio" id="portfolio">
            <h1>Projects</h1>
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d)=> (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <h2> {d.title} </h2>
                                <p>
                                    {d.desc}
                                </p>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt=""/>
                        </div>
                    </div>
                </div>))}
            </div>
            <ArrowBackIosIcon fontSize='large' className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <ArrowBackIosIcon fontSize='large' className="arrow right" alt=""onClick={()=>handleClick("right")}/>
        </div>
    )
}
