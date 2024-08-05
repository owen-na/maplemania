import React, { useState } from 'react';
import CustomGoalModal from '../CustomGoalModal/CustomGoalModal'; // Adjust the path as necessary
import styles from "./TaskHolder.module.css"

interface HomePageProps {
    title: string;
}

const HomePage: React.FC<HomePageProps> = ({ title }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div className={styles.taskContainer}>
            <p>{title}</p>
            <button onClick={openModal}>Open Modal</button>
            <CustomGoalModal isVisible={isModalVisible} onClose={closeModal}  />
        </div>
    );
};

export default HomePage;
