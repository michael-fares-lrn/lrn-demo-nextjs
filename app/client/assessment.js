'use client'
import { useEffect } from "react";

export default function Assessment({signedRequest}) {
    useEffect(() => {
        const script = document.createElement("script")
        // CHANGE THE LTS VERSION HERE IF NEEDED FOR TESTING
        script.src ="https://items.learnosity.com/?latest-lts"
        script.async = true
        script.onload = () => {
            const callbacks = {
                errorListener: function (err) {
                    //callback to occur on error
                    console.log("There was an error, details: ", err);
        
                },
                readyListener: function () {
                    console.log("Learnosity Items API has been successfully initialized.");
                },
            };
            const itemsApp = LearnosityItems.init(
                signedRequest,
                callbacks
            );
            window.itemsApp = itemsApp;
        }
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    
    }, []);

    return (
        <div className="shadow-xl p-3">
             <div id="learnosity_assess"></div>
        </div>
       
    )
}