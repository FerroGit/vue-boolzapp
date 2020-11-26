var app = new Vue({
    el: '#app',

    data: {
        searchQuery: '',
        defaultMessage: ["ok", "vabene", "ci sentiamo dopo", "ho da fare, ti scrivo dopo"],
        indexContatti: 0,
        textArea: "",
        contatti: [
            {
                nome: "Luiso Calcetto",
                img: "img/avatar_io.jpg",
                display: true,
                data: "ultimo accesso 13.48",
                chat: [{
                    textChat: "Hai parlato con tua moglie?",
                    dataChat: "13.05",
                    drop: false,
                    typeMessage: "recived"
                },
                {
                    textChat: "no",
                    dataChat: "13.30",
                    drop: false,
                    typeMessage: "send"
                }]
            },

            {
                nome: "Arianno Barbiere",
                img: "img/avatar_6.jpg",
                display: true,
                data: "Online",
                chat: [{
                    textChat: "Se oggi non glielo dici è F-I-N-I-T-A !!!!",
                    dataChat: "13.50",
                    drop: false,
                    typeMessage: "recived"
                },

                {
                    textChat: "Mo vediamo, damme nattimoooooooo",
                    dataChat: "14.06",
                    drop: false,
                    typeMessage: "send"
                }]
            },
            {
                nome: "Fabio",
                img: "img/avatar_7.jpg",
                display: true,
                data: "accesso ore 10.30",
                chat: [{
                    textChat: "Oggi ho portato giu il cane",
                    dataChat: "10.30",
                    drop: false,
                    typeMessage: "recived"
                },
                {
                    textChat: "Ok",
                    dataChat: "11.00",
                    drop: false,
                    typeMessage: "send"
                }]
            },
            {
                nome: "Samuele",
                img: "img/avatar_8.jpg",
                display: true,
                data: "accesso ore 14.02",
                chat: [{
                    textChat: "Bellaaaaaaaaaa",
                    dataChat: "11.50",
                    drop: false,
                    typeMessage: "send"
                },
                {
                    textChat: "Ao",
                    dataChat: "12.47",
                    drop: false,
                    typeMessage: "send"
                },
                {
                    textChat: "che voi",
                    dataChat: "13.12",
                    drop: false,
                    typeMessage: "recived"
                },
                {
                    textChat: "nnamo dal bangla alle 4?",
                    dataChat: "14.01",
                    drop: false,
                    typeMessage: "send"
                }]
            },
        ]
    },
    methods: {
        contactActive: function (indice) {
            this.indexContatti = indice;
            this.scrollToEnd();
        },
        addMessage: function () {
            this.contatti[this.indexContatti].chat.push({
                textChat: this.textArea,
                dataChat: "16.02",
                drop: false,
                typeMessage: "send"
            });
            this.textArea = "";

            this.scrollToEnd();
            setTimeout(() => {
                this.contatti[this.indexContatti].chat.push({
                    textChat: this.defaultMessage[Math.floor(Math.random() * this.defaultMessage.length)],
                    dataChat: "16.02",
                    drop: false,
                    typeMessage: 'recived'
                });
                this.scrollToEnd();
            }, 1000);
        },
        scrollToEnd: function () {
            setTimeout(() => {
                var overflow = this.$el.querySelector("#container-chat");
                overflow.scrollTop = overflow.scrollHeight;
            }, 0)
        },
        resultQuery() {
            this.contatti.forEach(e => {

                if (e.nome.toLowerCase().includes(this.searchQuery.toLowerCase())) {
                    e.display = true;

                } else {
                    e.display = false;
                }
            });
        },
        dropdownMenu: function (e) {
            if (this.contatti[this.indexContatti].chat[e].drop === false) {
                this.contatti[this.indexContatti].chat[e].drop = true;
            } else if (this.contatti[this.indexContatti].chat[e].drop === true) {
                this.contatti[this.indexContatti].chat[e].drop = false;
            }
        },

        deleteMsg: function (i) {
            this.contatti[this.indexContatti].chat.splice(i, 1);
        }
    }
});

