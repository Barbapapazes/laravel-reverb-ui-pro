import './bootstrap';

window.Echo.channel('test-channel')
    .listen('TestEvent', (e) => {
        console.log(e);
    });
