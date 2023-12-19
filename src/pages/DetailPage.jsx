import React from "react";
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import { useParams, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import DetailPageAction from "../components/DetailPageAction"
import NoteDetail from "../components/NoteDetail"

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
        deleteNote(id);

        this.props.navigate('/');
    }

    render() {
        if (!this.state.notes) {
            return <NotFound />;
        }

        return (
            <div>
                <section className="result-section">
                    <div className="padding-detail">
                        <div className="result-container">
                            <NoteDetail title={this.state.notes.title} body={this.state.notes.body} createdAt={this.state.notes.createdAt} />
                        </div>
                    </div>
                </section>
                <DetailPageAction id={this.props.id} archived={this.state.notes.archived} onArchive={this.onArchiveHandler} onDelete={this.onDeleteHandler} />
            </div>
        );
    }
}

export default DetailPageWrapper;
