import React, { Fragment } from 'react'

const Accordion = ({ toogleClick, toogle, title, desc, id }) => {

    return (
        <Fragment>
            <div className={"rounded-[32px] md:rounded-[40px] border-[2px] !border-Mblack [box-shadow:-4px_6px_0px_#000000] bg-white"}>
                <div className="head flex items-center justify-between gap-2 py-1 md:!py-2 pl-4 md:!pl-8 pr-2 cursor-pointer" onClick={() => toogleClick(id)}>
                    <h4 className='text__28 text-white text-outlineBlack-thin tracking-tight leading-[1] [text-shadow:-4px_3px_0px_#000000]' dangerouslySetInnerHTML={{ __html: title }}></h4>

                    <div className={"w-[32px] ss::w-[40px] md:w-[50px] h-[32px] ss::h-[40px] md:h-[50px] rounded-full  border-[3px] !border-Mblack relative flex items-center " + (toogle === id ? "bg-white" : "bg-[#FFDD71]")}>
                        <div className="w-[60%] h-[3px] ss:h-[4px] md:h-[8px] rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-block bg-Mblack"></div>
                        <div className={"w-[60%] h-[3px] ss:h-[4px] md:h-[8px] rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-block bg-Mblack transition-all duration-300  " + (toogle === id ? "" : "rotate-90")}></div>
                    </div>
                </div>
                <div className={"transition-all duration-300 overflow-hidden px-[1rem] md:px-8 " + (toogle === id ? "pt-1 md:!pt-2 pb-4 md:!pb-8 max-h-screen" : "max-h-0")}>
                    <p className='font-Varela text__20' dangerouslySetInnerHTML={{ __html: desc }} ></p>
                </div>
            </div>
        </Fragment>
    )
}

export default Accordion