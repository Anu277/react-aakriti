import React from "react";
import ItemCard from './Itemcard'; 
import robo from "../imgs/tech-icons/robot-arms.svg";
import gest from "../imgs/tech-icons/hand-gest.svg";
import diabetic from "../imgs/tech-icons/diabeties.svg";
import maze from "../imgs/tech-icons//maze-solve.svg";
import algo from "../imgs/tech-icons/machine-learning.svg";
import "./codepage.css";
function CodePage1(){
    return(
        <div className=" tech-events w-auto max-w-80 md:max-w-5xl text-white p-1 sm:p-5 flex  overflow-auto justify-evenly">
            <ItemCard
                imgSrc={robo}
                title="Robotic Arm"
                description="Explore the fusion of mechanics and programming with our Robotic Arm project. Witness its versatility and precision in various tasks, showcasing the potential of robotics in real-world applications."
                link={'#'}
            />
            <ItemCard
                imgSrc={gest}
                title="Volume control with hand Gestures"
                description=" Immerse yourself in the future of interaction with 'Volume Control with Hand Gestures.' Experience technology seamlessly translating gestures into audio control, revolutionizing device interaction." 
                link={'#'}
            />
            <ItemCard
                imgSrc={diabetic}
                title="Diabetic Detection"
                description="Join us for Diabetic Detection, showcasing cutting-edge technologies for early diabetic detection. Explore medical devices, AI, and data analytics, empowering proactive health management."
                link={'#'}
            />
            <ItemCard
                imgSrc={maze}
                title="Maze Solving Robot"
                description="Witness the AI-powered Maze Solving Robot, revolutionizing autonomous navigation. Join us for precision and speed in solving complex mazes!"
                link={'#'}
            />
            <ItemCard
                imgSrc={algo}
                title="Displaying ML Algorithms"
                description="Explore the captivating display of Machine Learning algorithms at our tech-fest event. Discover the power and potential of AI in revolutionizing industries and applications." 
                link={'#'}
            />
        </div>
    )
}
export default CodePage1;