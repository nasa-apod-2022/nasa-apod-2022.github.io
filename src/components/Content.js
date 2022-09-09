import React, { useEffect, useState } from "react";
import Axios from "axios";
import prev from '../prev.png';
import next from '../next.png';

const Content = () => {
    const [url,setUrl] = useState("https://api.nasa.gov/planetary/apod?api_key=whZSEear8KsEGpSANOHMUHnN0YBcW9c53Nv7XOZV");
    const [date,setDate]=useState("");
    const [imgurl,setimgurl]=useState("");
    const [title,setTitle]=useState("");
    const [expl,setExpl]=useState("");
    const getNasa = () =>{
        Axios.get(url).then((response) => {
            setDate(response.data.date);
            setimgurl(response.data.hdurl);
            setTitle(response.data.title);
            setExpl(response.data.explanation);
        }
        );
    }
    getNasa()
    const prevdates = () =>{
        document.getElementById("nextimg").classList.remove("hidden");
        const currentDate = new Date(date);
        currentDate.setDate(currentDate.getDate()-1);
        const prevDate = currentDate.toISOString().substring(0,10);
        setUrl("https://api.nasa.gov/planetary/apod?api_key=whZSEear8KsEGpSANOHMUHnN0YBcW9c53Nv7XOZV"+"&date="+prevDate);
    }
    const nextdates = () =>{
        const presentDate = new Date(date);
        const todaydate = new Date();
        const dateString = todaydate.toISOString().substring(0,10);
        if (date == dateString){
            console.log("Executed.")
            document.getElementById("nextimg").classList.add("hidden");
        }
        else{
            document.getElementById("nextimg").classList.remove("hidden");
            presentDate.setDate(presentDate.getDate()+1);
            const nextDate = presentDate.toISOString().substring(0,10);
            setUrl("https://api.nasa.gov/planetary/apod?api_key=whZSEear8KsEGpSANOHMUHnN0YBcW9c53Nv7XOZV"+"&date="+nextDate);
        }
    }
    return(
        <div className="w-3/4 bg-blue-100 bg-opacity-70 text-black p-5 rounded-xl">
            Explore the fascinating Universe we live in, with new pictures captured by sophisticated telescopes everyday! The picture has been explained by a professional Astronomer briefly.<br></br>
            <div className="flex flex-col justify-center items-center py-8">
                <span className="text-xl font-bold">{title}</span>
                <br></br>
                <img src={imgurl} alt="" className="hi w-96 lg:w-4/5"></img>
                <br></br>
            </div>
            <span className="hi text-sm">"{expl}"</span>
            <div className="buttons flex justify-center items-center">
                <img src={prev} className="w-4 cursor-pointer" onClick={prevdates} />  {date}  <img id ="nextimg" src={next} className="w-4 cursor-pointer hidden" onClick={nextdates} />
            </div>
            <div className="foot flex flex-col text-center justify-center items-center text-xs p-10">
            Developed By: <a href="https://apoorvsrivastava270.github.io">Apoorv Srivastava</a>
            Project Idea: <a href="https://devsoc.club/">Developers' Society of BITS Goa</a>
        </div>
        </div>
    );
    
    
}

export default Content;