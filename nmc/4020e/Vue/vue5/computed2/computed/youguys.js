var studentdata = new Vue({
    el: '#us',

    data: {
        stuname: "",
        counter: 0,
        oswald: "nothing yet",
        yall:  
        [
        {"stu_name":"Sarah","last_name":"Margate","domain":"https:\/\/sarahmargate.reclaim.hosting\/nmc\/6020\/copetillo\/classb\/","fact":"  I used to be a state runner and I like to crochet for fun!","section":"b","counter":"285"},
        {"stu_name":"Vincent","last_name":"Hamilton","domain":"amazingvinhamilton.com\/em\/6020e","fact":"I often forget to add the \"e\" to folder names. Also, I have cats named after Star Wars characters because I'm nerdy like that.","section":"a","counter":"286"},
        {"stu_name":"Sydney","last_name":"Weigand","domain":"sydsbestwebsite.com\/em\/6020","fact":"  I like to read! Science fiction and horror are my favorite genres.","section":"150","counter":"254"},
        {"stu_name":"Pamela","last_name":"Mandala","domain":"pamelamandala.com\/6020","fact":"  I have a beagle named Stella.","section":"150","counter":"255"},
        {"stu_name":"Eleyna","last_name":"Gonzalez","domain":"eleynagonzalezc.com\/em\/6020","fact":"I'm originally from Fort Lauderdale, FL and spent tons of time at the beach but can only wake surf!!","section":"150","counter":"256"},
        {"stu_name":"Katie","last_name":"Smith","domain":"structuredskew.com\/6020","fact":"I love to play tennis!","section":"150","counter":"257"},
        {"stu_name":"Max","last_name":"Pelot","domain":"maxpelot.com\/em\/6020","fact":"I'm a twin!","section":"150","counter":"258"},
        {"stu_name":"Khushi","last_name":"Vyas","domain":"kvyas.com\/em\/6020","fact":"  I was born in India ","section":"150","counter":"260"},
        {"stu_name":"Cole","last_name":"Sosebee","domain":"https:\/\/grillmastersosebee.com\/6020\/","fact":"I used to be a fly fishing guide.","section":"150","counter":"261"},
        {"stu_name":"Sarah","last_name":"Walker","domain":"sarahewalker.com\/em\/6020\/","fact":"  I have been to Africa four times! ","section":"150","counter":"262"},
        {"stu_name":"Yotam","last_name":"Ben-Bassat","domain":"yotamb.com\/em\/6020","fact":"  I have 4 younger siblings!","section":"150","counter":"263"},
        {"stu_name":"Isabella","last_name":"Aranda","domain":"isabellaaranda.com\/em\/6020","fact":"I like to watch true crime a lot.","section":"150","counter":"264"},
        {"stu_name":"Maria","last_name":"Finocchiaro","domain":"mariafinocchiaro.com\/em\/6020e","fact":" I'm in the midst of finishing all three of my dragoncon costumes for this year! Barbie, Post-Apocalypse Snow White, and Spike from Cowboy Bebop!","section":"a","counter":"265"},
        {"stu_name":"Jaya","last_name":"Franklin","domain":"jayathejuice.com\/NMI\/4020e","fact":"  I don't give up easy. ","section":"a","counter":"266"},
        {"stu_name":"Emily","last_name":"Diaz","domain":"emilydiazrav.com\/6020","fact":"I adopted 2 kittens named Chester and Lyla earlier this month!","section":"b","counter":"268"},
        {"stu_name":"Beth Anne","last_name":"DeKeizer","domain":"bethannedekeizer.com\/em\/6020e\/","fact":" I lived in Spain from when I was one to seven and I lived in London during my middle school years.","section":"b","counter":"269"},
        {"stu_name":"McKenzie","last_name":"Todd","domain":"mckenzietodd.com\/em\/6020e\/","fact":"  I am a mom of two sweet little boys. They're exactly one year and a half apart - 3 and 1 1\/12 years old!","section":"b","counter":"271"},
        {"stu_name":"Milledge","last_name":"Austin","domain":"https:\/\/milledge-austin.com\/em\/6020e","fact":"I love to kayak and am a part-time kayak guide here in Augusta, Georgia for a business called Cole Watkins Kayak Tours and Rentals. Our favorite route to take people on is the Stallings Island Tour, commonly referred to as Donkey Island. Google it, and then book a tour with us one weekend!","section":"b","counter":"272"},
        {"stu_name":"Julie Stone","last_name":"Ingle","domain":"https:\/\/juliestoneingle.com\/em\/6020e\/","fact":"I technically named my dog after two singers. Ziggy (as in Stardust), full name Zigfried Bratton Ingle Esq.     ","section":"b","counter":"284"},
        {"stu_name":"Stephanie","last_name":"Davis","domain":"stephaniescottdavis.com\/em\/6020e\/","fact":"I am a twin!  I have a twin brother.  ","section":"b","counter":"275"},
        {"stu_name":"Michelle","last_name":"Ung","domain":"ungmichelle.com\/nmc\/4020e","fact":"I like listening to music of many different languages--Spanish, Khmer, Japanese, and Amharic, to name a few!","section":"b","counter":"276"},
        {"stu_name":"Jenna","last_name":"Dapolite","domain":"jennadap.com\/nmc\/4020e\/","fact":"This year, I competed at College Nationals on the UGA Competition Cheerleading team, wrapping up my 13th and final year of competitive cheer.","section":"a","counter":"277"},
        {"stu_name":"Drew","last_name":"Haynes","domain":"gawgia3.com\/em\/6020e","fact":"  I am a member of SAG with voice credits in The Accountant","section":"a","counter":"278"},
        {"stu_name":"Lauren","last_name":"Fitzgerald","domain":"fitzgeraldlauren.com\/nmc\/4020e","fact":"I cosplay","section":"b","counter":"281"},
        {"stu_name":"Morgan","last_name":"Hayes","domain":"https:\/\/morganhayessite.com\/nmc\/6020e\/","fact":"  I have a twin sister who is an accountant.","section":"a","counter":"282"},
        {"stu_name":"Ellen","last_name":"Madson","domain":"ellenmadson.com\/nmc\/4020e","fact":"I'm currently learning American Sign Language and Korean!","section":"a","counter":"274"},
        {"stu_name":"Mary","last_name":"Allen","domain":"bymkallen.com\/em\/6020","fact":"  I have 3 daughters.","section":"a","counter":"250"},
        {"stu_name":"Sarah","last_name":"Hoover","domain":"sarahhooverr.com\/nmc\/4020","fact":"  I ride dirtbikes with my dad!","section":"1020","counter":"251"},
        {"stu_name":"Molly","last_name":"Hyser","domain":"mollyhyser.com\/nmc\/4020","fact":"I went to Australia and New Zealand for a Maymester this past summer, and I went bungee jumping!","section":"1020","counter":"249"},
        {"stu_name":"Swathi","last_name":"Ramaswamy","domain":"swathiramaswamy.com\/nmi\/4020","fact":"  Two recent-ish things about myself that I think are fairly interesting...hmmm...for one, I have a motorcycle license! I don't ride one in Athens because it's not as convenient or safe, but I ride around at home! Another thing is I really want to build a nightstand from scratch, having no building experience whatsoever! Catch me a","section":"1020","counter":"248"},
        {"stu_name":"Sean","last_name":"Malavet","domain":"sean-malavet.com\/nmc\/4020","fact":"I'm an RA at Black-Diallo-Miller Hall, and I'm half Puerto Rican, half Honduran.","section":"1020","counter":"247"},
        {"stu_name":"Patterson","last_name":"Houlihan","domain":"pattersongrace.com\/nmc\/4020","fact":"  I taught myself to sew this summer!","section":"1020","counter":"246"},
        {"stu_name":"Erica","last_name":"Techo","domain":"ericatecho.com\/em\/6020","fact":"I own an optometry practice! ","section":"150","counter":"241"},
        {"stu_name":"Kalvin","last_name":"Nguyen","domain":"https:\/\/kalvinnguyen1.com\/nmc\/4020\/","fact":"I'm left handed. :p","section":"1020","counter":"242"},
        {"stu_name":"Payton","last_name":"Lamkin","domain":"paytonlamkin.com\/nmc\/4020","fact":"  I have been a dancer for almost 18 years.","section":"1020","counter":"243"},
        {"stu_name":"Grace","last_name":"Johnson","domain":"gracejohnsoncreative.com\/nmc\/4020","fact":"I never learned how to use shift to capitalize, so I use caps lock every time I capitalize!","section":"1020","counter":"244"},
        {"stu_name":"Hannah","last_name":"Ebba","domain":"hannahebba.com\/nmc\/4020","fact":"It is a huge, distant dream of mine to be a creative director one day :)","section":"1020","counter":"245"},
        {"stu_name":"Erica","last_name":"Techo","domain":"ericatecho.com\/em\/6020","fact":"I own an optometry practice!  ","section":"1130","counter":"240"},
        {"stu_name":"Stevie","last_name":"Bramble","domain":"steviebramble2.com\/em\/4020e","fact":"  I love to swim when I can! Also, I love to read :)","section":"a","counter":"239"},
        {"stu_name":"Amanda","last_name":"Qubty","domain":"amandaq.name\/em\/6020e","fact":"i fear the windows will start rolling down of their own accord in the car wash. so then to settle my mind, i pull all the buttons to make sure they are, in fact, up. i just know that one day, i will accidentally roll them down, and i'll have no one but myself and my irrational fear to blame. (haha)","section":"a","counter":"238"},
        {"stu_name":"Emily ","last_name":"Daniels","domain":"https:\/\/novella-6780.com\/6020e\/","fact":"  I have read around thirty-seven books over the course of this past year.","section":"a","counter":"237"},
        {"stu_name":"Rachael (Moji)","last_name":"Ogunmuko - Olubajo","domain":"rachaelogun.com\/em\/6020e\/","fact":"Hi, my preferred name is Moji! & I love Portrait illustrations.","section":"a","counter":"234"},
        {"stu_name":"Samira","last_name":"Jafari","domain":"https:\/\/samirajafariem.com\/em\/6020e\/","fact":"Hi! I'm and investigative journalist for CNN, and I donated one of my kidney's to a co-worker last year.","section":"b","counter":"233"},
        {"stu_name":"Christine","last_name":"Li","domain":"http:\/\/clidigitally.com\/nmc\/advancedwebdev\/index.html","fact":"  I lost my 5th grade spelling bee because of Rihanna's song \"Umbrella.\" She pronounces it as um-ber-ella in her song and that's how I spelled it.","section":"a","counter":"225"},
        {"stu_name":"Sara","last_name":"Franc","domain":"sarafranc.com\/6020","fact":"I love Halloween and spooky vibes, but I'm also a huge scaredy cat. I once made my friends go with me to a \"haunted town,\" and then I wouldn't get out of the car once we got there. ","section":"b","counter":"226"},
        {"stu_name":"Jax","last_name":"Cannon","domain":"existencefee.com\/nmc\/4020e","fact":"  I love stop-motion animation","section":"a","counter":"228"},
        {"stu_name":"Sarah","last_name":"Rogers","domain":"sarahkrogers.com\/em\/6020e","fact":"I am left handed and a middle child. ","section":"b","counter":"229"},
        {"stu_name":"Nina","last_name":"Rachal","domain":"https:\/\/ninarachal.com\/em\/6020e\/","fact":"  I work in contracting for the government and I used to work at Disney World in Galaxy's Edge","section":"a","counter":"230"},
        {"stu_name":"Morgan","last_name":"Avrigean","domain":"morganavrigean.com\/em\/6020e","fact":"I once electrocuted myself on an overnight bus in Germany.","section":"b","counter":"231"},
        {"stu_name":"Morgan","last_name":"Avrigean","domain":"morganavrigean.com\/em\/6020e","fact":"I once electrocuted myself on an overnight bus in Germany.","section":"a","counter":"232"},
        {"stu_name":"Kiana","last_name":"Stevenson","domain":"em.rebelliouskiana.com\/em\/6020e\/home.html","fact":"I graduated with a Bachelor of Arts degree from Clark Atlanta University in May of 2023.","section":"a","counter":"221"},
        {"stu_name":"David","last_name":"Wheeler","domain":"davidnwheeler.com\/6020","fact":"  I'm a wedding DJ!","section":"150","counter":"259"},
        {"stu_name":"Molly","last_name":"Linder","domain":"https:\/\/mollyannlinder.com\/em\/6020e\/6020e","fact":" I am ambidextrous - I used to be better at it when I was younger, but still have the abilities. I am naturally left handed, but my great-grandmother made me write with my right hand for the longest time. ","section":"b","counter":"220"},
        {"stu_name":"Daniel","last_name":"Copetillo","domain":"copasetic.com\/nmc\/4020","fact":"No, I'm Daniel!","section":"b","counter":"218"},
        {"stu_name":"Rylee","last_name":"Wright","domain":"https:\/\/theryleewright.com\/em\/6020","fact":"  I have been competing in pageants since age 6. ","section":"150","counter":"219"},
        {"stu_name":"Ryian","last_name":"Freeman","domain":"ryianfreeman.com","fact":"  I am left handed!","section":"a","counter":"253"},
        {"stu_name":"Daniel","last_name":"Copetillo","domain":"copasetic.com\/nmc\/4020","fact":"I'm Daniel","section":"a","counter":"217"},
        {"stu_name":"Emuel","last_name":"Aldridge","domain":"emuel.com","fact":"I'm the teacher","section":"150","counter":"216"},
        {"stu_name":"Banibe","last_name":"Ebegbodi","domain":"nmi.bani-ebegbodi.com\/nmc\/4020e\/","fact":"I love to 3D print and laser cut! ","section":"b","counter":"287"},
        {"stu_name":"Kalia ","last_name":"Edmonds","domain":"kaliaedmonds.com\/em\/6020e","fact":"  I'm learning to kayak.","section":"a","counter":"289"},
        {"stu_name":"Gabby","last_name":"Branch","domain":"gabriellembranch.com\/nmc\/4020e","fact":"  I am a DJ at WUOG 90.5fm, UGA's student-run radio station :) My show is Thursdays @ 2pm if you want to listen!","section":"b","counter":"290"},
        {"stu_name":"Miguel","last_name":"Galindo","domain":"https:\/\/miguelgalindo5.com\/em\/6020e","fact":"\"Don't let what you are good at define who you are, who are you if you can't do what you are good at?\"","section":"b","counter":"291"},
        {"stu_name":"Jamar","last_name":"Fordham","domain":"jamarfordham.com\/nmc\/4020e","fact":"  I produce fully handmade garments. Bags of all types and mens\/womens custom clothing. I have worked with famous recording artists such as Waka Flocka Flame and Sam Hunt. ","section":"a","counter":"292"}
        ]
        
        




    },
    methods: {
        showImage(index) {
            this.counter = index
        },
        showFact(index) {
            this.counter = index
        }
    },

    computed: {
        image() {
            return "http://" + this.yall[this.counter].domain + "/images/me.jpg";
        },
        fact() {
            return this.yall[this.counter].fact;
        }
    }
})