import { Button, Modal } from "antd";
import { useEffect, useState } from "react";


interface ModalConfirmProps {
    title: string,
    content?: JSX.Element;
    confirm: () => void;
    cancel: () => void;
    showConfirmModal: boolean
    showButton?:boolean;
}


export function ModalConfirm(props: ModalConfirmProps) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        props.confirm()
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        props.cancel()
        setIsModalOpen(false);
    };

    useEffect(
        () => {

            if(props.showConfirmModal){
                setIsModalOpen(true);
            }else{
                setIsModalOpen(false);
            }

        }, [props.showConfirmModal]
    )

    return (
        <>
            {props.showButton && <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>}
            <Modal title={props.title} okText={"Confirm"} cancelText={"Cancel"} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {props.content}
            </Modal>
        </>
    );

}