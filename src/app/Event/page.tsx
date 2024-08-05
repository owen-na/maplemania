import styles from "./Event.module.css"

export default function Event() {
    return (
        <div className={styles.eventContent}>
            <div> 
                <p>We do understand that there are events going on in the Mapleworld.
                We apperciate your patience as we find ways to parse what we think are 
                noteable changes :&#41;
                </p>
                <br/>
                <div>
                    <h2>High Importance/Takeaways</h2>
                    <p>Current Mask Event: Farm for masks based on a droprate based on kill rate</p>
                    <p>Dream Lachlein: Daily and Weekly Login/rewards</p>
                    <p>MapleTour/StarTime: extra weeklies and timed rewards</p>
                </div>
            </div>
        </div>
    )
}