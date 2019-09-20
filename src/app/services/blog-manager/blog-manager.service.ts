import { Injectable } from '@angular/core';
import { Article } from 'app/types/blog-types';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogManagerService {

  private articles: Article[] = [
    {
      id: 'article1',
      title: 'Título del artículo 1',
      writtenBy: 'Nacho',
      // tslint:disable-next-line: max-line-length
      contentPreview: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, molestiae, est, velit qui nobis enim voluptas facere vel quae similique ipsa! Assumenda corrupti quia maiores possimus ipsum nisi, corporis nemo.',
      // tslint:disable-next-line: max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, rem perspiciatis eos laboriosam numquam ipsam. Veritatis maiores animi, similique expedita eum quidem tempore ullam, repellendus est asperiores odit vero hic? Voluptas fugiat labore, quam eaque saepe necessitatibus voluptatem accusantium ducimus sint nemo nulla officia a, fuga vel magnam officiis iure ipsa fugit. Dignissimos eos quas exercitationem? Numquam commodi possimus magni? Optio reprehenderit quisquam consequuntur incidunt laboriosam est enim corporis ea, officiis laborum sequi voluptatibus dignissimos, officia inventore voluptatem doloremque asperiores pariatur! Ipsum quisquam, nam eveniet cum tempora repudiandae eius facilis? Adipisci praesentium sunt magni, possimus optio sapiente quia asperiores nesciunt, itaque voluptas labore veritatis iure porro laborum ducimus molestias nobis assumenda commodi deserunt ipsa temporibus, exercitationem in a totam! Similique! Modi expedita quam culpa delectus beatae recusandae illum, mollitia quo similique sit? Porro iure nesciunt corrupti delectus. Nulla placeat debitis unde accusantium. Quidem eos iure ipsam! Ab temporibus ex cum. Hic itaque, repellat dolorum velit ratione eos consectetur vero quisquam doloribus, illo iusto eaque distinctio eveniet esse illum sunt atque tenetur cumque quaerat expedita? Reprehenderit odio ab natus nihil quibusdam. Nam reiciendis sint sequi nemo eveniet optio eius, non autem dicta beatae voluptates harum vero illum neque est, explicabo quisquam tempore atque dolor aperiam quod odit quas? Sunt, assumenda ad! Ratione ipsum alias corporis dicta fugiat repellendus labore cumque ab, illo distinctio natus nulla voluptatum, aperiam nobis asperiores! Perferendis deserunt quas saepe maiores alias earum praesentium aperiam amet, neque assumenda. Voluptatem temporibus praesentium quam ea asperiores ipsum a, voluptates totam, sunt reiciendis doloremque dolorem officiis. Adipisci atque impedit odio earum ducimus, molestiae sunt dolor rem expedita quaerat quod. Exercitationem, odio? Sint perspiciatis in beatae tenetur rerum impedit quos atque adipisci officia voluptatum excepturi minus, odio ex pariatur. Corrupti officia, animi aut ratione ab soluta labore asperiores libero quos ullam nostrum.',
      mainImg: 'https://www.glenstone.org/wp-content/uploads/prod/2018/07/AV_Landscape-Hero-Contour-2993-1276x800.jpg'
    },
    {
      id: 'article2',
      title: 'Título del artículo 2',
      writtenBy: 'Nacho',
      // tslint:disable-next-line: max-line-length
      contentPreview: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, molestiae, est, velit qui nobis enim voluptas facere vel quae similique ipsa! Assumenda corrupti quia maiores possimus ipsum nisi, corporis nemo.',
      // tslint:disable-next-line: max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, rem perspiciatis eos laboriosam numquam ipsam. Veritatis maiores animi, similique expedita eum quidem tempore ullam, repellendus est asperiores odit vero hic? Voluptas fugiat labore, quam eaque saepe necessitatibus voluptatem accusantium ducimus sint nemo nulla officia a, fuga vel magnam officiis iure ipsa fugit. Dignissimos eos quas exercitationem? Numquam commodi possimus magni? Optio reprehenderit quisquam consequuntur incidunt laboriosam est enim corporis ea, officiis laborum sequi voluptatibus dignissimos, officia inventore voluptatem doloremque asperiores pariatur! Ipsum quisquam, nam eveniet cum tempora repudiandae eius facilis? Adipisci praesentium sunt magni, possimus optio sapiente quia asperiores nesciunt, itaque voluptas labore veritatis iure porro laborum ducimus molestias nobis assumenda commodi deserunt ipsa temporibus, exercitationem in a totam! Similique! Modi expedita quam culpa delectus beatae recusandae illum, mollitia quo similique sit? Porro iure nesciunt corrupti delectus. Nulla placeat debitis unde accusantium. Quidem eos iure ipsam! Ab temporibus ex cum. Hic itaque, repellat dolorum velit ratione eos consectetur vero quisquam doloribus, illo iusto eaque distinctio eveniet esse illum sunt atque tenetur cumque quaerat expedita? Reprehenderit odio ab natus nihil quibusdam. Nam reiciendis sint sequi nemo eveniet optio eius, non autem dicta beatae voluptates harum vero illum neque est, explicabo quisquam tempore atque dolor aperiam quod odit quas? Sunt, assumenda ad! Ratione ipsum alias corporis dicta fugiat repellendus labore cumque ab, illo distinctio natus nulla voluptatum, aperiam nobis asperiores! Perferendis deserunt quas saepe maiores alias earum praesentium aperiam amet, neque assumenda. Voluptatem temporibus praesentium quam ea asperiores ipsum a, voluptates totam, sunt reiciendis doloremque dolorem officiis. Adipisci atque impedit odio earum ducimus, molestiae sunt dolor rem expedita quaerat quod. Exercitationem, odio? Sint perspiciatis in beatae tenetur rerum impedit quos atque adipisci officia voluptatum excepturi minus, odio ex pariatur. Corrupti officia, animi aut ratione ab soluta labore asperiores libero quos ullam nostrum.',
      mainImg: 'https://www.glenstone.org/wp-content/uploads/prod/2018/07/AV_Landscape-Hero-Contour-2993-1276x800.jpg'
    },
    {
      id: 'article3',
      title: 'Título del artículo 3',
      writtenBy: 'Nacho',
      // tslint:disable-next-line: max-line-length
      contentPreview: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, molestiae, est, velit qui nobis enim voluptas facere vel quae similique ipsa! Assumenda corrupti quia maiores possimus ipsum nisi, corporis nemo.',
      // tslint:disable-next-line: max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, rem perspiciatis eos laboriosam numquam ipsam. Veritatis maiores animi, similique expedita eum quidem tempore ullam, repellendus est asperiores odit vero hic? Voluptas fugiat labore, quam eaque saepe necessitatibus voluptatem accusantium ducimus sint nemo nulla officia a, fuga vel magnam officiis iure ipsa fugit. Dignissimos eos quas exercitationem? Numquam commodi possimus magni? Optio reprehenderit quisquam consequuntur incidunt laboriosam est enim corporis ea, officiis laborum sequi voluptatibus dignissimos, officia inventore voluptatem doloremque asperiores pariatur! Ipsum quisquam, nam eveniet cum tempora repudiandae eius facilis? Adipisci praesentium sunt magni, possimus optio sapiente quia asperiores nesciunt, itaque voluptas labore veritatis iure porro laborum ducimus molestias nobis assumenda commodi deserunt ipsa temporibus, exercitationem in a totam! Similique! Modi expedita quam culpa delectus beatae recusandae illum, mollitia quo similique sit? Porro iure nesciunt corrupti delectus. Nulla placeat debitis unde accusantium. Quidem eos iure ipsam! Ab temporibus ex cum. Hic itaque, repellat dolorum velit ratione eos consectetur vero quisquam doloribus, illo iusto eaque distinctio eveniet esse illum sunt atque tenetur cumque quaerat expedita? Reprehenderit odio ab natus nihil quibusdam. Nam reiciendis sint sequi nemo eveniet optio eius, non autem dicta beatae voluptates harum vero illum neque est, explicabo quisquam tempore atque dolor aperiam quod odit quas? Sunt, assumenda ad! Ratione ipsum alias corporis dicta fugiat repellendus labore cumque ab, illo distinctio natus nulla voluptatum, aperiam nobis asperiores! Perferendis deserunt quas saepe maiores alias earum praesentium aperiam amet, neque assumenda. Voluptatem temporibus praesentium quam ea asperiores ipsum a, voluptates totam, sunt reiciendis doloremque dolorem officiis. Adipisci atque impedit odio earum ducimus, molestiae sunt dolor rem expedita quaerat quod. Exercitationem, odio? Sint perspiciatis in beatae tenetur rerum impedit quos atque adipisci officia voluptatum excepturi minus, odio ex pariatur. Corrupti officia, animi aut ratione ab soluta labore asperiores libero quos ullam nostrum.',
      mainImg: 'https://www.glenstone.org/wp-content/uploads/prod/2018/07/AV_Landscape-Hero-Contour-2993-1276x800.jpg'
    }
  ];

  constructor() { }

  public getArticles(): Observable<Article[]> {
    return new Observable(observer => {
      observer.next(this.articles);
    });
  }

  public createArticle(article: Article): Observable<boolean> {
    this.articles.push(article);
    return new Observable(observer => {
      observer.next(true);
    });
  }

  public getArticle(index: number): Observable<Article> {
    return new Observable(observer => {
      observer.next(this.articles[index]);
    })
  }
}
