import React from "react";
import "./styles.css";

type Props = {
    count: number;
    title: string
}
export default function Index({count, title}: Props) {
    return (
        <div className="widget">
            <h3 className="widget-title">{title}</h3>
            <p className="count">{count}</p>
        </div>
    );
};
