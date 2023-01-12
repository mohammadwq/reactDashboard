import React from 'react';
import './featured.scss';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h3 className='title'>Total Revenue</h3>
            <MoreVertIcon/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value= {70} text= {"70%"} strokWidth= {5}/>
            </div>
            <p className="title">Total Sales Made Today.</p>
            <p className="amount">420$</p>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon  fontSize='small'/>
                        <div className="resulteAmount">$22.6k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize='small'/>
                        <div className="resulteAmount">$12.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon  fontSize='small'/>
                        <div className="resulteAmount">$19.2k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured