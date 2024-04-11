import React from 'react';
import styles from './Modal.module.css';

const ModalContent = ({ content }) => {
    return (
        <div className={styles.contentWrapper}>
            {content.split('●').map((paragraph, index) => (
                <p key={index} className={index === 0 ? styles.firstParagraph : styles.otherParagraphs}>
                    {paragraph}
                </p>
            ))}
        </div>
    );
};

const Modal = ({ content, onClose }) => {
    return (
        <div className={styles.modalBackdrop} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <ModalContent content={content} />
            </div>
        </div>
    );
};

export default Modal;
