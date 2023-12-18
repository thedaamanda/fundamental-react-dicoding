import React from "react";
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import { useParams, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

function DetailPageWrapper() {
    const { id } = useParams();
    const navigate = useNavigate();

    return <DetailPage id={id} navigate={navigate}/>;
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getNote(props.id)
        };

        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onArchiveHandler(id) {
        if(this.state.notes.archived) {
            unarchiveNote(id);
        } else {
            archiveNote(id);
        }

        this.props.navigate('/');
    }

    onDeleteHandler(id) {
        deleteNote();

        this.props.navigate('/');
    }

    render() {
        if (!this.state.notes) {
            return <NotFound />;
        }

        return (
            <div className="note">
                Found
            </div>
        );
    }
}

export default DetailPageWrapper;
