window.addEventListener("load", () => {
  makeGallery();
});

const makeGallery = () => {
  const closeModel = document.querySelector(".close-model");
  closeModel.addEventListener("click", () => {
    document.body.classList.remove("applyModel");
  });

  const gallery = document.querySelector(".gallery");
  const modelBox = document.querySelector(".model-box");
  const h2 = document.querySelector(".model-info h2");
  const p = document.querySelector(".model-info p");
  const leftModel = document.querySelector(".left-model");
  leftModel.addEventListener("click", function () {
    const index = parseInt(modelBox.getAttribute("data-index"), 10);
    if (index - 1 >= 0) {
      const { path, h2, p } = data[index - 1];
      displayModel(path, index - 1, h2, p);
    }
  });

  const rightModel = document.querySelector(".right-model");
  rightModel.addEventListener("click", function () {
    const index = parseInt(modelBox.getAttribute("data-index"), 10);
    if (index + 1 < data.length) {
      const { path, h2, p } = data[index + 1];
      displayModel(path, index + 1, h2, p);
    }
  });

  function displayModel(src, index, h2_textContent, p_textContent) {
    document.body.classList.add("applyModel");
    modelBox.style.backgroundImage = `url(${src})`;

    modelBox.setAttribute("data-index", index);

    h2.textContent = h2_textContent;
    p.textContent = p_textContent;
  }

  data.forEach(({ path, alt, h2, p }, index) => {
    const article = document.createElement("article");
    article.setAttribute("data-index", index);
    article.classList.add("img-container");
    const img = document.createElement("img");
    img.src = path;
    img.alt = alt;
    img.classList.add("img");
    img.addEventListener("click", function (event) {
      const img = event.target;
      const imgContainer = img.parentNode;

      const imgContent = imgContainer.children[1];
      const [imgContentH2, imgContentP] = imgContent.children;
      displayModel(
        img.src,
        imgContainer.getAttribute("data-index"),
        imgContentH2.textContent,
        imgContentP.textContent
      );
    });
    const div = document.createElement("div");
    div.classList.add("img-content");
    const heading2 = document.createElement("h2");
    heading2.textContent = h2;
    const paragraph = document.createElement("p");
    paragraph.textContent = p;

    div.appendChild(heading2);
    div.appendChild(paragraph);

    article.appendChild(img);
    article.appendChild(div);
    gallery.appendChild(article);
  });
};

const data = [
  {
    path: "./static/img01.jpg",
    alt: "standing man watching star at night",
    h2: "magna feugiat lorem",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    path: "./static/img02.jpg",
    alt: "cloud above mountain",
    h2: "Nisl adipiscing",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    path: "./static/img03.jpg",
    alt: "rocky desert",
    h2: "tempus aliquam veroeros",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    path: "./static/img04.jpg",
    alt: "lake between two mountains",
    h2: "aliquam ipsum sed dolore",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    path: "./static/img05.jpg",
    alt: "road on mountain",
    h2: "cursis aliquam nisl",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    path: "./static/img06.jpg",
    alt: "man sitting above mountain edge ",
    h2: "sed consequat phasellus",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    path: "./static/img07.jpg",
    alt: "glass building",
    h2: "mauris id tellus arcu",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    path: "./static/img08.jpg",
    alt: "open hand of a girl",
    h2: "nunc vehicula id nulla",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    path: "./static/img09.jpg",
    alt: "beach with high buildings",
    h2: "neque et faucibus viverra",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    path: "./static/img10.jpg",
    alt: "foggy mountains",
    h2: "mattis ante fermentum",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    path: "./static/img11.jpg",
    alt: "back photo of a man wearing cap and coat",
    h2: "sed ac elementum arcu",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    path: "./static/img12.jpg",
    alt: "high end tree",
    h2: "vehicula id nulla dignissim",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
];
