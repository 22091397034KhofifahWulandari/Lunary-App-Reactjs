export default function Diary({ entry, deleteEntry, editEntry }) {
  return (
    <li>
      <div className="header">
        <h3>{entry.judul}</h3>
        <small>{entry.tanggal}</small>
      </div>
      <p>{entry.isi_catatan}</p>
      <small className="suasana-hati">Suasana Hati: {entry.suasana_hati}</small>
      <div className="buttons">
        <button onClick={() => editEntry(entry)}>Edit</button>
        <button onClick={() => deleteEntry(entry.id)}>Delete</button>
      </div>
    </li>
  );
}
