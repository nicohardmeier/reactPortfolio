import React, { useState } from 'react';
import ProjectCard from '../card/ProjectCard';
import { useSelector } from "react-redux";

import './gallery.scss';

const items = [
    {
        id:0,
        title: "NG CMS",
        imgSrc: require("../../assets/img/ng_cms.jpg"),
        text:
            "Content Management System made with Angular 5 and Firebase. A blog front side and an admin panel to manage the posts stored in Firestore.",
        url: "https://nicohardmeier.github.io/NgCMS_portfolio/",
        tag: "angular",
        stack: [
            {
                name: "Angular 5",
                icon: "devicon-angularjs-plain"
            },
            {
                name: "Typescript",
                icon: "devicon-typescript-plain"
            },
            {
                name: "Firebase",
                icon: "devicon-angularjs-plain"
            }
        ]
    },
    {
        id:1,
        title: "Portfolio",
        imgSrc: require("../../assets/img/portfolio.png"),
        text: "This website was made with React Hooks, Redux and Material UI",
        url: "https://nicohardmeier.github.io/ytdj/",
        tag: "react",
        stack: [
            {
                name: "React Hooks",
                icon: "devicon-react-plain"
            },
            {
                name: "Redux",
                icon: "devicon-react-plain"
            },
            {
                name: "Material UI",
                icon: "devicon-react-plain"
            },
            {
                name: "SASS",
                icon: "devicon-sass-original"
            }
        ]
    },
    {
        id:2,
        title: "Le Parfum",
        imgSrc: require("../../assets/img/leparfum.png"),
        text: "This website was made with Vue js",
        url: "http://leparfumaromas.com.ar",
        tag: "vue",
        stack: [
            {
                name: "Vue js",
                icon: "devicon-vuejs-plain"
            },
            {
                name: "SASS",
                icon: "devicon-sass-original"
            }
        ]
    },
    {
        id:3,
        title: "Tacitus Drum Machine",
        imgSrc: require("../../assets/img/tacitus_drum_machine.png"),
        text:
            "Prototype of a Electronic Music Drum Machine made with Howler and Nexus UI",
        url: "https://nicohardmeier.github.io/tacitusdm/",
        tag: "javascript",
        stack: [
            {
                name: "Javascript",
                icon: "devicon-javascript-plain"
            },
            {
                name: "JQuery",
                icon: "devicon-jquery-plain"
            },
            {
                name: "Howler Js",
                icon: "devicon-javascript-plain"
            },
            {
                name: "Nexus UI",
                icon: "devicon-javascript-plain"
            },
            {
                name: "Bootstrap",
                icon: "devicon-bootstrap-plain"
            },
        ]
    },
    {
        id:4,
        title: "ADMIN PANEL",
        imgSrc: require("../../assets/img/admin_Dashboard.jpg"),
        text:
            "Admin Panel made with Angular 5 and Firebase",
        url: "https://nicohardmeier.github.io/NgCMS_portfolio/",
        tag: "angular",
        stack: [
            {
                name: "Angular 5",
                icon: "devicon-angularjs-plain"
            },
            {
                name: "Firebase",
                icon: "devicon-angularjs-plain"
            }
        ]
    },
    {
        id:5,
        title: "Chat Room",
        imgSrc: require("../../assets/img/chatroom.jpg"),
        text:
            "Simple chatrrom created with Angular, Firebase to manage login and Firestore to store messages",
        url: "https://nicohardmeier.github.io/chatroom/",
        tag: "angular",
        stack: [
            {
                name: "Angular 5",
                icon: "devicon-angularjs-plain"
            },
            {
                name: "Angular Material",
                icon: "devicon-angularjs-plain"
            },
            {
                name: "Bootstrap",
                icon: "devicon-bootstrap-plain"
            },
            {
                name: "Firebase",
                icon: "devicon-angularjs-plain"
            },
            {
                name: "Rxjs",
                icon: "devicon-angularjs-plain"
            }
        ]
    },
    {
        id:6,
        title: "Lorena Canals",
        imgSrc: require("../../assets/img/lorena_canals.jpg"),
        text:
            "E-commerce development with Prestashop",
        url: "https://lorenacanals.com",
        tag: "prestashop",
        stack: [
            {
                name: "Prestashop 1.6",
                icon: "fa fa-code"
            },
            {
                name: "CSS3",
                icon: "fa fa-css3"
            },
            {
                name: "Bootstrap",
                icon: "devicon-bootstrap-plain"
            },
            {
                name: "JQuery",
                icon: "devicon-jquery-plain"
            },
            {
                name: "MySql",
                icon: "devicon-mysql-plain"
            }
        ]
    },
    {
        id:7,
        title: "You Tube Dj Battle",
        imgSrc: require("../../assets/img/youtubedj.jpg"),
        text: "WebApp to make youtube playlists",
        url: "https://nicohardmeier.github.io/ytdj/",
        tag: "angular",
        stack: [
            {
                name: "Angular 5",
                icon: "devicon-angularjs-plain"
            },
            {
                name: "Angular Material",
                icon: "devicon-angularjs-plain"
            },
            {
                name: "Bootstrap",
                icon: "devicon-bootstrap-plain"
            },
            {
                name: "Firebase",
                icon: "devicon-angularjs-plain"
            }
        ]
    },
    {
        id:8,
        title: "Der Die Das Game",
        imgSrc: require("../../assets/img/derdiedas.jpg"),
        text: "Javascript game for learning German",
        url: "https://nicohardmeier.github.io/der_die_das/",
        tag: "javascript",
        stack: [
            {
                name: "HTML5",
                icon: "fa fa-html5"
            },
            {
                name: "Javascript",
                icon: "devicon-javascript-plain"
            },
            {
                name: "CSS3",
                icon: "fa fa-css3"
            },
            {
                name: "Bootstrap",
                icon: "devicon-bootstrap-plain"
            }
        ]
    },
    {
        id:9,
        title: "Ramonas Barcelona",
        imgSrc: require("../../assets/img/ramonas.jpg"),
        text: "E-commerce development with Prestashop 1.5",
        url: "http://www.ramonasbarcelona.com",
        tag: "prestashop",
        stack: [
            {
                name: "Prestashop 1.6",
                icon: "fa fa-code"
            },
            {
                name: "CSS3",
                icon: "fa fa-css3"
            },
            {
                name: "Bootstrap",
                icon: "devicon-bootstrap-plain"
            },
            {
                name: "JQuery",
                icon: "devicon-jquery-plain"
            },
            {
                name: "MySql",
                icon: "devicon-mysql-plain"
            }
        ]
    },
    {
        id:10,
        title: "Envases Take Away",
        imgSrc: require("../../assets/img/envases.jpg"),
        text: "Desarrollo de tienda e-commerce con Prestashop.",
        url: "http://www.envasestakeaway.com",
        tag: "prestashop",
        stack: [
            {
                name: "Prestashop 1.6",
                icon: "fa fa-code"
            },
            {
                name: "CSS3",
                icon: "fa fa-css3"
            },
            {
                name: "Bootstrap",
                icon: "devicon-bootstrap-plain"
            },
            {
                name: "JQuery",
                icon: "devicon-jquery-plain"
            },
            {
                name: "MySql",
                icon: "devicon-mysql-plain"
            }
        ]
    },
    {
        id:11,
        title: "About me",
        imgSrc: require("../../assets/img/developer.png"),
        text:
            "Hi! My name is Nico, I'm a Front-end Developer, passionate about learning new technologies and frameworks. Hope you enjoy some of my works and don't hesitate in contact me. Have fun!",
        tag: "about",
        stack: [
            {
                name: "Vue js",
                icon: "devicon-vuejs-plain"
            },
            {
                name: "Angular 5",
                icon: "devicon-angularjs-plain"
            },
            {
                name: "Material Design",
                icon: "devicon-angularjs-plain"
            },
            {
                name: "JQuery",
                icon: "devicon-jquery-plain"
            },
            {
                name: "Bootstrap",
                icon: "devicon-bootstrap-plain"
            }
        ]
    }
]
const Gallery = () => {
    const [projects] = useState(items)
    const selectedTag = useSelector(state => state.selectedTag);

    return (
        <div className="gallery__container">
            {projects.filter((item) => {
                if (selectedTag === 'all'){
                    return item 
                }
                    return item.tag === selectedTag
                }).map(item => (
                <ProjectCard key={item.id} title={item.title} text={item.text} imgSrc={item.imgSrc} stack={item.stack} projectUrl={item.url} />
            ))}
        </div>
    );
}

export default Gallery;