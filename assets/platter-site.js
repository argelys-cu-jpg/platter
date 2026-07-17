(function () {
  const config = {
    cookUnityBaseUrl: "https://www.cookunity.com/",
    cookUnityTrackingParams: {
      utm_source: "platter",
      utm_medium: "editorial",
      utm_campaign: "review_vertical",
      utm_content: "platter_review_cta"
    }
  };

  function trackedCookUnityUrl(context) {
    const url = new URL(config.cookUnityBaseUrl);
    Object.entries(config.cookUnityTrackingParams).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
    if (context) url.searchParams.set("platter_cta", context);
    return url.toString();
  }

  document.querySelectorAll("[data-cookunity-cta]").forEach((link) => {
    link.href = trackedCookUnityUrl(link.dataset.ctaContext || "cookunity_cta");
    link.rel = "sponsored noopener";
  });
})();
