import Header from '../components/Header';
import Playlist from '../components/Playlist';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Christmas Song',
  description: 'Shaoli Music App',
};

export default function Home() {
  const playlists = [
    {
      title: "Shaoli's Christmas Pick",
      src: "https://www.youtube.com/embed/playlist?list=PLFAB49EF9064AE9A1"
    },
    {
      title: "Shaoli's New Year Pick",
      src: "https://www.youtube.com/embed/playlist?list=PLMxIQXeV5qvFwqFKhKwW6GLB8NExuY7Wt"
    },
    {
      title: "My Music",
      src: "https://www.youtube-nocookie.com/embed/videoseries?si=dYChR6DwV9hTxEin&list=PL9192D4B6F8B1CB94"
    },
    {
      title: "Karaoke",
      src: "https://www.youtube.com/embed/videoseries?list=PLMxIQXeV5qvHU9kO5aRR1_RpvIAZk68qu"
    },
    {
      title: "Tea Time",
      src: "https://www.youtube.com/embed/videoseries?si=UBZC5NNNTravvfpa&list=PLMxIQXeV5qvGTsd7DRMNqVajK3B1x5wT5"
    },
    {
      title: "中文歌",
      src: "https://www.youtube-nocookie.com/embed/videoseries?si=xqhqC6RXMwW0IFq7&list=PL7BEDD0EAF1B5CEBA"
    }
  ];

  return (
    <main className="app-container">
      <Header />
      {playlists.map((playlist, index) => (
        <Playlist key={index} title={playlist.title} src={playlist.src} />
      ))}
      <Footer />
    </main>
  );
}
