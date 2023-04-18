// header component
const headers = Vue.createApp({
    data() {
        return {
            title: 'PhD Candidate',
            header: {
                university: [],
                mylinks: {
                    linkedIn: {},
                    googleScholar: {},
                    gitHub: {}
                }
            },
        }
    },
    mounted() {
        this.fetchData('./data/header.json')
    },
    methods: {
        getToday() {
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const today = new Date();
            // const d = today.getDate();
            const m = today.getMonth();
            const y = today.getFullYear();
            return `Last modified in ${months[m]}, ${y}`;
        },
        fetchData(filePath) {
            fetch(filePath)
                .then(res => res.json())
                .then(data => this.header = data)
        }
    }
});

// aboutme component
const aboutme = Vue.createApp({
    data() {
        return {
            title: 'About Me',
            data: {}
        }
    },
    mounted() {
        this.fetchData('./data/aboutme.json')
    },
    methods: {
        fetchData(filePath) {
            fetch(filePath)
                .then(res => res.json())
                .then(data => this.data = data)
        }
    }
});

// research interests component
const research = Vue.createApp({
    data() {
        return {
            title: 'Research Interests',
            data: {}
        }
    },
    mounted() {
        this.fetchData('./data/research.json')
    },
    methods: {
        fetchData(filePath) {
            fetch(filePath)
                .then(res => res.json())
                .then(data => this.data = data)
        }
    }
});

// work experience component
const work = Vue.createApp({
    data() {
        return {
            title: 'Working Experience',
            works: []
        }
    },
    mounted() {
        this.fetchData('./data/work.json')
    },
    methods: {
        fetchData(filePath) {
            fetch(filePath)
                .then(res => res.json())
                .then(data => this.works = data)
        }
    }
});

// publication component
const publication = Vue.createApp({
    data() {
        return {
            journalTitle: 'Journal Papers',
            conferenceTitle: 'Conference Papers',
            papers: []
        }
    },
    mounted() {
        this.fetchData('./data/publication.json')
    },
    methods: {
        fetchData(filePath) {
            fetch(filePath)
                .then(res => res.json())
                .then(data => this.papers = data)
        }
    }
});

// award component
const award = Vue.createApp({
    data() {
        return {
            title: 'Award',
            awards: []
        }
    },
    mounted() {
        this.fetchData('./data/award.json')
    },
    methods: {
        fetchData(filePath) {
            fetch(filePath)
                .then(res => res.json())
                .then(data => this.awards = data)
        }
    }
});

// service component
const service = Vue.createApp({
    data() {
        return {
            title: 'Service',
            services: []
        }
    },
    mounted() {
        this.fetchData('./data/service.json')
    },
    methods: {
        fetchData(filePath) {
            fetch(filePath)
                .then(res => res.json())
                .then(data => this.services = data)
        }
    }
});



headers.mount('#headers');
aboutme.mount('#about-me');
research.mount('#research-interest');
work.mount('#work-experience');
publication.mount('#publication');
award.mount('#award');
service.mount('#service');