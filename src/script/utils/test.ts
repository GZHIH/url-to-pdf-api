//

export default () => {
    console.log('VITE_APP_TITLE', import.meta.env.VITE_APP_TITLE);
    let a = 0;
    for (let i = 0; i < 1000000000; i++) {
        a = i;
    }
    console.log('VITE_APP_TITLE', import.meta.env.VITE_APP_TITLE);
};
