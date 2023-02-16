const colOne = document.getElementById("colOne");
const colTwo = document.getElementById("colTwo");
const colThree = document.getElementById("colThree");
const cols = [colOne, colTwo, colThree];

/**
 * @param {Event} evt
 */
const openLivePreview = (evt) => {
  window.open(evt.target.dataset.livePreview, "_blank");
};

/**
 * @param {Event} evt
 */
const openSourceCode = (evt) => {
  window.open(evt.target.dataset.code, "_blank");
};

/**
 * @param {string} src image url
 * @param {string} livePreviewLink
 * @param {string} sourceCodeLink
 */
function solution(src, livePreviewLink, sourceCodeLink) {
  return `<div class="w-full h-fit p-1 rounded-lg bg-white shadow-md border group">
  <div class="w-full h-fit">
    <img
      alt="project"
      src="${src}"
      draggable="false"
      class="object-cover object-center h-full rounded-lg cursor-pointer"
      data-live-preview="${livePreviewLink}"
      onclick="openLivePreview(event)"
    />
  </div>
  <button
    class="w-full flex transition-colors justify-center group-hover:text-black items-center gap-2 py-1 mt-1 bg-gray-100 text-gray-500 font-semibold text-sm rounded-sm"
    data-code=${sourceCodeLink}
    onclick="openSourceCode(event)"
  >
    View Code
    <svg
      data-arrow=""
      width="16px"
      height="16px"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
    >
      <path
        d="M6 12h12.5m0 0l-6-6m6 6l-6 6"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  </button>
</div>`;
}

function render() {
  let step = 0,
    size = 0;
  for (let i = 0; i < 3; i++) {
    cols[i].innerHTML = "";
  }
  while (size < solutions.length) {
    const { src, livePreviewLink, sourceCodeLink } = solutions[size];
    cols[step].innerHTML += solution(src, livePreviewLink, sourceCodeLink);
    size++;
    step++;
    step %= 3;
  }
}

render();
