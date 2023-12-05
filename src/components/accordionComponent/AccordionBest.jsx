import { useState } from "react"
import "./AccordionBest.css"
import { useRef } from "react";
import { useEffect } from "react";
import Chevron from "./chevron.svg";

export const AccordionBest = () => {

    const [toggle, setToggle] = useState(false);
    const [toggleTwo, setToggleTwo] = useState(false);
    const [toggleThree, setToggleThree] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef()

    useEffect(() => {
        console.log(refHeight);
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    },[])

    const toggleState = () => {
        setToggle(!toggle);
    }

    const toggleStateTwo = () => {
        setToggleTwo(!toggleTwo)
    }

    const toggleStateThree = () => {
        setToggleThree(!toggleThree)
    }


  return (

    <div>
        <div className="accordion">
            <button className="accordion-visible" onClick={toggleState}>
                <span>
                    Lorem ipsum dolor sit amet
                </span>
                <img className={toggle && "active"} src={Chevron} alt="" />
            </button>

            <div className={toggle ? "accordion-toggle animated" : "accordion-toggle"} style={{height: toggle ?  `${heightEl}` : "0px"}} ref={refHeight}>
                <p aria-hidden={toggle ? "true" : "false"}> 
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda eos perspiciatis voluptates atque possimus iusto. Modi quae ex esse, totam sint ut facilis sapiente fugiat possimus! Quod officia quaerat totam!
                </p>
            </div>
        </div>

        <div className="accordion">
            <button className="accordion-visible" onClick={toggleStateTwo}>
                <span>
                    Lorem ipsum dolor sit amet
                </span>
                <img className={toggleTwo && "active"} src={Chevron} alt="" />
            </button>

            <div className={toggleTwo ? "accordion-toggle animated" : "accordion-toggle"} style={{height: toggleTwo ?  `${heightEl}` : "0px"}} ref={refHeight}>
                <p aria-hidden={toggleTwo ? "true" : "false"}> 
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda eos perspiciatis voluptates atque possimus iusto. Modi quae ex esse, totam sint ut facilis sapiente fugiat possimus! Quod officia quaerat totam!
                </p>
            </div>
        </div>

        <div className="accordion">
            <button className="accordion-visible" onClick={toggleStateThree}>
                <span>
                    Lorem ipsum dolor sit amet
                </span>
                <img className={toggleThree && "active"} src={Chevron} alt="" />
            </button>

            <div className={toggleThree ? "accordion-toggle animated" : "accordion-toggle"} style={{height: toggleThree ?  `${heightEl}` : "0px"}} ref={refHeight}>
                <p aria-hidden={toggleThree ? "true" : "false"}> 
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda eos perspiciatis voluptates atque possimus iusto. Modi quae ex esse, totam sint ut facilis sapiente fugiat possimus! Quod officia quaerat totam!
                </p>
            </div>
        </div>
    </div>
  )
}
