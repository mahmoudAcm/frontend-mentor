const root = document.getElementById("root");

/**
 * @param {string} src image url
 * @param {string} url solution url
 */
function solution(src, url) {
  return `<div class="p-1 border shadow-xl flex flex-col h-fit gap-y-1 rounded">
    <div class="w-full h-[400px] rounded overflow-hidden relative">
      <div
        class="absolute inset-0 w-full h-full z-10 bg-center bg-cover"
        style="background-image: url('${src}');"
      ></div>
      <div
        class="absolute inset-0 w-full h-full z-0 bg-[linear-gradient(180deg,white,gray)]"
      ></div>
    </div>
    <a href="${url ?? "#"}" target="_blank">
      <button
        class="w-full rounded bg-gray-200 text-[gray] p-1 font-normal text-sm hover:text-gray-900"
      >
        View Live Preview
      </button>
    </a>
  </div>`;
}

solutions.forEach(({ src, url }) => {
  root.innerHTML += solution(src, url);
});
