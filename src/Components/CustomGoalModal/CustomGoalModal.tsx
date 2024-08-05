import React from 'react';
import styles from './CustomGoalModal.module.css'; // Make sure to create and style this CSS module

interface CustomGoalModalProps {
    isVisible: boolean;
    onClose: () => void;
}

const CustomGoalModal: React.FC<CustomGoalModalProps> = ({ isVisible, onClose }) => {
    if (!isVisible) {
        return null;
    }
 
    // must figure out how to keep localstorage/session here or needs to be implemented in another 


    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalBox}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <p>Created Popup/modal</p>
                <form>
                    <input placeholder="goal" />
                    <input placeholder="ETA?" />
                </form>
            </div>
        </div>
    );
};

export default CustomGoalModal;
