import React from "react";
import './index.scss'

import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import events from "./events.json";

//import "./styles.css";

function Timelime() {
    return (
        <div
            className="Timeline"
        >
            <h1>Timeline</h1>
            <VerticalTimeline>
                {events.map(event => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={event.date}
                        iconStyle={{ background: "#27b5db", color: "#fff" }}
                    >
                        <h3
                            className="vertical-timeline-element-title"
                            dangerouslySetInnerHTML={{ __html: event.event }}
                        />
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
}

export default Timelime
