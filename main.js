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
                },
                hrBackgroundImage: ''
            }
        }
    },
    mounted() {
        this.fetchData('./data/header.json')
    },
    methods: {
        fetchData(filePath) {
            fetch(filePath)
                .then(res => res.json())
                .then(data => this.header = data)
        }
    }
});


// menu component
const menu = Vue.createApp({
    data() {
        return {
            menuData: {},
        }
    },
    mounted() {
        this.fetchData('./data/menu.json')
    },
    methods: {
        fetchData(filePath) {
            fetch(filePath)
                .then(res => res.json())
                .then(data => this.menuData = data)
        },
        showMenu() {
            const menuButton = document.getElementById("sub-menu");
            if (menuButton.style.display === "none" || !menuButton.style.display) {
                menuButton.style.display = "block";
            } else {
                menuButton.style.display = "none";
            }
        }
    }
});


// aboutme component
const aboutme = Vue.createApp({
    data() {
        return {
            aboutMe: {},
        }
    },
    mounted() {
        this.fetchData('./data/aboutme.json')
    },
    methods: {
        fetchData(filePath) {
            fetch(filePath)
                .then(res => res.json())
                .then(data => this.aboutMe = data)
        }
    }
});


// research interests component
const research = Vue.createApp({
    data() {
        return {
            researchInterests: {},
        }
    },
    mounted() {
        this.fetchData('./data/research.json')
    },
    methods: {
        fetchData(filePath) {
            fetch(filePath)
                .then(res => res.json())
                .then(data => this.researchInterests = data)
        }
    }
});

// work experience component
const work = Vue.createApp({
    data() {
        return {
            workExperience: {},
        }
    },
    mounted() {
        this.fetchData('./data/work.json')
    },
    methods: {
        fetchData(filePath) {
            fetch(filePath)
                .then(res => res.json())
                .then(data => this.workExperience = data)
        }
    }
});

// publication component
const publication = Vue.createApp({
    data() {
        return {
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
            }
        }
    },
    mounted() {
        this.fetchData('./data/publication.json')
    },
    methods: {
        fetchData(filePath) {
            fetch(filePath)
                .then(res => res.json())
                .then(data => this.publications = data)
        }
    }
});

// award component
const award = Vue.createApp({
    data() {
        return {
            awards: {},
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
            services: {},
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


// footer component
const footer = Vue.createApp({
    data() {
        return {
            footers: {},
        }
    },
    mounted() {
        this.fetchData('./data/footer.json')
    },
    methods: {
        fetchData(filePath) {
            const editDate = this.getToday();
            const template = {'text': 'Website template', 'link': 'https://github.com/weibinma/weibinma.github.io'}
            fetch(filePath)
                .then(res => res.json())
                .then(data => {
                    this.footers = {...data, ...editDate, ...template}
                })
        },
        getToday() {
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const today = new Date();
            const d = today.getDate();
            const m = today.getMonth();
            const y = today.getFullYear();
            return { 'year': y, 'month': months[m], 'date': d };
        },
    }
});



headers.mount('#headers');
menu.mount('#menu');
aboutme.mount('#about-me');
research.mount('#research-interest');
work.mount('#work-experience');
publication.mount('#publication');
award.mount('#award');
service.mount('#service');
footer.mount('#footer');