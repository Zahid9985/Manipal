import naac from '../../assets/rank_part/naac.webp'
import aic from '../../assets/rank_part/all_ind.webp'
import grant from '../../assets/rank_part/grant.webp'
import world from '../../assets/rank_part/1761644352022_WES-2.webp'
import ranked from '../../assets/rank_part/ranked_58.webp'
import ranked_qs from '../../assets/rank_part/1761644352022_QS-2025.webp'

const RankingAccreditation = () => {
  const rankings = [
    { logo: ranked_qs, title: 'QS World Ranking' },
    { logo: naac, title: "Rajasthan's 1st NAAC A+" },
    { logo: aic, title: 'All India Council for Technical Education' },
    { logo: grant, title: 'University Grants Commission' },
    { logo: world, title: 'World Education Services' },
    { logo: ranked, title: "Ranked 58 amongst India's top universities in 2025" }
  ];

  // Duplicate rankings for seamless loop
  const duplicatedRankings = [...rankings, ...rankings];

  return (
    <section className="ranking" id="ranking">
      <div className="ranking-container">
        <div className="ranking-title">
          <h2>Ranking & Accreditation</h2>
          <p>How about getting a degree from the top ranked university?</p>
        </div>

        <div className="ranking-carousel">
          <div className="ranking-scroll-container">
            <div className="ranking-cards-wrapper">
              {duplicatedRankings.map((rank, index) => (
                <div className="ranking-card" key={index}>
                  <div className="ranking-logo">
                    <img src={rank.logo} alt={rank.title} />
                  </div>
                  <h3>{rank.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankingAccreditation;
