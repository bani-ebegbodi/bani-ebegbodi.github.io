var header = new Vue({
    el: '#header',
    data: {
        yourName: 'Banibe Ebegbodi',
        description: "Cognitive Science Major",
        link1: "Intro",
        link2: "My Portfolio",
        link3: "About Me",
        link4: "Contact",
        link5: "My List",
        link6: "Conditional",
        link7: "Function",
        avatar: "images/me.jpg"
    }
}) //header 

var portfolio = new Vue ({
    el: '#portfolio',
    data: {
        portfolioTitle: "My Portfolio",
        portfolioDescription: "Here are some images of Spain! This doesn't have much to do with my portfolio, but it's pretty neat!",
        image1: "images/vuepix/one.jpg",
        imageText1: "Image One",
        image2: "images/vuepix/two.jpg",
        imageText2: "Image Two",
        image3: "images/vuepix/three.jpg",
        imageText3: "Image Three",
        image4: "images/vuepix/four.jpg",
        imageText4: "Image 4",
        image5: "images/vuepix/five.jpg",
        imageText5: "Image Five",
        image6: "images/vuepix/six.jpg",
        imageText6: "Image Six"
    }
}) //portfolio 

var aboutMe = new Vue ({
    el: '#about',
    data: {
        aboutTitle: "About Me",
        image7: "images/vuepix/seven.jpg",
        aboutDescription: "My name is Banibe Ebegbodi and I am a Cognitive Science Major with a minor in Japanese and Computer Science as well as a certificate in New Media. My club invovement includes UGAHacks, which I am the Lead Director for, and the Association for Computing Machinery, which I am the Vice President for."
    }
}) //aboutMe

var list = new Vue ({
    el: '#list',
    data: {
        listTitle: "My List",
        listDescription: "List of a few of my favorite Rhytem Games!",
        favorites: ['Osu!', 'Cytus', 'Cytus II', 'Voez', 'Muse Dash', 'Dance Rush Stardom']
    }
}) //list

var conditional = new Vue ({
    el: '#conditional',
    data: {
        conditionalTitle: "Conditional",
        teacherQ: "What is the Professor's name?",
        teacherName: "Enter name here",
        classQ: "What is the name of the class?",
        className: "Enter name here"
    }
}) //conditional 

var getColor = new Vue ({
    el: '#function',
    data: {
        bgColor: '',
        colors: ['red', 'green','blue']
        //sizes: ['30px','10px','60px']
    },
    methods: {
        changeColor(color) {
            this.bgColor = color
        }


    }

}) //getColor

/*var getSize = new Vue ({
    el: 'function',
    data: {
        bgSize: '',
        size: ['30px', '10px', '60px']
    },
    methods: {
        changeSize(size) {
            this.bgSize = size
        }
    }
}) //getSize */

var contact = new Vue ({
    el: '#contact',
    data: {
        contactTitle: "Contact",
        contactDescription: "Here you can fill out your information and contact me! I most likely won't be getting back to you due to this being an assignment, but forms can be fun!"
    }
}) //contact