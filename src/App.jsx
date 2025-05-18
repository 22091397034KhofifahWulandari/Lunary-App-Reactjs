import './App.css';
import DiaryApp from './components/Diary/DiaryApp';

function App() {
  const brandName = 'Curhat';
  return (
    <>
      <h1> Selamat Datang di Aplikasi {brandName}!</h1>
      <MainContent />
    </>
  );
}

export default App;

const MainContent = () => {
  return (
    <>
      <p>Yuk Catat Setiap Momen Yang Terjadi, Simpan Sebagai Kenangan.</p>
      <DiaryApp />
    </>
  );
};
