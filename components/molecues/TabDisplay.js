import { useState } from "react";
import Tab from "../atoms/Tab";

export default function TabDisplay({ children }) {
    // grab the first child's title so we can set active Tab
    const firstTitle = children[0].props.title;
    const [activeTab, setActiveTab] = useState(firstTitle);

    const onClickTab = (title) => {
        setActiveTab(title);
    };
    return (
        <div className="tabs">
            <ul className="tabs__header flex justify-evenly">
                {children.map((child) => {
                    // grab title from child
                    const { title } = child.props;
                    return (
                        <Tab
                            key={title}
                            title={title}
                            activeTab={activeTab}
                            onClick={onClickTab}
                        />
                    );
                })}
            </ul>
            <div className="tabs__body">
                {children.map((child) => {
                    if (child.props.title !== activeTab) return undefined;
                    return child.props.children;
                })}
            </div>
        </div>
    );
}
