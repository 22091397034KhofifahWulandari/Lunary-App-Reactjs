import { useState } from "react";
import { DiaryProvider } from "../../context/DiaryContext";
import DiaryForm from "./DiaryForm";
import DiaryList from "./DiaryList";

export default function DiaryApp() {
    const [entryData, setEntryData] = useState({
        tanggal: "",
        judul: "",
        isi_catatan: "",
        suasana_hati: "",
    });
    const [isEdit, setIsEdit] = useState(null);

    return (
        <DiaryProvider>
            <div className="container">
                <h1 className="text-center">Diary App</h1>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <DiaryForm
                            entryData={entryData}
                            setEntryData={setEntryData}
                            isEdit={isEdit}
                            setIsEdit={setIsEdit}
                        />
                        <DiaryList
                            setIsEdit={setIsEdit}
                            setEntryData={setEntryData}
                        />
                    </div>
                </div>
            </div>
        </DiaryProvider>
    );
}
