var app = new Vue({
    el: '#app',

    data: {
        indexContatti: 0,
        textArea: "",
        contatti: [
            {
                nome: "Luiso Calcetto",
                img: "img/avatar_io.jpg",
                data: "ultimo accesso 13.48",
                chat: [{
                    textChat: "Hai parlato con tuaa moglie?",
                    dataChat: "13.05",
                    typeMessage: "recived"
                },
                {
                    textChat: "no",
                    dataChat: "13.30",
                    typeMessage: "send"
                }]
            },

            {
                nome: "Arianno Barbiere",
                img: "img/avatar_6.jpg",
                data: "Online",
                chat: [{
                    textChat: "Se oggi non glielo dici è F-I-N-I-T-A !!!!",
                    dataChat: "13.50",
                    typeMessage: "recived"
                },

                {
                    textChat: "Mo vediamo, damme nattimoooooooo",
                    dataChat: "14.06",
                    typeMessage: "send"
                }]
            },
            {
                nome: "Fabio",
                img: "img/avatar_7.jpg",
                data: "accesso ore 10.30",
                chat: [{
                    textChat: "Oggi ho portato giu il cane",
                    dataChat: "10.30",
                    typeMessage: "recived"
                },
                {
                    textChat: "Ok",
                    dataChat: "11.00",
                    typeMessage: "send"
                }]
            },
            {
                nome: "Samuele",
                img: "img/avatar_8.jpg",
                data: "accesso ore 14.02",
                chat: [{
                    textChat: "Bellaaaaaaaaaa",
                    dataChat: "11.50",
                    typeMessage: "send"
                },
                {
                    textChat: "Ao",
                    dataChat: "12.47",
                    typeMessage: "send"
                },
                {
                    textChat: "che voi",
                    dataChat: "13.12",
                    typeMessage: "recived"
                },
                {
                    textChat: "nnamo dal bangla alle 4?",
                    dataChat: "14.01",
                    typeMessage: "send"
                }]
            },
        ]
    },
    methods: {
        contactActive: function (indice) {
            this.indexContatti = indice;
        }
    }
});