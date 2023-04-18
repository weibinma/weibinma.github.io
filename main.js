// header component
const headers = Vue.createApp({
    data() {
        return {
            header: {
                myname: '',
                title: '',
                university: [],
                mylinks: {
                    linkedIn: {},
                    googleScholar: {},
                    gitHub: {}
                }
            },
            isLoaded: false
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
                .then(data => {this.header = data, this.isLoaded = true})
        }
    }
});

// aboutme component
const aboutme = Vue.createApp({
    data() {
        return {
            aboutMe: {},
            isLoaded: false
        }
    },
    mounted() {
        this.fetchData('./data/aboutme.json')
    },
    methods: {
        fetchData(filePath) {
            fetch(filePath)
                .then(res => res.json())
                .then(data => {this.aboutMe = data, this.isLoaded = true})
        }
    }
});

// research interests component
const research = Vue.createApp({
    data() {
        return {
            researchInterests: {},
            isLoaded: false
        }
    },
    mounted() {
        this.fetchData('./data/research.json')
    },
    methods: {
        fetchData(filePath) {
            fetch(filePath)
                .then(res => res.json())
                .then(data => {this.researchInterests = data, this.isLoaded = true})
        }
    }
});

// work experience component
const work = Vue.createApp({
    data() {
        return {
            workExperience: {},
            isLoaded: false
        }
    },
    mounted() {
        this.fetchData('./data/work.json')
    },
    methods: {
        fetchData(filePath) {
            fetch(filePath)
                .then(res => res.json())
                .then(data => {this.workExperience = data, this.isLoaded = true})
        }
    }
});

// publication component
const publication = Vue.createApp({
    data() {
        return {
            // journalTitle: 'Journal Papers',
            // conferenceTitle: 'Conference Papers',
            publications: {
                title: '',
                journal: {
                    title: '',
                    papers: []
                },
                conference: {
                    title: '',
                    papers: []
                }
            },
            isLoaded: false
        }
    },
    mounted() {
        this.fetchData('./data/publication.json')
    },
    methods: {
        fetchData(filePath) {
            fetch(filePath)
                .then(res => res.json())
                .then(data => {this.publications = data, this.isLoaded = true})
        }
    }
});

// award component
const award = Vue.createApp({
    data() {
        return {
            awards: {},
            isLoaded: false
        }
    },
    mounted() {
        this.fetchData('./data/award.json')
    },
    methods: {
        fetchData(filePath) {
            fetch(filePath)
                .then(res => res.json())
                .then(data => {this.awards = data, this.isLoaded = true})
        }
    }
});

// service component
const service = Vue.createApp({
    data() {
        return {
            services: {},
            isLoaded: false
        }
    },
    mounted() {
        this.fetchData('./data/service.json')
    },
    methods: {
        fetchData(filePath) {
            fetch(filePath)
                .then(res => res.json())
                .then(data => {this.services = data, this.isLoaded = true})
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