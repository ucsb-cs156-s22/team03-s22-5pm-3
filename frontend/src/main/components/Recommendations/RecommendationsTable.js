import OurTable, { _ButtonColumn } from "main/components/OurTable";
// import { useBackendMutation } from "main/utils/useBackend";
// import { useNavigate } from "react-router-dom";
// import { hasRole } from "main/utils/currentUser";

export default function RecommendationsTable({ recommendations, _currentUser }) {

    // const navigate = useNavigate();

    // const editCallback = (cell) => {
    //     navigate(`/ucsbdates/edit/${cell.row.values.id}`)
    // }

    const columns = [
        {
            Header: 'ID',
            accessor: 'id', 
        },
        {
            Header: 'Requester Email',
            accessor: 'requesterEmail', 
        },
        {
            Header: 'Professor Email',
            accessor: 'professorEmail',
        },
        {
            Header: 'Explanation',
            accessor: 'explanation',
        },
        {
            Header: 'Date Requested',
            accessor: 'dateRequested',
        },
        {
            Header: 'Date Needed',
            accessor: 'dateNeeded',
        },
        {
            Header: 'Done',
            id: 'done',
            accessor: (row, _rowIndex) => String(row.done)
        }
    ];

    const testid = "RecommendationsTable";

    const columnsToDisplay = columns;

    return <OurTable
        data={recommendations}
        columns={columnsToDisplay}
        testid={testid}
    />;
};