import { useContext } from "react";
import { DIARY_ACTIONS, DiaryContext } from "../../context/DiaryContext";

export default function DiaryForm({ isEdit, setIsEdit, entryData, setEntryData }) {
    const { dispatch } = useContext(DiaryContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const { tanggal, judul, isi_catatan, suasana_hati } = entryData;
        if (!tanggal || !judul || !isi_catatan || !suasana_hati) return;

        if (isEdit) {
            dispatch({
                type: DIARY_ACTIONS.EDIT_ENTRY,
                payload: {
                    id: isEdit.id,
                    tanggal,
                    judul,
                    isi_catatan,
                    suasana_hati,
                },
            });
        } else {
            dispatch({
                type: DIARY_ACTIONS.ADD_ENTRY,
                payload: {
                    tanggal,
                    judul,
                    isi_catatan,
                    suasana_hati,
                },
            });
        }

        // Reset form
        setEntryData({
            tanggal: "",
            judul: "",
            isi_catatan: "",
            suasana_hati: "",
        });
        setIsEdit(null);
    };

    const handleCancel = () => {
        setEntryData({
            tanggal: "",
            judul: "",
            isi_catatan: "",
            suasana_hati: "",
        });
        setIsEdit(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEntryData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input
                type="date"
                name="tanggal"
                value={entryData.tanggal}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="judul"
                value={entryData.judul}
                onChange={handleChange}
                placeholder="Judul catatan"
                required
            />
            <textarea
                name="isi_catatan"
                value={entryData.isi_catatan}
                onChange={handleChange}
                placeholder="Isi catatan"
                rows="4"
                required
            />
            <input
                type="text"
                name="suasana_hati"
                value={entryData.suasana_hati}
                onChange={handleChange}
                placeholder="Suasana hati"
                required
            />
            <div style={{ display: "flex", gap: "10px" }}>
                <button type="submit" style={{ backgroundColor: 'black', color: 'white' }}>
                    {isEdit ? "Update" : "Add"}
                </button>
                {isEdit && (
                    <button type="button" onClick={handleCancel}>
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
}
