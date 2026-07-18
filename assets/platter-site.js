(function () {
  const config = {
    partnerBaseUrl: "https://www.cookunity.com/",
    partnerTrackingParams: {
      utm_source: "platter",
      utm_medium: "editorial",
      utm_campaign: "review_vertical",
      utm_content: "platter_review_cta"
    }
  };

  function trackedPartnerUrl(context) {
    const url = new URL(config.partnerBaseUrl);
    Object.entries(config.partnerTrackingParams).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
    if (context) url.searchParams.set("platter_cta", context);
    return url.toString();
  }

  document.querySelectorAll("[data-partner-cta]").forEach((link) => {
    link.href = trackedPartnerUrl(link.dataset.ctaContext || "review_cta");
    link.rel = "sponsored noopener";
  });
})();
