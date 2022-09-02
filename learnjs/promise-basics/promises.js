function delay(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

delay(2000).then(() => console.log("выполнилось через 2 секунды"));
