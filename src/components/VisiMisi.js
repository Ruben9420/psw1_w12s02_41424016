import React from 'react';
import './VisiMisi.css';  // CSS untuk visi misi

const VisiMisi = () => {
  return (
    <div className="visi-misi-container">
      <div className="section">
        <h2>Visi SMA Budhaya</h2>
        <p>
          Menjadi sekolah unggul yang mencetak generasi muda berkarakter, berwawasan luas, dan siap menghadapi tantangan masa depan dengan keunggulan dalam bidang akademik dan non-akademik.
        </p>
      </div>

      <div className="section">
        <h2>Misi SMA Budhaya</h2>
        <ul>
          <li>Menyelenggarakan pendidikan yang berkualitas dan berkarakter untuk membentuk pribadi yang cerdas dan berbudi pekerti luhur.</li>
          <li>Mengembangkan potensi siswa dalam berbagai bidang, baik akademik, seni, olahraga, maupun kepemimpinan.</li>
          <li>Mewujudkan lingkungan sekolah yang mendukung kreativitas, inovasi, dan integritas.</li>
          <li>Menjalin kerjasama yang baik dengan orang tua, masyarakat, dan berbagai pihak terkait untuk mendukung perkembangan pendidikan siswa.</li>
        </ul>
      </div>
    </div>
  );
};

export default VisiMisi;
