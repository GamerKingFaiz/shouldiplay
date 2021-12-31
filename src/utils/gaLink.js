const ga = (label) => {
    window.gtag("event", "clicked_link", {
      event_category: "engagement",
      event_label: label,
    });
  };

export default ga;