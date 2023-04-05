const fadeInElements = document.querySelectorAll(".scroll-fade-in");

const mvTransitions = {
  ids: ["mv_img", "mv_back", "mv_sakura", "mv_title", "prf"],
  count: 0,
};
const tlTransitions = {
  ids: ["tl_top", "tl_bg", "tl_title", "tl_content", "tl_bottom"],
  count: 0,
};

const mvFadeIn = () => {
  const id = mvTransitions.ids.find(
    (id) => id === mvTransitions.ids[mvTransitions.count]
  );
  const element = document.getElementById(id);
  element.style.opacity = 1;
  setTimeout(() => {
    if (mvTransitions.count < mvTransitions.ids.length - 1) {
      mvTransitions.count++;
      mvFadeIn();
    }
  }, 1000);
};

const tlFadeIn = () => {
  const id = tlTransitions.ids.find(
    (id) => id === tlTransitions.ids[tlTransitions.count]
  );
  const element = document.getElementById(id);
  element.style.opacity = 1;
  setTimeout(() => {
    if (tlTransitions.count < tlTransitions.ids.length - 1) {
      tlTransitions.count++;
      tlFadeIn();
    }
  }, 1000);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (mvTransitions.ids.includes(entry.target.id)) {
      if (entry.isIntersecting && mvTransitions.ids[0] === entry.target.id) {
        mvFadeIn();
      }
    }
    if (tlTransitions.ids.includes(entry.target.id)) {
      if (
        entry.isIntersecting &&
        tlTransitions.ids[0] === entry.target.id &&
        mvTransitions.count === mvTransitions.ids.length - 1
      ) {
        tlFadeIn();
      }
    }
  });
});

fadeInElements.forEach((element) => {
  observer.observe(element);
});
