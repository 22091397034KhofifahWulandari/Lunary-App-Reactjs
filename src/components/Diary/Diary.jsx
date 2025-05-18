export default function Diary({ entry, deleteEntry, editEntry }) {
  return (
    <li
      key={entry.id}
      style={{
        borderBottom: "1px #ccc solid",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ margin: 0 }}>{entry.judul}</h3>
        <small>{entry.tanggal}</small>
      </div>
      <p style={{ margin: "5px 0" }}>{entry.isi_catatan}</p>
      <small>Suasana Hati: {entry.suasana_hati}</small>

      <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
        <button onClick={() => deleteEntry(entry.id)}>Delete</button>
        <button onClick={() => editEntry(entry)}>Edit</button>
      </div>
    </li>
  );
}
