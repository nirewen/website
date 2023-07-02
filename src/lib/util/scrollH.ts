export function scrollH(
    event: WheelEvent & {
        currentTarget: EventTarget & HTMLDivElement;
    }
) {
    event.cancelBubble = true;
    event.currentTarget.scrollLeft += event.deltaY;
}
