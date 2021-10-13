import './App.scss';
import React from 'react';
import Home from "./images/home.jpeg"
import { useHistory } from "react-router-dom";

function App() {
    const history = useHistory();
    return (
        <div className="App" onClick={() => {
            history.push("/Vogue")

        }}>
            <div className="homepage">
                <img src={Home} />
                <div className="placetext">
                    Condé <div className="sub"> Social data Analysis</div>
                </div>
                <div className="container">
                    <div className="left">
                        <div className="two">We have a lot of cool Analysis & Insights!</div>
                        <div className="three">Social data analysis allows us to see whether the sentiment on our content is positive, negative, or neutral; the user engagement of our content; how the trends are changing with time.
                        <br/> <br/>In a nutshell, our readers' voices tell us how they feel about the content and how we present it.</div>
                        <div className="four" onClick={() => {
                            history.push("/Vogue")

                        }}>explore</div>
                    </div>
                    <div className="right">
                        <div className="btitle">BRANDS</div>
                        <div className="hone">
                            <div>ARCHITECTURAL DIGEST</div>
                            <div>ALLURE</div>
                            <div>ARS TECHNICA</div>
                            <div>BON APPÉTIT</div>
                            <div>CONDÉ NAST JOHANSENS</div>
                            <div>CONDÉ NAST TRAVELER</div>
                            <div>EPICURIOUS</div>
                            <div>GLAMOUR</div>
                            <div>GQ</div>
                        </div>
                        <div className="htwo">
                            <div>GQ STYLE</div>
                            <div>HOUSE & GARDEN</div>
                            <div>LA CUCINA ITALIANA</div>
                            <div>LOVE</div>
                            <div>L'UOMO</div>
                            <div>PITCHFORK</div>
                            <div>SELF</div>
                            <div>TATLER</div>
                            <div>TEEN VOGUE</div>
                        </div>
                        <div className="hthree">
                            <div>THEM</div>
                            <div>THE NEW YORKER</div>
                            <div>THE WORLD OF INTERIORS</div>
                            <div>VANITY FAIR</div>
                            <div className="brand">VOGUE</div>
                            <div>VOGUE BUSINESS</div>
                            <div>VOGUE GLOBAL NETWORK</div>
                            <div>WIRED</div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    Copyright 2021 Condé Nast. All rights reserved
                </div>
            </div>
        </div>
    );
}

export default App;
