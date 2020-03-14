function Portfolio(props) {
  return (
    <ul className="Portfolio-sites">
      {props.sites.map(site => (
        <li key={site}>
          <a href="http://localhost:8888/Beauty/" target="_blank">
            {site}
          </a>
        </li>
      ))}
    </ul>
  );
}

Portfolio.defaultProps = {
  sites: [
    "Beauty Site",
    "Cosmetics Site",
    "Restaurant Site",
    "Sports Site",
    "Music Site",
    "Legal Site"
  ]
};

export default Portfolio;
