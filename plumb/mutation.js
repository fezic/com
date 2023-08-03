const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type = "childList" && mutation.addedNodes.length > 0) {
            const Nodes = mutation.addedNodes;
            Nodes.forEach((node) => {
                if (node.classList.contains('plumb_dot')) {
                    node.addEventListener('dragstart', (event) => {
                        // 记录元素原始的位置
                        offSetX = event.clientX - node.getBoundingClientRect().left;
                        offSetY = event.clientY - node.getBoundingClientRect().top;
                    });
                    node.addEventListener('dragend', (event) => {
                        _left = event.clientX - offSetX;
                        _top = event.clientY - offSetY;
                        if (((_left >= plumbArea.getBoundingClientRect().left) && (event.clientX + 120 - offSetX <= out.getBoundingClientRect().right - 2)) &&
                            ((_top >= plumbArea.getBoundingClientRect().top) && (event.clientY + 30 - offSetY <= out.getBoundingClientRect().bottom - 2))) {
                            node.style.position = 'absolute';
                            node.style.left = _left + 'px';
                            node.style.top = _top + 'px';
                        } else {
                            return;
                        }
                    });
                    node.addEventListener('dragover', (event) => {
                        event.preventDefault();
                    });
                }
            })
        }
    })
})
const observerConfig = {
    childList: true,
    subtree: true
};

observer.observe(menu, observerConfig);