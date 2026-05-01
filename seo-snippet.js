// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.optyxauto.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.optyxauto.com/","title_tag":"Paint Protection Film & Window Tinting Spokane | Optyx Auto","meta_description":"Elite Paint Protection Film, Ceramic Window Tinting, Auto Detailing, Paint Correction and Tesla services in Spokane. Premium automotive restyling and protection."},{"page_url":"https://www.optyxauto.com/ppf","title_tag":"Paint Protection Film Spokane Clear Bra Experts | Optyx Auto","meta_description":"Certified installers for premium Paint Protection Film and clear bra in Spokane. Protect your vehicle from rock chips, scratches, and UV damage with precision PPF."},{"page_url":"https://www.optyxauto.com/colorchangeppfwrap","title_tag":"Color Change Wrap Spokane Automotive Restyling | Optyx","meta_description":"Transform your vehicle with durable Color Change PPF wraps in Spokane. Over 300 colors, self-healing protection, and premium automotive restyling at Optyx Auto."},{"page_url":"https://www.optyxauto.com/ppf/sunroof-ppf","title_tag":"Sunroof PPF Spokane Glass Protection | Optyx Auto Studio","meta_description":"Protect your glass with premium Sunroof PPF in Spokane. Self-healing TPU film, UV and heat resistance, and crystal-clear clarity installed by Optyx Auto Studio."},{"page_url":"https://www.optyxauto.com/ppf/windshield-ppf","title_tag":"Windshield & Sunroof PPF Spokane Clear Bra | Optyx Auto","meta_description":"Shield your glass with advanced Windshield and Sunroof PPF in Spokane. Clear protection against chips, UV damage, and daily wear. Premium clear bra by Optyx."},{"page_url":"https://www.optyxauto.com/interiorexteriordetailing","title_tag":"Auto Detailing Spokane Interior & Exterior | Optyx Auto","meta_description":"Luxury auto detailing in Spokane. Deep interior cleaning, exterior restoration, and paint enhancement to keep your vehicle spotless, fresh, and protected."},{"page_url":"https://www.optyxauto.com/paintcorrection","title_tag":"Paint Correction Spokane Auto Detailing Experts | Optyx","meta_description":"Professional paint correction in Spokane. Remove swirls, scratches, and oxidation for a flawless, high-gloss finish. Ideal prep for PPF and ceramic coating."},{"page_url":"https://www.optyxauto.com/headlightrestore","title_tag":"Headlight Restoration Spokane Auto Detailing | Optyx","meta_description":"Restore cloudy headlights in Spokane with professional headlight restoration. Improve night visibility, enhance appearance, and avoid costly replacements."},{"page_url":"https://www.optyxauto.com/windowtint","title_tag":"Ceramic Window Tinting Spokane Auto Restyling | Optyx","meta_description":"Ceramic window tinting in Spokane. Block UV rays, reduce heat, and add privacy with premium ceramic window tint. Expert automotive restyling at Optyx Auto."}],"keywords":["Paint Protection Film Spokane","Ceramic Coating Spokane","Window Tinting Spokane","Color Change Wrap Spokane","Auto Detailing Spokane","Paint Correction Spokane","Tesla Services Spokane","Sunroof PPF Spokane","Ceramic Window Tint Spokane","Automotive Restyling Spokane","Clear Bra Spokane"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "AutoDetailing",
  "@id": "https://www.optyxauto.com/#localbusiness",
  "url": "https://www.optyxauto.com/",
  "name": "Optyx Auto Studio",
  "description": "Optyx Auto Studio in Spokane, WA specializes in elite automotive protection and restyling including paint protection film (PPF), ceramic window tinting, color change PPF wraps, ceramic coatings, paint correction, luxury interior and exterior detailing, Tesla protection packages, and sunroof and windshield PPF.",
  "image": [
    "https://static.wixstatic.com/media/4962bc_c57df8a1b6024b2c924571f2c9bb2db0%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/4962bc_c57df8a1b6024b2c924571f2c9bb2db0%7Emv2.png",
    "https://static.wixstatic.com/media/4962bc_6d460ec2b7c94dac9517bb0982048730~mv2.jpg/v1/fill/w_306,h_346,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8458.jpg",
    "https://static.wixstatic.com/media/4962bc_35f8ba46913f423bab660423f8af21ba~mv2.jpg/v1/fill/w_306,h_346,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_9686_edited.jpg",
    "https://static.wixstatic.com/media/4962bc_3ec62067eab6436f8ac4e0799d5a2417~mv2.jpg/v1/fill/w_306,h_346,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6557_edited_edited.jpg",
    "https://static.wixstatic.com/media/4962bc_754bbfff5b644addb777edbe23bd40ab~mv2.jpg/v1/fill/w_306,h_346,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_9643.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/4962bc_c57df8a1b6024b2c924571f2c9bb2db0%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/4962bc_c57df8a1b6024b2c924571f2c9bb2db0%7Emv2.png",
  "telephone": "+1-509-919-7139",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "805 E Houston Ave",
    "addressLocality": "Spokane",
    "addressRegion": "WA",
    "postalCode": "99208",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Spokane"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Stevens County"
    },
    {
      "@type": "AdministrativeArea",
      "name": "North Idaho"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.713,
    "longitude": -117.395
  },
  "priceRange": "$$",
  "sameAs": [
    "https://www.instagram.com",
    "https://www.facebook.com",
    "https://www.tiktok.com",
    "https://www.whatsapp.com"
  ],
  "hasMap": "https://www.google.com/maps/search/?api=1&query=805+E+Houston+Ave+Spokane+WA+99208",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-509-919-7139",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "en"
  },
  "serviceType": [
    "Paint Protection Film",
    "Ceramic Window Tinting",
    "Color Change PPF Wraps",
    "Ceramic Coatings",
    "Paint Correction",
    "Interior Detailing",
    "Exterior Detailing",
    "Headlight Restoration",
    "Tesla Protection Packages",
    "Sunroof PPF",
    "Windshield PPF",
    "Chrome Delete"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Paint Protection Film / PPF",
        "description": "Premium self-healing paint protection film installation to defend against stone chips, scratches, and environmental contaminants while maintaining a showroom finish."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Ceramic Window Tinting",
        "description": "Advanced ceramic window tinting that blocks UV rays, reduces heat and glare, and enhances privacy while preserving visibility."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Color Change PPF Wraps",
        "description": "Transformative color change paint protection film wraps offering over 300 colors, stunning finish, and durable paint protection."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Ceramic Coatings",
        "description": "Professional-grade ceramic coating services providing long-term gloss, hydrophobic properties, and protection from UV rays and chemical stains."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Paint Correction / Restoration",
        "description": "Single-stage, two-stage, and multi-stage paint correction packages to remove defects like swirls, scratches, oxidation, and water spots."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Luxury Interior & Exterior Detailing",
        "description": "Comprehensive interior and exterior detailing including deep cleaning, hot water extraction, leather treatment, and exterior decontamination and protection."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Tesla Protection Packages",
        "description": "Specialized Tesla wraps, paint protection film, and window tint services with extensive experience on Tesla vehicles."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Sunroof & Windshield PPF",
        "description": "TPU tinted sunroof PPF and premium glass PPF for windshields to protect from rock chips, UV damage, and environmental wear while maintaining clarity."
      }
    }
  ],
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Damon N"
      },
      "reviewBody": "The quality of work at Optyx is only rivaled by their amazing customer service and experience. I was recommended by my car dealership to go see them for ceramic tint, PPF, and detailing. I must say, I've never met a team with more attention to the small things that add up to me being a very happy customer and returning to their shop with a second vehicle to protect my investments.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Glenn P"
      },
      "reviewBody": "The folks at Optyx Auto Studio were highly recommended by a local auto body, and now we know why! This jewel of a business is family-owned and operated. We had them apply full-front PPF, ceramic coatings to all surfaces inside and out, and tinting to front passenger and driver windows.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Joey Knight"
      },
      "reviewBody": "Optyx Auto Studio is the best in the Spokane and surrounding areas. The attention to detail is incredible. I've had multiple vehicles brought in for PPF and window tint and I've never left disappointed. This is a family owned business and they go the extra mile to make sure everything is done correctly.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": 3
  },
  "hasFAQPage": {
    "@type": "FAQPage",
    "@id": "https://www.optyxauto.com/#faq",
    "name": "Optyx Auto Studio FAQs",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the advantages of ceramic window tinting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ceramic window tinting reduces heat, blocks harmful UV rays, and minimizes glare, all while enhancing your vehicle's style and comfort."
        }
      },
      {
        "@type": "Question",
        "name": "How long should I wait to roll down my windows after having ceramic window tint installed at Optyx Auto Studio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After having ceramic window tint installed at Optyx Auto Studio, it is essential to wait at least 5 to 7 days before rolling down your windows. This waiting period allows the tint adhesive to fully cure and bond properly to the glass, ensuring maximum durability and preventing peeling or bubbling."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a noticeable difference between dyed or carbon window tint and nano ceramic window tint at Optyx Auto Studio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Dyed tints primarily use a layer of dye to absorb heat and offer basic privacy. Carbon tints add carbon particles for better heat rejection and durability. Nano ceramic window tint uses microscopic ceramic particles that block up to 99% of harmful UV rays and significantly reduce infrared heat without interfering with electronic signals, offering superior performance, clarity, and longevity."
        }
      },
      {
        "@type": "Question",
        "name": "How do I care for my ceramic window tint after installation at Optyx Auto Studio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Avoid rolling down your windows for at least 5 to 7 days to allow the tint to fully cure. When cleaning, use a soft cloth or sponge with a mild, ammonia-free cleaning solution and avoid abrasive materials or harsh chemicals. Regular gentle cleaning will help preserve the tint’s heat rejection and UV protection properties and keep your windows clear."
        }
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
