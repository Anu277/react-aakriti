import React from "react";
import ItemCard from './Itemcard'; 
import bingo from "../imgs/tech-icons/bingo.svg"
import pred from "../imgs/tech-icons/output.svg"
import sprint from "../imgs/tech-icons/sprint.svg"
import rapid from "../imgs/tech-icons/rapid-fire.svg"
import memes from "../imgs/tech-icons/meme.svg"
import fortune from "../imgs/tech-icons/fortune.svg"
function CodePage2(){
    return(
        <div className=" tech-events w-auto max-w-80 md:max-w-5xl text-white p-5 flex  overflow-auto justify-evenly">
            <ItemCard
                imgSrc={bingo}
                title="Code Bingo "
                description="Unleash your creativity and problem-solving skills in a thrilling game of bingo with a twist. Designed to entertain and challenge, it's open to everyone, regardless of technical background!"
                link={'#'}
            />
            <ItemCard
                imgSrc={pred}
                description="Engage your analytical prowess in intriguing problem-solving challenges. Decode patterns and predict outcomes to showcase your data-driven intellect and win exciting rewards."
                title="Output Prediction"
                link={'#'}
            />
            <ItemCard
                imgSrc={sprint}
                title="Code Sprint"
                description="Collaborate, brainstorm, and solve coding challenges in our inclusive Code Sprint event. Bring innovative ideas to life in a thrilling atmosphere of creativity and teamwork."
                link={'#'}
            />
            <ItemCard
                imgSrc={rapid}
                title="Rapid Fire "
                description="Test your quick thinking and knowledge across various fields in Rapid Fire. Compete for the title of the sharpest mind on campus!"
                link={'#'}
            />
            <ItemCard
                imgSrc={memes}
                title="Techntonic Memes"
                description="Celebrate the lighter side of technology with an array of memes and humorous content. Laugh, share, and connect in this engaging event."
                link={'#'}
            />
            <ItemCard
                imgSrc={fortune}
                title="Modern Fortune Teller"
                description=" Embark on an intriguing journey into the mystical realm of fortune-telling. Explore age-old practices with a contemporary twist, offering insights into your past, present, and future."
                link={'#'}
            />
        </div>
    )
}
export default CodePage2;