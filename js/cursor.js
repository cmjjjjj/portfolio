// cursor.js

// 1. 마우스 움직임에 따라 커서 이동
document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor-ring");
    if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    }
});

// 2. 마우스 클릭 시 색 변경 (+ 애니메이션)
document.addEventListener("mousedown", () => {
    const cursor = document.querySelector(".cursor-ring");
    if (cursor) {
        cursor.classList.add("click");
    }
});

document.addEventListener("mouseup", () => {
    const cursor = document.querySelector(".cursor-ring");
    if (cursor) {
        setTimeout(() => {
            cursor.classList.remove("click");
        }, 150); // 0.15초 후 다시 흰색으로 복귀
    }
});
