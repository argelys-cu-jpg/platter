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

  document.querySelectorAll(".newsletter__form, .signup-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let status = form.parentElement.querySelector(".newsletter__status");
      if (!status) {
        status = document.createElement("div");
        status.className = "newsletter__status";
        status.setAttribute("role", "status");
        form.insertAdjacentElement("afterend", status);
      }
      status.textContent = "You're in. The first briefing lands this week.";
      form.reset();
    });
  });

  document.querySelectorAll(".recipe-search").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });

  document.querySelectorAll(".planner__options").forEach((group) => {
    group.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        group.querySelectorAll("button").forEach((b) => {
          b.classList.remove("is-selected");
          b.setAttribute("aria-pressed", "false");
        });
        button.classList.add("is-selected");
        button.setAttribute("aria-pressed", "true");
      });
    });
  });
})();
