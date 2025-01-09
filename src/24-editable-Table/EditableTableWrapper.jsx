import EditableTable from './EditableTable'


const EditableTableWrapper = () => {
    return (
        <EditableTable
        initalData={[
                {
                    id: 1,
                    name: 'bob',
                    position: 'react developer',
                    salary: 10000,
                    salaryEdit: false,
                },
                {
                    id: 2,
                    name: 'Lily',
                    position: 'java developer',
                    salary: 50000,
                    salaryEdit: false,
                },
                {
                    id: 3,
                    name: 'bob',
                    position: 'vue developer',
                    salary: 1000,
                    salaryEdit: false,
                },
            ]}

        />
    )
}

export default EditableTableWrapper