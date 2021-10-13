import './App.scss';
import React, { useState } from 'react';
import Like from "./images/like.gif"
import Love from "./images/love.gif"
import Wow from "./images/wow.gif"
import Haha from "./images/haha.gif"
import Angry from "./images/angry.gif"
import Care from "./images/care.gif"
import Sad from "./images/sad.gif"
import Note from "./images/note.jpeg"
import MultiGraph from "./MultiGraph"
import BarDash from "./BarDash"
import BarSide from "./BarSide"
import ICon from "./images/homeicon.png"
import InICon from "./images/inslight.png"

import Vogue from "./images/vogue.svg"
import { useHistory } from "react-router-dom";

import Arc from "./Arc"
import Nega from "./images/nega.png"
import Pos from "./images/positive.png"

function App() {
    const history = useHistory();

    const numberWithCommas = (x) => {
        if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        else return null
    }
    return (
        <div className="App">
            <div className="Header">
                <img src={ICon} onClick={() => {
                    history.push("/")

                }} />
                Social Platform Reactions & Sentiment Analysis
            </div>
            <div className="DDContainer">
                <img className="vogue" src={Vogue} />
                <div className="Main">
                    <div className="first">
                        <div className="arc">
                            <div className="title" >
                                Overall Sentiment Score
                            </div>
                            <Arc />
                        </div>
                        <div className="left">
                            <div className="title">Stats</div>
                            <div className="postholder">
                                <div className="post">
                                    <div className="p1">
                                        {numberWithCommas(2078)}
                                    </div>
                                    <div className="p2">
                                        Total Posts
                                    </div>
                                </div>
                                <div className="post">
                                    <div className="p1">

                                        {numberWithCommas(5.693150685.toFixed(2))}
                                    </div>
                                    <div className="p2">
                                        Daily Posts
                                    </div>
                                </div>
                                <div className="post">
                                    <div className="p1">

                                        {numberWithCommas(1795380)}
                                    </div>
                                    <div className="p2">
                                        Total Reactions
                                    </div>
                                </div>
                                <div className="post">
                                    <div className="p1">

                                        {numberWithCommas(863.9942252.toFixed(2))}

                                    </div>
                                    <div className="p2">
                                        Reactions per Post
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="title">Reaction Metrics</div>
                            <div className="emojisholder">
                                <div className="emoji">
                                    <img src={Like} />

                                    <div className="count">

                                        {numberWithCommas(1184286)}
                                    </div>
                                </div>
                                <div className="emoji">
                                    <img src={Love} />

                                    <div className="count">

                                        {numberWithCommas(436478)}
                                    </div>
                                </div>
                                <div className="emoji">
                                    <img src={Wow} />

                                    <div className="count">
                                        {numberWithCommas(9692)}
                                    </div>
                                </div>
                                <div className="emoji">
                                    <img src={Care} className="care" />
                                    <div className="count">
                                        {numberWithCommas(11318)}

                                    </div>
                                </div>
                                <div className="emoji">
                                    <img src={Haha} />
                                    <div className="count">
                                        {numberWithCommas(39523)}

                                    </div>
                                </div>
                                <div className="emoji">
                                    <img src={Angry} />
                                    <div className="count">
                                        {numberWithCommas(2461)}

                                    </div>
                                </div>
                                <div className="emoji">
                                    <img src={Sad} />
                                    <div className="count">
                                        {numberWithCommas(6800)}

                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                    <div className="divider"> <hr class="progress" /></div>
                    <div className="second">
                        <div className="MultiGraph">
                            <div className="graphtitle">Sentiment and Motive Analysis</div>
                            <MultiGraph />
                        </div>
                        <div className="BarDash">
                            <div className="img1"><div>Most Common Words from Comments</div><img src={Pos} /><div className="subtitle">Positive</div><img src={Nega} /><div className="subtitle">Negative</div></div>


                        </div>
                        <div className="social">
                            <div className="title" >
                                Uncovered Social Themes by User Comments Analysis.            </div>
                            <BarDash />
                        </div>
                    </div>
                    <div className="divider"> <hr class="progress" /></div>
                    <div className="third">
                        <div className="bar">
                            <div className="title" >
                                Total Comments by Year              </div>
                            <BarSide />
                        </div>
                        <div className="left">
                            <div className="tablecontainer">
                                <div className="title">
                                    Pre and Post Covid-Breakout Sentiment Analysis On Comment
                                </div>
                                <div className="table">
                                    <div className="header">
                                        <div className="h1">LIWC<br />Concept</div>
                                        <div className="h2">Pre Covid-Breakout</div>
                                        <div className="h3">Post Covid-Breakout</div>
                                        <div className="h4">T Test</div>
                                        <div className="h5">Result based on T Test</div>
                                    </div>
                                    <div className="content">
                                        <div className="row">
                                            <div className="c1">Posemo</div>
                                            <div className="c2">{11.9821324717286.toFixed(2)}</div>
                                            <div className="c3">{20.7048303715671.toFixed(2)}</div>
                                            <div className="c4">0</div>
                                            <div className="c5"><div className="arrow-up-green"></div></div>
                                        </div>
                                        <div className="row">
                                            <div className="c1">Negemo</div>
                                            <div className="c2">{13.8461324717286.toFixed(2)}</div>
                                            <div className="c3">{5.88619063004847.toFixed(2)}</div>
                                            <div className="c4">0</div>
                                            <div className="c5"><div className="arrow-up-red"></div></div>
                                        </div>
                                        <div className="row">
                                            <div className="c1">Affiliation</div>
                                            <div className="c2">{2.28547980613893.toFixed(2)}</div>
                                            <div className="c3">{2.67849434571891.toFixed(2)}</div>
                                            <div className="c4">{0.0413249103332689.toFixed(2)}</div>
                                            <div className="c5 neutral"><div className="arrow-left" /><div className="arrow-right"></div></div>
                                        </div>
                                        <div className="row">
                                            <div className="c1">Achieve</div>
                                            <div className="c2">{1.44983844911147.toFixed(2)}</div>
                                            <div className="c3">{1.79532148626818.toFixed(2)}</div>
                                            <div className="c4">{0.0148414675108454.toFixed(2)}</div>
                                            <div className="c5 neutral"><div className="arrow-left" /><div className="arrow-right"></div></div>
                                        </div>
                                        <div className="row">
                                            <div className="c1">Power</div>
                                            <div className="c2">{2.56619709208401.toFixed(2)}</div>
                                            <div className="c3">{2.81452665589661.toFixed(2)}</div>
                                            <div className="c4">{0.178411840882999.toFixed(2)}</div>
                                            <div className="c5 neutral"><div className="arrow-left" /><div className="arrow-right"></div></div>
                                        </div>
                                        <div className="row">
                                            <div className="c1">Reward</div>
                                            <div className="c2">{1.84136025848143.toFixed(2)}</div>
                                            <div className="c3">{2.25373505654281.toFixed(2)}</div>
                                            <div className="c4">{0.0272835575735779.toFixed(2)}</div>
                                            <div className="c5 neutral"><div className="arrow-left" /><div className="arrow-right"></div></div>
                                        </div>
                                        <div className="row">
                                            <div className="c1">Risk</div>
                                            <div className="c2">{1.18307592891761.toFixed(2)}</div>
                                            <div className="c3">{0.837453957996769.toFixed(2)}</div>
                                            <div className="c4">{0.00854128537433761.toFixed(2)}</div>
                                            <div className="c5"><div className="arrow-up-red"></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="right">
                            <div className="title">Insights</div>
                            <div className="Content">
                                <div className="one"><div className="imgtitle"><img src={Note} />Note: </div>Given that we have <b className="countcolor">168326</b> observations (i.e. <b className="countcolor">107607</b> & <b className="countcolor">60719</b> comments), which is a fairly large sample size, we have chosen a more conservative α-level of 0.01. (i.e we expect to be accurately rejecting the null hypothesis at least 99 percent of the time)</div>
                                <div className="two"><div className="imgtitle"><img src={InICon} />Comparing Sentiment and motives  across the two periods:</div>
                                    There were significant changes in the amount of <b className="green">Positive</b> emotion increased during the Covid period, and when we look at the means, we find that on average expression of the <b className="red">Negative</b> Emotion and the <b className="red">Risk</b> motive were also increased during the Covid period.</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
          

        </div>
    );
}

export default App;
