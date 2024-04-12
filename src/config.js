export default [
    {
        name: 'app1',
        devEntry: 'http://localhost:8081/app1',
        prodEntry: '/app1/index.html',
        container: '#container',
        activeRule: '/app1',
    },
    {
        name: 'app2',
        devEntry: '//localhost:8082',
        prodEntry: '/app2/index.html',
        container: '#container',
        activeRule: '/app2',
    }
]