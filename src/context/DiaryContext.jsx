import { createContext, useEffect, useReducer } from "react";

export const DiaryContext = createContext();

export const DIARY_ACTIONS = {
    INIT_ENTRIES: "INIT_ENTRIES",
    ADD_ENTRY: "ADD_ENTRY",
    DELETE_ENTRY: "DELETE_ENTRY",
    EDIT_ENTRY: "EDIT_ENTRY",
};

const diaryReducer = (state, action) => {
    switch (action.type) {
        case DIARY_ACTIONS.INIT_ENTRIES:
            return action.payload;

        case DIARY_ACTIONS.ADD_ENTRY:
            return [
                ...state,
                {
                    id: Date.now(),
                    tanggal: action.payload.tanggal,
                    judul: action.payload.judul,
                    isi_catatan: action.payload.isi_catatan,
                    suasana_hati: action.payload.suasana_hati,
                },
            ];

        case DIARY_ACTIONS.DELETE_ENTRY:
            return state.filter((entry) => entry.id !== action.payload.id);

        case DIARY_ACTIONS.EDIT_ENTRY:
            return state.map((entry) =>
                entry.id === action.payload.id
                    ? {
                          ...entry,
                          tanggal: action.payload.tanggal,
                          judul: action.payload.judul,
                          isi_catatan: action.payload.isi_catatan,
                          suasana_hati: action.payload.suasana_hati,
                      }
                    : entry
            );

        default:
            return state;
    }
};

export const DiaryProvider = ({ children }) => {
    const [entries, dispatch] = useReducer(diaryReducer, [], () => {
        const saved = localStorage.getItem("diaryEntries");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("diaryEntries", JSON.stringify(entries));
    }, [entries]);

    return (
        <DiaryContext.Provider value={{ entries, dispatch }}>
            {children}
        </DiaryContext.Provider>
    );
};
