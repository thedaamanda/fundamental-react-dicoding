import React from "react";
import PropTypes from 'prop-types';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/network-data';
import { useParams, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import NotFound from "./NotFound";
import DetailPageAction from "../components/DetailPageAction"
import NoteDetail from "../components/NoteDetail"

// function DetailPageWrapper() {
//     const { id } = useParams();
//     const navigate = useNavigate();

//     return <DetailPage id={id} navigate={navigate}/>;
// }

// class DetailPage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             note: getNote(props.id)
//         };

//         this.onArchiveHandler = this.onArchiveHandler.bind(this);
//         this.onDeleteHandler = this.onDeleteHandler.bind(this);
//     }

//     onArchiveHandler(id) {
//         if(this.state.note.archived) {
//             unarchiveNote(id);
//             toast.success("Catatan dipulihkan dari arsip");
//         } else {
//             archiveNote(id);
//             toast.success("Catatan berhasil diarsipkan");
//         }

//         this.props.navigate('/');
//     }

//     onDeleteHandler(id) {
//         deleteNote(id);

//         toast.success("Catatan telah dihapus");
//         this.props.navigate('/');
//     }

//     render() {
//         if (!this.state.note) {
//             return <NotFound />;
//         }

//         return (
//             <div>
//                 <section className="result-section">
//                     <div className="padding-detail">
//                         <div className="result-container">
//                             <NoteDetail {...this.state.note} />
//                         </div>
//                     </div>
//                 </section>
//                 <DetailPageAction id={this.props.id} archived={this.state.note.archived} onArchive={this.onArchiveHandler} onDelete={this.onDeleteHandler} />
//             </div>
//         );
//     }
// }

// DetailPage.propTypes = {
//     id: PropTypes.string.isRequired,
//     navigate: PropTypes.func.isRequired,
// }

function DetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [note, setNote] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchNote() {
            try {
                const { data } = await getNote(id);
                setNote(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        }

        fetchNote();
    }, []);

    const onArchiveHandler = async (id) => {
        if(note.archived) {
            await unarchiveNote(id);

            toast.success("Catatan dipulihkan dari arsip");
        } else {
            await archiveNote(id);

            toast.success("Catatan berhasil diarsipkan");
        }

        navigate('/');
    }

    const onDeleteHandler = async (id) => {
        await deleteNote(id);

        toast.success("Catatan telah dihapus");
        navigate('/');
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!note) {
        return <NotFound />;
    }

    return (
        <div>
            <section className="result-section">
                <div className="padding-detail">
                    <div className="result-container">
                        <NoteDetail {...note} />
                    </div>
                </div>
            </section>
            <DetailPageAction id={id} archived={note.archived} onArchive={onArchiveHandler} onDelete={onDeleteHandler} />
        </div>
    );
}

// DetailPage.propTypes = {
//     id: PropTypes.string,
//     navigate: PropTypes.func,
// }

export default DetailPage;
