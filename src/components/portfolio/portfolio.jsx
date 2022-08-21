import "./portfolio.scss"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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
            title: "Image Processor",
            desc: "I created an image proccessor in Java that can edit images with a variety of different filter options.",
            img: "assets/image_processing.png",
        },
        {
            id: "3",
            title: "Memory Card Game",
            desc: "I created the card game \"Concentration\" in Java. The game starts with a deck of cards flipped face down on a table. The player can flip over two cards at a time, and wins by matching all cards of the same value.",
            img: "assets/cardgame.JPG",
        },
        {
            id: "4",
            title: "Fishy Game",
            desc: "I created a simple game in Java where the player controls a fish that has to grow by each other randomly spawning fish. The game ends if the player is eaten by a larger fish or if the player becomes the largest fish in the game.",
            img: "assets/fishy.JPG",
        },
    ]

    const handleClick = (dir)=>{
        dir === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length-1) : 
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }
    return (
        <div className="portfolio" id="portfolio">
            <h1>Projects</h1>
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d)=> (
                <div className="container" key={d.id}>
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
            <ArrowForwardIosIcon fontSize='large' className="arrow right" alt=""onClick={()=>handleClick("right")}/>
        </div>
    )
}
