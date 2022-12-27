const { createApp } = Vue;

  const dt = luxon.DateTime;

  createApp({
    data() {
      return {
        activeChat: 0,
        cerca : '',
        nuovo : '',
        contacts: 
        [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages:   [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Hai portato a spasso il cane?',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Ricordati di stendere i panni',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received'
                                }
                            ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages:   [
                                {
                                date: '03/20/2020 16:30:00',
                                message: 'Ciao come stai?',
                                status: 'sent'
                                },
                                {
                                date: '03/20/2020 16:30:55',
                                message: 'Bene grazie! Stasera ci vediamo?',
                                status: 'received'
                                },
                                {
                                date: '03/20/2020 16:35:00',
                                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                status: 'sent'
                                }
                            ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages:   [
                                {
                                date: '03/28/2020 10:10:40',
                                message: 'La Marianna va in campagna',
                                status: 'received'
                                },
                                {
                                date: '03/28/2020 10:20:10',
                                message: 'Sicuro di non aver sbagliato chat?',
                                status: 'sent'
                                },
                                {
                                date: '03/28/2020 16:15:22',
                                message: 'Ah scusa!',
                                status: 'received'
                                }
                            ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages:   [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Lo sai che ha aperto una nuova pizzeria?',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Si, ma preferirei andare al cinema',
                                status: 'received'
                                }
                            ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages:   [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Ricordati di chiamare la nonna',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Va bene, stasera la sento',
                                status: 'received'
                                }
                            ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages:   [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Ciao Claudia, hai novità?',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Non ancora',
                                status: 'received'
                                },
                                {
                                date: '10/01/2020 15:51:00',
                                message: 'Nessuna nuova, buona nuova',
                                status: 'sent'
                                }
                            ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages:   [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                                status: 'received'
                                }
                            ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages:   [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                                status: 'received'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:51:00',
                                message: 'OK!!',
                                status: 'received'
                                }
                            ],
            }
        ]
      }
    },
    computed: {
        search_contact(){
            let chatFiltrata;
            if(this.cerca != ''){
                chatFiltrata = this.contacts.filter((chat) => {
                    return chat.name.toLowerCase().includes(this.cerca.toLowerCase())
                    
                })
            }else{
                
                chatFiltrata = this.contacts;
            };
            
            return chatFiltrata
        }
    },
    methods:{
        changeChat(index){
            this.activeChat = index
        },
        formatDate(index){
            let orarioInvio = this.contacts[this.activeChat].messages[index].date;
            let jsDate = new Date (orarioInvio);
            let newDate =  dt.fromJSDate(jsDate);
            
            newDate = newDate.setLocale('it').toLocaleString(dt.TIME_24_SIMPLE);
           return newDate
        },
        newMessage(){
            let date = dt.now().setLocale('it');
            console.log(date);
            let nuovoMessaggio =
                {
                    date: date,
                    message: this.nuovo,
                    status: 'sent'
                }
                
            this.contacts[this.activeChat].messages.push(nuovoMessaggio);
            this.nuovo = '';
 
            
            setTimeout(() => {
                let arrayRisposte = ['Ok!', 'Certo!', 'Come stai?', 'Ci vediamo alle 8:00?', 'A dopo!']
                let answer = arrayRisposte[Math.floor(Math.random()*arrayRisposte.length)];
                let risposta = {
                    date: date,
                    message: answer,
                    status: 'received'
                }
                rispostaNuova = this.contacts[this.activeChat].messages.push(risposta);
            }, 2000);
            
        }

}
}).mount('#app')