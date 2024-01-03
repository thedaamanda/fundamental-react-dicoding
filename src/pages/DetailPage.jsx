import React from "react";
import PropTypes from 'prop-types';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/network-data';
import { useParams, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import NotFound from "./NotFound";
import DetailPageAction from "../components/DetailPageAction"
import NoteDetail from "../components/NoteDetail"
import useLanguage from "../hooks/useLanguage"

function DetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const textToast = useLanguage('app');

    const [note, setNote] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        getNote(id).then(({ data }) => {
            setNote(data);
            setLoading(false);
        }).catch(() => {
            alert("Terjadi kesalahan saat mengambil data");
            setLoading(false);
        });
    }, [id]);

    const onArchiveHandler = async (id) => {
        let navigateTo = '/';

        if(note.archived) {
            await unarchiveNote(id);

            toast.success(textToast.message.toasts.success.unarchive);
            navigateTo = '/archives';
        } else {
            await archiveNote(id);

            toast.success(textToast.message.toasts.success.archive);
        }

        navigate(navigateTo);
    }

    const onDeleteHandler = async (id) => {
        await deleteNote(id);

        toast.success(textToast.message.toasts.success.delete);
        navigate('/');
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
            <DetailPageAction id={id} archived={note.archived || false} onArchive={onArchiveHandler} onDelete={onDeleteHandler} />
        </div>
    );
}

DetailPage.propTypes = {
    id: PropTypes.string,
    archived: PropTypes.bool,
    onArchive: PropTypes.func,
    onDelete: PropTypes.func,
};

export default DetailPage;
