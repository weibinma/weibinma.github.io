const work = Vue.createApp({
    data() {
        return {
            works: [
                {id: "intern1", company: "Meta (Facebook)", title: "Software Engineer Intern, Systems and Infrastructure (PhD)", date: "Jun 2022 - Sep 2022", location: "Menlo Park, CA"},
                {id: "intern2", company: "Marion Surgical", title: "Data Engineer Intern", date: "May 2018 - Aug 2018", location: "Buffalo, NY"},
                {id: "fulltime1", company: "Tianma Microelectronics", title: "Test Device Engineer", date: "July 2014 - Feb 2016", location: "Xiamen, China"}
            ]
        }
    },
});

work.mount('#work-experience');

const publication = Vue.createApp({
    data() {
        return {
            journal: [{
                id: "tsc2022", 
                title: "Time-Constrained Service Handoff for Mobile Edge Computing in 5G", 
                authors: "Nafiseh Sharghivand, Lena Mashayekhy, <strong>Weibin Ma</strong>, Schahram Dustdar", 
                publisher: "IEEE Transactions on Services Computing, Sep 2022 (<strong>Impact Factor: 11.019</strong>)", 
                url: "https://ieeexplore.ieee.org/document/9899742", 
                pdf:""}
            ], 
            conference: [{
                id: "ucc2021", 
                title: "QoS-Aware 5G Component Selection for Content Delivery in Multi-access Edge Computing", 
                authors: "Erfan Farhangi Maleki, <strong>Weibin Ma</strong>, Lena Mashayekhy and Humberto La Roche", 
                publisher: "IEEE/ACM UCC, Leicester, UK, Dec 2021", 
                url: "https://dl.acm.org/doi/10.1145/3468737.3494101", 
                pdf: ""
            },
            {
                id: "cloud2021", 
                title: "Quality-Aware Video Offloading in Mobile Edge Computing: A Data-driven Two-stage Stochastic Optimization", 
                authors: "<strong>Weibin Ma</strong> and Lena Mashayekhy", 
                publisher: "IEEE CLOUD, Virtual, September 2021", 
                url: "https://ieeexplore.ieee.org/document/9582261", 
                pdf: "./files/cloud_2021.pdf"
            },
            {
                id: "icdcs2021", 
                title: "Poster: Adaptive Video Offloading in Mobile Edge Computing", 
                authors: "<strong>Weibin Ma</strong> and Lena Mashayekhy", 
                publisher: "IEEE ICDCS, Virtual, July 2021", 
                url: "https://ieeexplore.ieee.org/document/9546493", 
                pdf: "./files/icdcs_poster_2021.pdf"
            },
            {
                id: "edgecom2020", 
                title: "Truthful Computation Offloading Mechanisms for Edge Computing", 
                authors: "<strong>Weibin Ma</strong> and Lena Mashayekhy", 
                publisher: "IEEE EdgeCom, Virtual, August 2020", 
                url: "https://ieeexplore.ieee.org/document/9170974", 
                pdf: "./files/edgecom_2020.pdf"
            },
            {
                id: "ucc2019", 
                title: "Privacy-by-Design Distributed Offloading for Vehicular Edge Computing", 
                authors: "<strong>Weibin Ma</strong> and Lena Mashayekhy", 
                publisher: "IEEE/ACM UCC, Auckland, New Zealand, December 2019", 
                url: "https://dl.acm.org/doi/10.1145/3344341.3368804", 
                pdf: ""
            },
            {
                id: "iciot2019", 
                title: "A Strategic Game for Task Offloading among Capacitated UAV-Mounted Cloudlets", 
                authors: "<strong>Weibin Ma</strong>, Xuanzhang Liu, and Lena Mashayekhy", 
                publisher: "IEEE ICIOT, Milan, Italy, July 2019", 
                url: "https://ieeexplore.ieee.org/document/8815659", 
                pdf: "./files/iciot_2019.pdf"
            }
        ]
    }
}});

publication.mount('#publication');

const award = Vue.createApp({
    data() {
        return {
            awards: [
                {id: "cis2021", awardName: "CIS Outstanding Graduate Student Award, University of Delaware, 2021", url: "https://www.cis.udel.edu/2021/05/14/congratulations-to-the-2021-cis-honors-day-award-recipients"},
                {id: "cis2020", awardName:"CIS Distinguished Graduate Student Award, University of Delaware, 2020", url:"https://www.cis.udel.edu/2020/05/28/congratulations-to-2020-cis-honors-day-award-recipients"},
                {id: "pda2019", awardName:"Professional Development Award, University of Delaware, 2019", url:""},
                {id: "nsfsec2019", awardName:"NSF Student Travel Grant, ACM/IEEE SEC, 2019", url:""}
            ]
        }
    }
});

award.mount('#award');

const service = Vue.createApp({
    data() {
        return {
            services: [
                {id: "coordination2022", confName: "Subreviewer in the 24th International Conference on Coordination Models and Languages (COORDINATION 2022)"},
                {id: "fmec2021", confName: "TPC in the 6th International Conference on Fog and Mobile Edge Computing (FMEC 2021)"},
                {id: "fmec2020", confName: "TPC in the 5th International Conference on Fog and Mobile Edge Computing (FMEC 2020)"}
            ]
        }
    },
});

service.mount('#service');