import styles from "./page.module.css";
import Background from "./Components/Background/Background";

import Contents from "./Components/Contents/Contents";

export default function AnimatedLanding() {
    return (
        <div className={"w-[100vw] h-[100vh] relative top-0"}>
            <Background />
            <Contents />
        </div>
    );
}