import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  public data = [ 
    { "country" : "India" ,
      "data" : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus officiis eveniet ab deserunt ipsa numquam recusandae ducimus minus ratione iure molestias, quos, aut consequuntur provident deleniti, nulla officia ullam!',
      'id' : 1,
      'link' : 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
    },
    { "country" : "Australia" ,
      "data" : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quas in, nihil veniam totam sed inventore qui! Veniam minus nam quod aperiam, deserunt officiis? Dolor provident quam consequuntur officia quidem.',
      'id' : 2,
      'link' : 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
    },
    { "country" : "Bangladesh" ,
      "data" : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus nostrum laudantium fuga possimus veniam voluptatibus doloribus totam architecto. Rem tempora reprehenderit dolorem nemo, modi quaerat vero! Unde, molestiae odit.',
      'id' : 3,
      'link' : 'https://media-eng.dhakatribune.com/uploads/2018/09/mehedi-hasan-11-1537039027134.jpg'
    },
    { "country" : "Pakistan" ,
      "data" : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit deserunt obcaecati dolorem doloribus nobis eveniet rem fugiat saepe eligendi. Nisi aliquam quas fuga suscipit labore veritatis aspernatur facere dolores.',
      'id' : 4,
      'link' : 'https://lp-cms-production.imgix.net/news/2019/04/pakistan-tourism-news.jpg?q=25'
    },
    { "country" : "Nepal" ,
      "data" : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus officiis eveniet ab deserunt ipsa numquam recusandae ducimus minus ratione iure molestias, quos, aut consequuntur provident deleniti, nulla officia ullam!',
      'id' : 5,
      'link' : 'https://www.welcomenepal.com/uploads/destination/bhaktapur-nyatapol.jpeg'
    },
    { "country" : "Bhutan" ,
      "data" : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quas in, nihil veniam totam sed inventore qui! Veniam minus nam quod aperiam, deserunt officiis? Dolor provident quam consequuntur officia quidem.',
      'id' : 6,
      'link' : 'https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2018/11/Family-Attractions-in-Bhutan.jpg'
    },
    { "country" : "United Kingdoms" ,
      "data" : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus nostrum laudantium fuga possimus veniam voluptatibus doloribus totam architecto. Rem tempora reprehenderit dolorem nemo, modi quaerat vero! Unde, molestiae odit.',
      'id' : 7,
      'link' : 'http://www.uktravelers.co.uk/uktravelers/uploads/2016/11/tourism-in-london.jpg'
    },
    { "country" : "United States" ,
      "data" : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit deserunt obcaecati dolorem doloribus nobis eveniet rem fugiat saepe eligendi. Nisi aliquam quas fuga suscipit labore veritatis aspernatur facere dolores.',
      'id' : 8,
      'link' : 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1551194229%2Fgrand-canyon-south-rim-19-GRANDCANYON0219.jpg%3Fitok%3DpXzOkx5_&q=85'
    },
    { "country" : "Italy" ,
      "data" : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus officiis eveniet ab deserunt ipsa numquam recusandae ducimus minus ratione iure molestias, quos, aut consequuntur provident deleniti, nulla officia ullam!',
      'id' : 9,
      'link' : 'https://upload.wikimedia.org/wikipedia/commons/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg'
    },
    { "country" : "Spain" ,
      "data" : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quas in, nihil veniam totam sed inventore qui! Veniam minus nam quod aperiam, deserunt officiis? Dolor provident quam consequuntur officia quidem.',
      'id' : 10,
      'link' : 'https://www.traveldailymedia.com/assets/2019/10/shutterstock_1238785048.jpg'
    },
    { "country" : "Brazil" ,
      "data" : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus nostrum laudantium fuga possimus veniam voluptatibus doloribus totam architecto. Rem tempora reprehenderit dolorem nemo, modi quaerat vero! Unde, molestiae odit.',
      'id' : 11,
      'link' : 'https://getsready.com/wp-content/uploads/2017/12/rio-de-jenero.jpg'
    },

  ]
  constructor() {}

  setdata(param){
    this.data = param
  }
}
