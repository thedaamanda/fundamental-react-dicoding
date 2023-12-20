import React from "react";
import PropTypes from 'prop-types';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import { useParams, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
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
            note: getNote(props.id)
        };

        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onArchiveHandler(id) {
        if(this.state.note.archived) {
            unarchiveNote(id);
            toast.success("Catatan dipulihkan dari arsip");
        } else {
            archiveNote(id);
            toast.success("Catatan berhasil diarsipkan");
        }

        this.props.navigate('/');
    }

    onDeleteHandler(id) {
        deleteNote(id);

        toast.success("Catatan telah dihapus");
        this.props.navigate('/');
    }

    render() {
        if (!this.state.note) {
            return <NotFound />;
        }

        return (
            <div>
                <section className="result-section">
                    <div className="padding-detail">
                        <div className="result-container">
                            <NoteDetail {...this.state.note} />
                        </div>
                    </div>
                </section>
                <DetailPageAction id={this.props.id} archived={this.state.note.archived} onArchive={this.onArchiveHandler} onDelete={this.onDeleteHandler} />
            </div>
        );
    }
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired,
}

export default DetailPageWrapper;
