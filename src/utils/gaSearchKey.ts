const gaSearchKey = (label: string) => {
  window.gtag("event", "search_key", {
    event_category: "engagement",
    event_label: label
  });
};

export default gaSearchKey;
