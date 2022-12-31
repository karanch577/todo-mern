import { useState } from "react";
import TodosContext from "./TodosContext";

const TodosProvider = (props) => {
    const [showModal, setShowModal] = useState(false)
    const [showTaskEditModal, setShowTaskEditModal] = useState(false)
    const [showTaskAddModal, setShowTaskAddModal] = useState(false)
    const [isItemModified, setIsItemModified] = useState(false)
    const [isTodoModified, setIsTodoModified] = useState(false)
    const [isTaskModified, setIsTaskModified] = useState(false)
    const [idToEdit, setIdToEdit] = useState(null)
    const [idToDisplayTask, setIdToDisplayTask] = useState(null)

    return(
        <TodosContext.Provider value={{
            showModal,
            setShowModal,
            showTaskAddModal,
            setShowTaskAddModal,
            showTaskEditModal,
            setShowTaskEditModal,
            isItemModified,
            setIsItemModified,
            isTodoModified,
            setIsTodoModified,
            isTaskModified,
            setIsTaskModified,
            idToEdit,
            setIdToEdit,
            idToDisplayTask,
            setIdToDisplayTask
        }}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosProvider;